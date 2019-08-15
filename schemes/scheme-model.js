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

}

function findSteps(id) {

}

function add(scheme) {

}

function update(changes, id) {

}

function remove(id) {

}