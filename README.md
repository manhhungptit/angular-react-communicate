# angular-react-communicate
Example project for communicating between Angular and React component

1. Setup
```
cd angular-test
npm install
cd react-test
npm install
```

2. Run
```
cd angular-test
npm start
cd react-test
npm start
```

The React component in Angular app is rendered by iframe. Communicating between React and Angular components is by cross-domain messaging:
https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage

Reference:
- https://stackoverflow.com/questions/9153445/how-to-communicate-between-iframe-and-the-parent-site
- https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
