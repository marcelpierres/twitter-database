// where we write our knex queries
const db = require('../dbconfig');

module.exports = {
    add,
    find,
    findById,
    remove
};

async function add(subject){
    const [id] = await db('subjects').insert(subject);
    return id;
}


async function find(){
    return db("subjects");
}

async function findById(id){
    return db("subjects")
    .where({id: id})
    .first();
}


async function remove(id){
    // in database subjects
    return db("subjects")
    // look for ID
    .where({id: id})
    // delete it
    .del();
}