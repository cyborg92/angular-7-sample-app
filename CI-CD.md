#Step 1

You are going to need something to serve your files. Let’s go with express. We will also need ‘path’ to setup our server (unless you wanna hardcode those in yourself)

npm install --save express path

#Step 2.
 Now if we want Heroku to build our project on their servers we need to tell them two things.
 1. How to build our project and
 2. What versions of node/npm our code works with

 You can do this by putting the following in package.json

  "scripts": {
    ...
    "postinstall": "ng build --prod"
  },
  "engines": {
    "node": "8.11.3",
    "npm": "6.1.0"
  },
Remember to replace the versions of node and npm to the ones you have.
You can find out with

node --version
npm --version
Step 3
By default angular separates away from deployments what it thinks are ‘development’ only additions. However, since Heroku is building our code, we need to give it the ability to run those modules.

To do this you can either move @angular/cli, @angular/compiler-cli, typescript and "@angular-devkit/build-angular": "~0.6.8"__*__ from our devDependencies over to dependencies. Or we can have Heroku install those modules on their own.


    "preinstall": "npm install -g @angular/cli @angular/compiler-cli typescript",

# Step 4
 Create our server file. In your main application directory (the one with package.json) create a file called server.js. Add the following

const path = require('path');
const express = require('express');
const app = express();

// Serve static files
app.use(express.static(__dirname + '/dist/MY_APP_NAME'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/MY_APP_NAME/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 5000);

Remember to replace MY_APP_NAME (both of them) to the name of your app.

#Step 5
Now to create a Procfile to tell Heroku “how” we wish our app to be run. In your project directory (same one with package.json) create a file called Procfile and place the following

web: node server.js
Step 6. Final Step
We can now build our app with npm install and run it with ‘node server.js’.
If everything works, we should now see a working site on http://localhost:5000

If you have any issues feel free to leave a message in the comments.

To push to heroku, assuming you have the cli installed.
If not (https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

heroku create
git add .
git commit -m "initial heroku deploy'
git push heroku master