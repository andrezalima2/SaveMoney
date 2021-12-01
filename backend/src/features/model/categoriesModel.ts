const categoriesConn = require('../../database/connection')

async function selectAllCatCost(){

    const sql = 'SELECT * FROM categoriasdesp';
    const rows = await categoriesConn.simpleQuery(sql);
    return rows;
}

async function selectAllCatProd(){

    const sql = 'SELECT * FROM categoriasprod';
    const rows = await categoriesConn.simpleQuery(sql);
    return rows;
}

module.exports = { selectAllCatCost, selectAllCatProd }