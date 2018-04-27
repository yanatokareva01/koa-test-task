/**
 * Created by Yana Tokareva on 27.04.2018.
 */
const mysql = require('promise-mysql');

module.exports = mysql.createPool({ user: 'root', password: 'wusoph7x', database: 'test', host: 'localhost' });