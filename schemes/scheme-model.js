// import the database
const db = require('../data/db-config');

// export the functions
module.exports = {
	find,
	findById,
	findSteps,
	add,
	update,
	remove
};

function find() {
	return db('schemes');
}

function findById(id) {
	return db('schemes')
		.where('id', id);
}

function findSteps(id) {
	return db('schemes')
		.join('steps', 'schemes.id', '=', 'steps.scheme_id')
		.select('schemes.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
		.where('schemes.id', id)
		.orderBy('steps.step_number');
}

function add(scheme) {

}

function update(changes, id) {

}

function remove(id) {

}