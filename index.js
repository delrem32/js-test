// Import stylesheets
import './style.css';

// Write Javascript code!
'use strict';

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const data = {
  'Andrew': {name: 'Andrew', age: 12},
  'Baer':{name: 'Baer', age: 14},
  'Cerr':{name: 'Cerr', age: 15},
  'Deadr':{name: 'Deadr', age: 16}
};

const b = Object.values(data);

console.log(data)


const data2 = [
  {name: 'Andrew', age: 12},
  {name: 'Baer', age: 14},
  {name: 'Cerr', age: 15},
  {name: 'Deadr', age: 16}
];
const exp = ['Cerr', 'Baer'];
const c = exp.map(name => data2.filter(obj => obj.name === name)).flat();
const t = data2.filter(i => exp.includes(i.name));
console.log(c);
console.log(t);