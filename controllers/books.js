/**
 * Created by Yana Tokareva on 27.04.2018.
 */
'use strict';
const db = require('../mysql');

module.exports.get = async (ctx, next) => {
	const limit = ctx.request.query.limit || 10;
	const offset = ctx.request.query.offset || 0;
	const orderField = ctx.request.query.orderField || null;
	const order = ctx.request.query.order || 'ASC';

	try {
		let request = null;
		if (orderField) {
			request = `SELECT * FROM books ORDER BY ${orderField} ${order} LIMIT ${limit} OFFSET ${offset};`;
		} else {
			request = `SELECT * FROM books LIMIT ${limit} OFFSET ${offset};`;
		}

		ctx.body = await db.query(request);
	} catch (err) {
		ctx.status = 500;
		ctx.body = err;
	}
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
	const bookId = ctx.params.id;
	let book = null;

	try {
		book = {
			title: ctx.request.body.title || null,
			date: ctx.request.body.date ? (new Date(ctx.request.body.date)).toISOString().substring(0, 10) : null,
			author: ctx.request.body.author || null,
			description: ctx.request.body.description || null,
			image: ctx.request.body.image || null
		};
	} catch (err) {
		ctx.status = 400;
		return;
	}

	try {
		let request = `UPDATE books SET `;
		if (book.title || book.date || book.author || book.description || book.image) {
			request += `${book.title ? `title='${book.title}',`: ''}`;
			request += `${book.date ? `date='${new Date(book.date).toISOString().substring(0, 10)}',`: ''}`;
			request += `${book.author ? `author='${book.author}',`: ''}`;
			request += `${book.description ? `description='${book.description}',`: ''}`;

			request = request.substring(0, request.length - 1) +  ` WHERE id = ${bookId};`;

			const result = await db.query(request);
		}

		ctx.body = "ok";

	} catch (err) {
		ctx.status = 500;
		ctx.body = err;
	}
};