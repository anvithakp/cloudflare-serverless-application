# Cloudflare Workers : Developed as part of cloudflare challenge

Using Cloudflare Workers, deployed an application that will randomly send users to one of two webpages with the use of Cloudflare Workers API,command-line tool Wrangler, and deployed to the free workers.dev deployment playground.

## Reference Links

- [Workers Quick Start documentation](https://developers.cloudflare.com/workers/quickstart/)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [HTMLRewriter](https://developers.cloudflare.com/workers/reference/apis/html-rewriter/)
- [Cookie documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

## Get Started

### 1. Install the workers command-line tool wrangler.

The Workers Quick Start in the documentation shows how to get started with Wrangler, creating a project, and configuring and deploying it. We highly recommend that you spend time reading and following along with this guide!

To begin, install the [Wrangler](https://github.com/cloudflare/wrangler) command-line tool.

### 2. Generate a new project using `wrangler generate` command

Using the `generate` command (covered in the Quick Start), generate a new project with a name of your choice:

```sh
$ wrangler generate your-project-name https://github.com/cloudflare-internship-2020/internship-application-fullstack
```

### 3. Use `wrangler dev` to locally test/develop your application

The recently launched [`wrangler dev`](https://github.com/cloudflare/wrangler#-dev) feature will allow you to begin developing your application using `localhost` - this means that you can test your project locally and make sure it works, without having to sort out deployment until later in the exercise.

Note that a major benefit of using `wrangler dev` is the ability to output `console.log` statements to your terminal - this is super useful for inspecting HTTP responses and variables!

## Functionalities

### 1. Request the URLs from the API

Make a fetch request inside of your script's event handler to the URL `https://cfw-takehome.developers.workers.dev/api/variants`, and parse the response as JSON. The response will be an array of URLs, which should be saved to a variable.

### 2. Request a (random: see #3) variant

Make a fetch request to one of the two URLs, and return it as the response from the script.

### 3. Distribute requests between variants

The `/api/variants` API route will return an array of two URLs. Requests should be evenly distributed between the two urls, in A/B testing style. This means that when a client makes a request to the Workers script, the script should roughly return each variant around 50% of the time.

## Deployment

### 1. Register a workers.dev subdomain

Every Workers user has access to a free, unique workers.dev subdomain, which allows you to deploy your projects to a stable URL without needing to purchase domains and configure DNS records. Following the Quick Start linked above includes setting up a workers.dev subdomain!

### 2. A user should be able to visit the deployed version of the site

Using wrangler's `publish` command, you can deploy your application and make it available under your workers.dev subdomain. 

### 3. Persisting variants

If a user visits the site and receives one of the two URLs, persist which URL is chosen in a cookie so that they always see the same variant when they return to the application. A cookie would be a great way to implement this!

