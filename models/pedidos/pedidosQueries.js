module.exports = {

    //getters
    obtenerPedidos: `SELECT id, cliente, fecha, subTotal, precioFinal,
     (SELECT COUNT(*) FROM solicitudes where idPedido = id) as items FROM pedido `,

     obtenerPedidoPorId: `SELECT id, cliente, fecha, subTotal, precioFinal,
     (SELECT COUNT(*) FROM solicitudes where idPedido = id) as items FROM pedido WHERE id = ?`,

    obtenerSolicitudesPorIdPedido: `SELECT l.idSolicitud, l.idPedido, l.idProducto, l.cantidad, l.subTotal, l.fotos, a.nombre, a.precio
        FROM solicitudes l
            INNER JOIN productos a ON a.idProducto = l.idProducto
        WHERE l.idPedido = ? `,

    obtenerProductos: `SELECT idProducto, nombre, precio FROM productos`,

    // creates
    crearPedido: `INSERT INTO pedido(cliente, fecha, subTotal, precioFinal) VALUES ?`,

    crearSolicitud: `INSERT INTO solicitudes(idPedido, idProducto, cantidad, subTotal, fotos) VALUES ?`,


    //updates
    editarPedido: `UPDATE pedido SET subTotal = ?, precioFinal = ? WHERE id = ?`,

    //delete
    eliminarSolicitud: `DELETE FROM solicitudes WHERE idSolicitud = ?`,
};