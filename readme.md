# Calculatorinator
Welcome to my app the Calculatorinator. Yes it's basically a fancy calculator

## Getting Started
There are the following steps before further development on this app can be continutes.

### Ensuring you have everything installed.
This project uses yarn as its package manager. Before progressing further ensure you have `nodejs` and `yarn` installed on your device.

### Setting up the project
You can download this project by cloning this repo

You would normally need to manually create the `.env` file containing all environment variables. But for the sake of ease of assignment marking, this has been included in the project repo. (**But should not normally be included**)

When in this directory in cmd or terminal install the required packages using:

```bash
yarn install
```

This will install `Expo` as well as all dependancies required to run this app. The app can then be started with:

```bash
expo start --web
```

The `--web` **is required** as some dependancies do not work with expo unless running in a web broswer.

Once started you can then use the app by navigating to `http://localhost:19006/` in your web browser on the same device. (or `http://{your internal ip}:19006/` on LAN).

The app can be put into mobile mode by pressing `Ctrl + Shift + m` (in firefox at least).

### Development environment
I used Visual Studio Code to develop this application using the `React Native Tools` extension.

## What to know about the code and firebase
This app used firebase, but it has been turned off as it is no longer needed

There is one default user set up in firebase The login is as follows:
```
username: test
password: testpass
```

The firebase database is setup at `https://console.firebase.google.com/project/swen325-calc/database`, and can be accessed through the firebase console if you have project access.

All code methods, classes and functions have their own javadoc style code comments. As well as the larger more complex methods have their own inline comments.

## Project architecture
This project has been split up into an MVP (Model View Presenter) architecture, any code contributions should match how the existing codebase represents this architecture.

#### View layer 
- App.tsx

#### Presenter layer 
- render() methods in the screen classes
- any methods directly called by user input (eg. buttons or text input)
- non user prompted methods to generate JSX components

#### Model layer
- Any backend method which deal with modifying data stored in the screen classes
- Any functions which communicate with an external api or feature
