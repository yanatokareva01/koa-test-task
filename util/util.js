/**
 * Created by Yana Tokareva on 27.04.2018.
 */

module.exports.randomString = () => {
	return Math.random().toString(30).substring(7);
};

module.exports.randomDate = () => {
	return (new Date()).toISOString().substring(0, 10);
};
