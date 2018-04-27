/**
 * Created by Yana Tokareva on 27.04.2018.
 */
'use strict';
const db = require('../mysql');

module.exports.generate = async (ctx, next) =>{
	ctx.body = await db.query("select 1+1 as test from dual");
};