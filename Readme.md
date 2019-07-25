# Custom webpack configuration
This project is a webpack configuration example.
## How to Run
Once in the directory: 
```
npm install
```
To run the app (building the bundle + watching for changes):
```
npm run webpack-dev
```
Once this is complete the application can be reached by navigating to:
`localhost:8080`

### To only build a bundle file
Once in the directory: 
```
npm install
```
To build a bundle file:
```
npm run webpack
```

## To Do:
1.  A single javascript file as the entry point into the application

2. Handle Javascript/ES6/React code with both .js and .jsx file extensions; should output a single ES5 .js bundle with a unique hash added to the filename

3. Handle SCSS code with .scss extensions; should output a single .css file with a unique hash added to the filename

4. Handle IMG file with .jpeg, .jpg, .png, and .gif extensions; should return a link referencing the file

5. Handle SVG file with .svg extension; return a base-64 data-encoded string if the file is < 1MB and a link to the file otherwise