async function connect(){

    if(globalThis.connection && globalThis.connection.state !== 'disconnected'){
        return globalThis.connection;
    }

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://server:Trfc67.mls6c@192.168.235.21/testeSave");
    console.log("Conectou no Mysql");
    globalThis.connection = connection;
    return connection
}

connect();

module.exports = {connect}