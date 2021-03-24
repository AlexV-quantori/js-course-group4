(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// import fetch from './node_modules/node-fetch';
const fetch = require('node-fetch')
const url = 'https://jsonplaceholder.typicode.com/posts';

function getPageContent(url) {
  fetch(url)
  .then((response) => {
      return response.json()
  })
  .then((parsedData) => {
      pageContent = parsedData
      alert('Content has been loaded!\nPress button again to post it on page!')
  })
}

let pageContent = [];
let elem = document.getElementById("button")
elem.addEventListener("click", () => {addPostToHTML()});

function addPostToHTML() {
    if (pageContent.length === 0) {
        getPageContent(url)
    } else {
        addPostAndCountIt()
    }
}

function addPostFromCahce() {
    let counter = 0;
    function addPostAndCountIt(){
        if (counter === 100){
            alert('No more posts in data')
        } else {
            let paragraphText = document.createTextNode(pageContent[counter].body);
            let headerText = document.createTextNode(pageContent[counter].title);
            let header = document.createElement('h4')
            header.appendChild(headerText);
            let paragraph = document.createElement('p')
            paragraph.appendChild(paragraphText);
            document.getElementById('blockToAdd').appendChild(header);
            document.getElementById('blockToAdd').appendChild(paragraph);
            counter++;
        };
    }
    return addPostAndCountIt
}

const addPostAndCountIt = addPostFromCahce();

},{"node-fetch":2}],2:[function(require,module,exports){
(function (global){(function (){
"use strict";

// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports.default = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;
}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
