/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst navLinks = [\n    {\n        name: \"Home\",\n        href: \"/\"\n    },\n    {\n        name: \"About\",\n        href: \"/about\"\n    },\n    {\n        name: \"Projects\",\n        href: \"/projects\"\n    },\n    {\n        name: \"Contact\",\n        href: \"/contact\"\n    }\n];\nfunction Navbar() {\n    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"fixed top-0 left-0 w-full z-50 bg-[#0A1E3A]/80 backdrop-blur-lg shadow-lg border-b-2 border-[#FFD700]/40\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-7xl mx-auto px-4 py-2 flex items-center justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    className: \"flex items-center gap-1 sm:gap-2 min-w-fit\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            width: \"32\",\n                            height: \"38\",\n                            viewBox: \"0 0 40 48\",\n                            fill: \"none\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M20 4 Q36 12 33 32 Q30 44 20 44 Q10 44 7 32 Q4 12 20 4 Z\",\n                                    fill: \"#0A1E3A\",\n                                    stroke: \"#FFD700\",\n                                    strokeWidth: \"2\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\maestro\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ellipse\", {\n                                    cx: \"20\",\n                                    cy: \"18\",\n                                    rx: \"7\",\n                                    ry: \"3.5\",\n                                    fill: \"#FFD700\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\maestro\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"polygon\", {\n                                    points: \"20,7 21.5,12 26.5,12 22.5,15 24,20 20,17 16,20 17.5,15 13.5,12 18.5,12\",\n                                    fill: \"#000\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\maestro\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\maestro\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-bold text-[#FFD700] text-base sm:text-lg tracking-wider\",\n                            children: \"Richmond\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\maestro\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\maestro\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1 flex items-center justify-center overflow-x-auto whitespace-nowrap scrollbar-none hide-scrollbar min-w-0\",\n                    children: navLinks.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: link.href,\n                            className: `relative font-semibold px-2 py-1 text-sm sm:text-base md:text-lg transition-colors duration-200 whitespace-nowrap ${router.pathname === link.href ? \"text-[#FFD700]\" : \"text-white hover:text-[#FFD700]\"}`,\n                            children: [\n                                link.name,\n                                router.pathname === link.href && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n                                    className: \"absolute left-0 -bottom-1 w-full h-0.5 bg-[#FFD700] rounded\",\n                                    layoutId: \"nav-underline\",\n                                    transition: {\n                                        type: \"spring\",\n                                        stiffness: 400,\n                                        damping: 30\n                                    },\n                                    style: {\n                                        opacity: 0.7\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\maestro\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, link.name, true, {\n                            fileName: \"D:\\\\maestro\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"D:\\\\maestro\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\maestro\\\\components\\\\Navbar.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\maestro\\\\components\\\\Navbar.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDdUI7QUFFM0I7QUFDVztBQUV4QyxNQUFNSSxXQUFXO0lBQ2Y7UUFBRUMsTUFBTTtRQUFRQyxNQUFNO0lBQUk7SUFDMUI7UUFBRUQsTUFBTTtRQUFTQyxNQUFNO0lBQVM7SUFDaEM7UUFBRUQsTUFBTTtRQUFZQyxNQUFNO0lBQVk7SUFDdEM7UUFBRUQsTUFBTTtRQUFXQyxNQUFNO0lBQVc7Q0FDckM7QUFFYyxTQUFTQztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7SUFDekMsTUFBTVUsU0FBU1Asc0RBQVNBO0lBQ3hCLHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFFYiw4REFBQ1Ysa0RBQUlBO29CQUFDSSxNQUFLO29CQUFJTSxXQUFVOztzQ0FDdkIsOERBQUNFOzRCQUFJQyxPQUFNOzRCQUFLQyxRQUFPOzRCQUFLQyxTQUFROzRCQUFZQyxNQUFLOzRCQUFPQyxPQUFNOzs4Q0FDaEUsOERBQUNDO29DQUFLQyxHQUFFO29DQUEyREgsTUFBSztvQ0FBVUksUUFBTztvQ0FBVUMsYUFBWTs7Ozs7OzhDQUMvRyw4REFBQ0M7b0NBQVFDLElBQUc7b0NBQUtDLElBQUc7b0NBQUtDLElBQUc7b0NBQUlDLElBQUc7b0NBQU1WLE1BQUs7Ozs7Ozs4Q0FDOUMsOERBQUNXO29DQUFRQyxRQUFPO29DQUF5RVosTUFBSzs7Ozs7Ozs7Ozs7O3NDQUVoRyw4REFBQ2E7NEJBQUtuQixXQUFVO3NDQUErRDs7Ozs7Ozs7Ozs7OzhCQUdqRiw4REFBQ0M7b0JBQUlELFdBQVU7OEJBQ1pSLFNBQVM0QixHQUFHLENBQUNDLENBQUFBLHFCQUNaLDhEQUFDL0Isa0RBQUlBOzRCQUVISSxNQUFNMkIsS0FBSzNCLElBQUk7NEJBQ2ZNLFdBQVcsQ0FBQyxrSEFBa0gsRUFBRUYsT0FBT3dCLFFBQVEsS0FBS0QsS0FBSzNCLElBQUksR0FBRyxtQkFBbUIsa0NBQWtDLENBQUM7O2dDQUVyTjJCLEtBQUs1QixJQUFJO2dDQUNUSyxPQUFPd0IsUUFBUSxLQUFLRCxLQUFLM0IsSUFBSSxrQkFDNUIsOERBQUNMLGlEQUFNQSxDQUFDOEIsSUFBSTtvQ0FDVm5CLFdBQVU7b0NBQ1Z1QixVQUFTO29DQUNUQyxZQUFZO3dDQUFFQyxNQUFNO3dDQUFVQyxXQUFXO3dDQUFLQyxTQUFTO29DQUFHO29DQUMxREMsT0FBTzt3Q0FBRUMsU0FBUztvQ0FBSTs7Ozs7OzsyQkFWckJSLEtBQUs1QixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQjVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGdlbi1wb3J0Zm9saW8vLi9jb21wb25lbnRzL05hdmJhci50c3g/MWI4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBuYXZMaW5rcyA9IFtcbiAgeyBuYW1lOiBcIkhvbWVcIiwgaHJlZjogXCIvXCIgfSxcbiAgeyBuYW1lOiBcIkFib3V0XCIsIGhyZWY6IFwiL2Fib3V0XCIgfSxcbiAgeyBuYW1lOiBcIlByb2plY3RzXCIsIGhyZWY6IFwiL3Byb2plY3RzXCIgfSxcbiAgeyBuYW1lOiBcIkNvbnRhY3RcIiwgaHJlZjogXCIvY29udGFjdFwiIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XG4gIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgei01MCBiZy1bIzBBMUUzQV0vODAgYmFja2Ryb3AtYmx1ci1sZyBzaGFkb3ctbGcgYm9yZGVyLWItMiBib3JkZXItWyNGRkQ3MDBdLzQwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgcHktMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgey8qIExvZ28vU2hpZWxkICovfVxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHNtOmdhcC0yIG1pbi13LWZpdFwiPlxuICAgICAgICAgIDxzdmcgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjM4XCIgdmlld0JveD1cIjAgMCA0MCA0OFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0yMCA0IFEzNiAxMiAzMyAzMiBRMzAgNDQgMjAgNDQgUTEwIDQ0IDcgMzIgUTQgMTIgMjAgNCBaXCIgZmlsbD1cIiMwQTFFM0FcIiBzdHJva2U9XCIjRkZENzAwXCIgc3Ryb2tlV2lkdGg9XCIyXCIvPlxuICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCIyMFwiIGN5PVwiMThcIiByeD1cIjdcIiByeT1cIjMuNVwiIGZpbGw9XCIjRkZENzAwXCIvPlxuICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPVwiMjAsNyAyMS41LDEyIDI2LjUsMTIgMjIuNSwxNSAyNCwyMCAyMCwxNyAxNiwyMCAxNy41LDE1IDEzLjUsMTIgMTguNSwxMlwiIGZpbGw9XCIjMDAwXCIvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LVsjRkZENzAwXSB0ZXh0LWJhc2Ugc206dGV4dC1sZyB0cmFja2luZy13aWRlclwiPlJpY2htb25kPC9zcGFuPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIHsvKiBOYXYgTGlua3M6IEFsd2F5cyBWaXNpYmxlICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy14LWF1dG8gd2hpdGVzcGFjZS1ub3dyYXAgc2Nyb2xsYmFyLW5vbmUgaGlkZS1zY3JvbGxiYXIgbWluLXctMFwiPlxuICAgICAgICAgIHtuYXZMaW5rcy5tYXAobGluayA9PiAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBrZXk9e2xpbmsubmFtZX1cbiAgICAgICAgICAgICAgaHJlZj17bGluay5ocmVmfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSBmb250LXNlbWlib2xkIHB4LTIgcHktMSB0ZXh0LXNtIHNtOnRleHQtYmFzZSBtZDp0ZXh0LWxnIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCB3aGl0ZXNwYWNlLW5vd3JhcCAke3JvdXRlci5wYXRobmFtZSA9PT0gbGluay5ocmVmID8gJ3RleHQtWyNGRkQ3MDBdJyA6ICd0ZXh0LXdoaXRlIGhvdmVyOnRleHQtWyNGRkQ3MDBdJ31gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGluay5uYW1lfVxuICAgICAgICAgICAgICB7cm91dGVyLnBhdGhuYW1lID09PSBsaW5rLmhyZWYgJiYgKFxuICAgICAgICAgICAgICAgIDxtb3Rpb24uc3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wIC1ib3R0b20tMSB3LWZ1bGwgaC0wLjUgYmctWyNGRkQ3MDBdIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgbGF5b3V0SWQ9XCJuYXYtdW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgdHlwZTogXCJzcHJpbmdcIiwgc3RpZmZuZXNzOiA0MDAsIGRhbXBpbmc6IDMwIH19XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBvcGFjaXR5OiAwLjcgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwibW90aW9uIiwiTGluayIsInVzZVJvdXRlciIsIm5hdkxpbmtzIiwibmFtZSIsImhyZWYiLCJOYXZiYXIiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwicm91dGVyIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2Iiwic3ZnIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiZmlsbCIsInhtbG5zIiwicGF0aCIsImQiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsImVsbGlwc2UiLCJjeCIsImN5IiwicngiLCJyeSIsInBvbHlnb24iLCJwb2ludHMiLCJzcGFuIiwibWFwIiwibGluayIsInBhdGhuYW1lIiwibGF5b3V0SWQiLCJ0cmFuc2l0aW9uIiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJzdHlsZSIsIm9wYWNpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Navbar__WEBPACK_IMPORTED_MODULE_2__]);\n_components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\maestro\\\\pages\\\\_app.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\maestro\\\\pages\\\\_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQytCO0FBQ1c7QUFFM0IsU0FBU0MsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUM1RCxxQkFDRTs7MEJBQ0UsOERBQUNILDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGdlbi1wb3J0Zm9saW8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIk5hdmJhciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();