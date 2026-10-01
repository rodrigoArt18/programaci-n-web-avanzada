/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Button.ts"
/*!**********************************!*\
  !*** ./src/components/Button.ts ***!
  \**********************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Button = void 0;
class Button {
    label;
    constructor(label) {
        this.label = label;
    }
    onClick() {
        console.log(`Presionando: ${this.label}`);
    }
    render() {
        return `<button id="saveBtn">${this.label}</button>`;
    }
}
exports.Button = Button;


/***/ },

/***/ "./src/components/Footer.ts"
/*!**********************************!*\
  !*** ./src/components/Footer.ts ***!
  \**********************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Footer = void 0;
class Footer {
    render() {
        return `<footer>Aprende a tu manera - ISIL</footer>`;
    }
}
exports.Footer = Footer;


/***/ },

/***/ "./src/components/Header.ts"
/*!**********************************!*\
  !*** ./src/components/Header.ts ***!
  \**********************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Header = void 0;
class Header {
    title;
    constructor(title) {
        this.title = title;
    }
    render() {
        return `<h1>${this.title}</h1>`;
    }
}
exports.Header = Header;


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
let exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const Header_1 = __webpack_require__(/*! ./components/Header */ "./src/components/Header.ts");
const Footer_1 = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer.ts");
const Button_1 = __webpack_require__(/*! ./components/Button */ "./src/components/Button.ts");
const app = document.querySelector('#app');
if (!app) {
    throw new Error('No se encontró el elemento con id "app"');
}
const header = new Header_1.Header('Programación Web Avanzada');
const footer = new Footer_1.Footer();
const button = new Button_1.Button('Guardar');
app.innerHTML = `
    ${header.render()}
    ${button.render()}
    ${footer.render()}
`;
document.querySelector('#saveBtn')?.addEventListener('click', () => button.onClick());

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map