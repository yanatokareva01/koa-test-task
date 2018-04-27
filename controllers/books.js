/**
 * Created by Yana Tokareva on 27.04.2018.
 */
'use strict';
const db = require('../mysql');

module.exports.get = async (ctx, next) => {

};

module.exports.add = async (ctx, next) => {
	let book = null;

	try {
		book = {
			title: ctx.request.body.title,
			date: (new Date(ctx.request.body.date)).toISOString().substring(0, 10),
			author: ctx.request.body.author,
			description: ctx.request.body.description,
			image: ctx.request.body.image
		};
	} catch (err) {
		ctx.status = 400;
		return;
	}

	try {
		const result = await db.query(`INSERT into books (title, date, author, description, image) 
									VALUES ('${book.title}','${book.date}','${book.author}','${book.description}','${book.image}');`);

		ctx.body = { id: result.insertId };
	} catch (err) {
		ctx.status = 500;
		ctx.body = err;
	}

};

module.exports.update = async (ctx, next) => {

};