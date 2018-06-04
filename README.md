# Cameron's Submission - FLIPPA FRONTEND TEST

## How to run
Remember to do an `npm install` after cloning or pulling this repo.

- `npm run develop` - Run the API server & frontend in development mode (hot reloading, etc)
- `npm run test`  - Run tests and validate snaps
- `npm run build` - Build a production build (pls don't use this in production)
- `npm run start` - Serve the API and production build. Make sure you run `npm run build` first.

----

# FLIPPA FRONTEND TEST

You need to create a simple counter application that can do the following:
* Add a named counter to a list of counters
* Increment any of the counters
* Decrement any of the counters
* Delete a counter
* Show a sum of all the counter values
* It must persist data back to the server

We have provided:
* Compiled Directory: of `/static/`
* `/static/index.html` that will be served at `localhost:3000` when the server is running
* `/static/app.js` and `/static/app.css` will be used automatically by `/static/index.html`

> If you need other publicly available files, other than `index.html`, `app.js`, `app.css` you will have to modify the server code in `/index.js`

Some other notes:
* The design, layout, ux, is all up to you.
* You can change anything you want (server stuff included) as long as the above list is completed.
* This isn't a backend test, don't make it require any databases.
* If you decide to use a precompiler of any kind (js/css/etc..) we need to be able to run it with `npm run build`.
* We don't want to run any `npm install -g whatever` commands. **NO GLOBAL DEPENDENCIES**
* Tests are good.

A possible layout could be:
```
         Counter App
+-----------------------------+
| Input                   [+] |
+-----------------------------+
+-----------------------------+
| [x] Bob           [-] 5 [+] |
| [x] Steve         [-] 1 [+] |
| [x] Pat           [-] 4 [+] |
+-----------------------------+
+-----------------------------+
| Total                    10 |
+-----------------------------+
```

## Review Criteria

In general, we will review submissions based on the following criteria:

- It works as the spec states
- Atomic commits with well-written commit messages
- Thoughtful domain modelling and separation of concerns
- Attention to principles of object-oriented / functional programming
- Idiomatic code for the language
- Tests


## Install and start the server

```
$ npm install
$ npm start
$ npm run build #[optional] use for any precompilers you choose
```

## API endpoints / examples

> The following endpoints are expecting a `Content-Type: application/json`

```
GET /api/v1/counters
# []

POST {title: "bob"} /api/v1/counter
# [
#   {id: "asdf", title: "bob", count: 0}
# ]

POST {title: "steve"} /api/v1/counter
# [
#   {id: "asdf", title: "bob", count: 0},
#   {id: "qwer", title: "steve", count: 0}
# ]

POST {id: "asdf"} /api/v1/counter/inc
# [
#   {id: "asdf", title: "bob", count: 1},
#   {id: "qwer", title: "steve", count: 0}
# ]

POST {id: "qwer"} /api/v1/counter/dec
# [
#   {id: "asdf", title: "bob", count: 1},
#   {id: "qwer", title: "steve", count: -1}
# ]

DELETE {id: "qwer"} /api/v1/counter
# [
#   {id: "asdf", title: "bob", count: 1}
# ]

GET /api/v1/counters
# [
#   {id: "asdf", title: "bob", count: 1},
# ]
```

> **NOTE:* Each request returns the current state of all counters.
