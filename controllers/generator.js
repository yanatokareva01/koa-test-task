/**
 * Created by Yana Tokareva on 27.04.2018.
 */
'use strict';
const db = require('../mysql');
const { randomString, randomDate } = require('../util/util');

module.exports.generate = async (ctx, next) =>{
	const requests = [];

	for (let j = 0; j < 100; j++) {
		let request = `INSERT INTO books (title, date, author, description, image) VALUES `;

		for (let i = 0; i < 1000; i++) {
			request += `('${randomString()}','${randomDate()}','${randomString()}','${randomString()}','${randomString()}'),\n`
		}

		request += `('${randomString()}','${randomDate()}','${randomString()}','${randomString()}','${randomString()}');`;

		requests.push(request);
	}

	try {
		for (let r of requests) {
			await db.query(r);
		}

		ctx.body = "Ok";
		ctx.status = 200;
	} catch (err) {
		ctx.body = err;
	}
};