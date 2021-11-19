const userConnection = require('../../database/connection')

async function selectAllClient(){

    const conn = await userConnection.connect();

    const sql = "SELECT * FROM client"

    const rows = await conn.query(sql);

    return rows;
}

module.exports = { selectAllClient }