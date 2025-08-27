# Bootstrap, Vite

## Create Project

```bash

# Install Vite
npm i --save-dev vite


# Install Bootstrap
npm i --save bootstrap @popperjs/core

# Install additional dependency
npm i --save-dev sass

# Project Structure
mkdir {src,src/js,src/scss}
touch src/index.html src/js/main.js src/scss/styles.scss vite.config.js
```

## vite.config.js

```js
const path = require('path')
export default {
  root: path.resolve(__dirname, 'src'),
  server: {
    port: 8080,
    hot: true
  }
}
```

## src/index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap w/ Vite</title>
  </head>
  <body>
    <div class="container py-4 px-3 mx-auto">
      <h1>Hello, Bootstrap and Vite!</h1>
      <button class="btn btn-primary">Primary button</button>
    </div>
    <script type="module" src="./js/main.js"></script>
  </body>
</html>

```
