# Lovebox Client

A client for my fork of @Julisa99's [Lovebox DIY Project](https://github.com/julisa99/Lovebox)

Enter the box's name, the box password and your message in the simple form to write the message in the Firebase Realtime Database. The box will then fetch the new message using the Firebase REST API.

To run, create a file named config.js in src/config
Fill it with your firebase information:

```
export const config = {
  apiKey: '<YOUR API KEY>',
  authDomain: '<YOUR AUTH DOMAIN>',
  databaseURL: '<YOUR DB URL>',
  projectId: '<YOUR PROJECT ID>',
  storageBucket: '<YOUR STORAGE BUCKET>',
  messagingSenderId: '<YOUR SENDER ID>',
  appId: '<YOUR APP ID>',
};
```

Then, create a box in your firebase Realtime Database:

In the `boxes` object, create an object named `<YOUR BOX ID>`
This object has two properties:

- Message: The string that will be displayed on the box.
- password: The SHA-512 hash of the box's password.

i.e., your database will look like this in JSON:

```
{
  boxes: {
    test-box-1: {
      message: 'Hi!'
      password: 'ed54a91cbbc3f6d63e9c9fe5eccc1f7ef8b4951abeeb158a51130445f9905695788d7e6ccba5fa4b460aef79487802f11372ec666fe6f45c713ddf84cd1cad1c'
    },
    test-box-2: {
      message: 'Hello my friend!'
      password: 'a426abca24a6f0cc4fab6ccef78285d5c13b995d78c108faaad9e674b57eec987dc4012a66a9c5cefdf01d206cd6436033957981df217168c58ab6278862d4ca'
    }
  }
}
```

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
