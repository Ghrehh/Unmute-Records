(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function hoverColor(className, color){
  $(className).mouseenter(function(){
    $(this).animate({ color: color }, { duration: 200, queue: false});
  });
  
  $(className).mouseleave(function(){
    $(this).animate({ color: "white" }, { duration: 200, queue: false});
  });
}

$(document).ready(function(){

  hoverColor(".facebook", "#3b5998");
  hoverColor(".twitter", "#4099ff");
  hoverColor(".instagram", "#454545");
  
 
})
},{}]},{},[1]);
