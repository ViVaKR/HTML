// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


// math.js
import { PI, add } from "./math";

const result = add(PI, 45.67);

const displayElement = document.getElementById('result-display');

if (displayElement) {
    displayElement.textContent = result;
}
console.log(result);
