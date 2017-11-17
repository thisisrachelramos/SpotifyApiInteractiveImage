## Please note

Based off of: https://github.com/kauffecup/spotify-react-router-auth

ESLint'd  
Packeges updated.

## Set Up

Make sure you create your application, get your id and secret, and register
your callback url - `localhost:3000/callback` is what I used - by following
[Spotify's Getting Started Guide][sgs].

## Running

The first thing you'll need to do is set your applications client id, client
secret, and callback url. You can do this via the environment variables
`client_id`, `client_secret`, and `redirect_uri`. Or by typing them into the
code in `server/routes.js`. Fun tip: because we're using [Better NPM Run][bnr],
you can set these in your `package.json` - head over there to see an example.

There are three scripts - `start`, `dev`, and `build`.

To run the production bundle:

~~~bash
$ npm run build
$ npm start
~~~

To run in dev mode (with hot reloading, and un-minified source maps):

~~~bash
$ npm run dev
~~~


