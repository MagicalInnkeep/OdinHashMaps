#!/usr/bin/env node

import { HashMap } from "./HashMap.js";

//Create hashmap
const test = new HashMap() 

//Populate hashmap
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

//check length
console.log("Length (12): "+ test.length())

//update sets
test.set('lion', 'golden yellow')
//check length
console.log("Length (12): "+ test.length())

//additional pop
test.set('moon', 'silver')
console.log("Length (13): "+ test.length())