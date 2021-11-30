const mysql = require('mysql2');

const db_connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'savemoney',
    password:''
});

function connect(db_connection: any){
    try{
        db_connection
        console.log("Connected");
    }
    catch(err){
        console.log(err);
    }
}

async function simpleQuery(query: any) {
    const result = await db_connection.promise().query(query)
    return result[0]
}

async function valuedQuery(query: any, values: any){
    const result = await db_connection.promise().query(query, values)
    return result[0]
}

connect(db_connection)

module.exports = {connect, simpleQuery, valuedQuery}