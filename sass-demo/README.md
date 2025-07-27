# Sass, Vite, Bootstrap

```bash
npm init -y
npm i --save-dev vite
npm i --save bootstrap @popperjs/core
npm i --save-dev sass

mkdir {src,src/js,src/scss}
touch src/index.html src/js/main.js src/scss/styles.scss vite.config.js

npm start
```

## package.json

```js
{
  // ...
  "scripts": {
    "start": "vite",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  // ...
}
```

```js
import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  },
  // Optional: Silence Sass deprecation warnings. See note below.
  css: {
     preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            'import',
            'mixed-decls',
            'color-functions',
            'global-builtin',
          ],
        },
     },
  },
}
```
