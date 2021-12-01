const orderConn = require('../../database/connection')

async function selectAllOrders(){

    const sql = 'SELECT * FROM pedidos';
    const rows = await orderConn.simpleQuery(sql);
    return rows;
}

async function selectTargetOrder(id_pedido: any){

    const sql = 'SELECT * FROM pedidos WHERE id_pedido = ?';
    const values = [id_pedido];
    const rows = await orderConn.valuedQuery(sql, values);
    return rows;
}

async function insertOrders(id_cliente: any, id_produto: any, qtd_produto: any, data_entrega: any, valor_total: any){

    const sql = 'INSERT INTO pedidos(id_cliente, id_produto, qtd_produto, data_entrega, valor_total) values(?, ?, ?, ?, ?)';
    const values = [id_cliente, id_produto, qtd_produto, data_entrega, valor_total];
    const rows = await orderConn.valuedQuery(sql, values);
    return rows;
}

async function updateOrders(id_pedido: any, id_cliente: any, id_produto: any, qtd_produto: any, data_entrega: any, valor_total: any){

    const sql = 'UPDATE pedidos SET id_cliente = ?, SET id_produto = ?, SET qtd_produto = ?, SET data_entrega = ?, SET valor_total = ? WHERE id_pedido = ?';
    const values = [id_cliente, id_produto, qtd_produto, data_entrega, valor_total, id_pedido];
    const rows = await orderConn.valuedQuery(sql, values);
    return rows;
}

async function deleteOrders(id_pedido: any){

    const sql = 'DELETE FROM pedidos WHERE id_pedido = ?';
    const values = [id_pedido];
    const rows = await orderConn.valuedQuery(sql, values);
    return rows;
}

module.exports = { selectAllOrders, selectTargetOrder, insertOrders, updateOrders, deleteOrders }