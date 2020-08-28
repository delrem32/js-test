// Import stylesheets
import './style.css';

// Write Javascript code!
'use strict';

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var a = 15;

function bla() {
   var a;
   console.log(a);
   a = 25;
   function result() {
      return console.log(a);
   }
   result.a = 20;
   return result();
}

var foo = bla.bind({a: 45});
foo();