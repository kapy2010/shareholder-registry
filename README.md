# Shareholder Registry

## Running locally

```
git clone https://github.com/fullstackreact/food-lookup-demo.git
cd food-lookup-demo

psql -f database.sql
npm i

cd client
npm i

cd ..
npm start
```

## Overview

A Webpack development server running on `localhost:3000`. This development server will bundle all static assets located under `client/src/`. All requests to `localhost:3000` will serve `client/index.html` which will include Webpack's `bundle.js`.

To prevent any issues with CORS, the user's browser will communicate exclusively with the Webpack development server.


This setup uses [concurrently](https://github.com/kimmobrunfeldt/concurrently) for process management. Executing `npm start` instructs `concurrently` to boot both the Webpack dev server and the API server.
