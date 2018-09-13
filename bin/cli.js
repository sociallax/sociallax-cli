#!/usr/bin/env node

//Capture args sent via CLI
const [,, ...args] = process.argv

//print args
console.log(`Hello from ${args}`)
