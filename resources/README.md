These are Cordova resources. You can replace icon.png and splash.png and run
`ionic cordova resources` to generate custom icons and splash screens for your
app. See `ionic cordova resources --help` for details.

Cordova reference documentation:

- Icons: https://cordova.apache.org/docs/en/latest/config_ref/images.html
- Splash Screens: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/


Developer set-up for authentication.

You must be invited to the Firebase that has been set up for this project.

Once you have those credentials:

cd /src/app and type: echo text>api-keys.ts

This creates a new typescript file in the directory. You will edit the document to include your Firebase credentials.
The document should look like this:

export const masterFirebaseConfig = {
   
    apiKey: "your apiKey",
    authDomain: "your authDomain",
    databaseURL: "your databaseURL",
    projectId: "your projectId",
    storageBucket: "your storageBucket",
    messagingSenderId: "your messagingSenderId"
}

This is a private key so you should hide it from the repository.

open .gitignore in your IDE, and add the line:

/src/app/api-keys.ts

This will make it invisible to unauthorized viewers of your repository.