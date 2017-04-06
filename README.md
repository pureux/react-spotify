# Project Scope

This project is an example [React JS](https://facebook.github.io/react/) web app that connects to [Spotify](http://www.spotify.com) and retrieves the albums for a given artist, retrieves the album details and tracks for a selected album, and plays an audio preview for a selected track.

# Further Infrastructure

It is a simplified example.  Typically you would add a data architecture such as [Redux](http://redux.js.org/docs/basics/UsageWithReact.html) for managing state in a more complete way instead of only at the top-level component, and add URL routing with something like [React Router](https://reacttraining.com/react-router/).

# React Starter Template

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).  This setup a basic React template as well as all of the Node modules and configuration for Webpack, Babel, and other build tooling, so it is a great way to hit the ground running with a new app.

# Spotify Developer Account

I have intentionally excluded my [Spotify developer account's](https://developer.spotify.com/) Client ID and Client Secret from the source code.  You'll need to create your own developer account (it's free) and add your application to that account.  You will then need to add your own Client ID and Client Secret to a file under `src/constants` named `config.js`:

```
export const CLIENT_ID = 'your-client-id-here';
export const CLIENT_SECRET = 'your-client-secret-here';
```

# Screen Captures

![Albums](/screencaps/react-spotify-1-albums.png?raw=true "Albums")

![Selected Album](/screencaps/react-spotify-2-selected-album.png?raw=true "Selected Album")

![Selected Track](/screencaps/react-spotify-3-selected-track.png?raw=true "Selected Track")

![Spotify API Console Output](/screencaps/react-spotify-4-api-console-output.png?raw=true "Spotify API Console Output")

![Spotify API Console Output Cont'd](/screencaps/react-spotify-5-api-console-output.png?raw=true "Spotify API Console Output Cont'd")

![React Chrome Extension](/screencaps/react-spotify-6-chrome-extension-state-props.png?raw=true "React Chrome Extension")