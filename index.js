addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

/**
 * Error Function Handler
 */

async function error() {
  return new Response("Error Occured!!", { status: 500 });
}

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
  const VARIANT1 = "variant1";
  const VARIANT2 = "variant2";
  const VARIANT = "variant";

  let cachedVariant;

  const cookie = request.headers.get("cookie");

  const response = await fetch(
    "https://cfw-takehome.developers.workers.dev/api/variants",
    { headers: { "Content-Type": "application/json" } }
  );
  if (!response.ok) return error();

  const text = await response.text();
  const responseObj = JSON.parse(text);

  if (!Array.isArray(responseObj.variants) || responseObj.variants.length != 2)
    return error();

  let redirectUrl;
  if (cookie && cookie.includes(`${VARIANT}=${VARIANT1}`)) {
    redirectUrl = responseObj.variants[0];
  } else if (cookie && cookie.includes(`${VARIANT}=${VARIANT2}`)) {
    redirectUrl = responseObj.variants[1];
  } else if (Math.random() < 0.5) {
    redirectUrl = responseObj.variants[0];
  } else {
    redirectUrl = responseObj.variants[1];
  }

  let redirctResponse = await fetch(redirectUrl);

  redirctResponse = new Response(redirctResponse.body, redirctResponse);

  let cookieValue =
    redirectUrl === responseObj.variants[0] ? VARIANT1 : VARIANT2;

  console.log("cookie = " + cookieValue);
  redirctResponse.headers.set(
    "Set-Cookie",
    `${VARIANT}=${cookieValue}; Path=/`
  );

  return redirctResponse;
}
