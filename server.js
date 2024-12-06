import { Sequelize } from 'sequelize'; // Make sure you have sequelize installed
//  This code demonstrates how to access the current module
console.log(import.meta.url); // Output: file:///path/to/your/server.js
console.log(import.meta.path); // Output: /path/to/your/server.js