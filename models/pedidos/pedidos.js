const query = require('../services/database').query;
const queries = require('./pedidosQueries');

const pedido = {};

pedido.obtenerPedidos = () => new Promise((resolve, reject) => {
    query(queries.obtenerPedidos, [], (error, pedido) => {
        if (error) {
            reject(error);
        } else {
            resolve(pedido || []);
        }
    });
});

pedido.obtenerProductos = () => new Promise((resolve, reject) => {
    query(queries.obtenerProductos, [], (error, pedido) => {
        if (error) {
            reject(error);
        } else {
            resolve(pedido || []);
        }
    });
});

pedido.obtenerPedidoPorId = (id) => new Promise((resolve, reject) => {
    query(queries.obtenerPedidoPorId, [id], (error, pedido) => {
        if (error) {
            reject(error);
        } else {
            resolve(pedido || []);
        }
    });
});

pedido.obtenerSolicitudesPorIdPedido = (idPedido) => new Promise((resolve, reject) => {
    query(queries.obtenerSolicitudesPorIdPedido, [idPedido], (error, pedido) => {
        if (error) {
            reject(error);
        } else {
            resolve(pedido || []);
        }
    });
});

pedido.crearPedido = (data) => new Promise((resolve, reject) => {
    query(queries.crearPedido, [[data]], (error, pedido) => {
        if (error) {
            reject(error);
        } else {
            resolve(pedido || {});
        }
    });
});

pedido.crearSolicitud = (data) => new Promise((resolve, reject) => {
    query(queries.crearSolicitud, [[data]], (error, pedido) => {
        if (error) {
            reject(error);
        } else {
            resolve(pedido || {});
        }
    });
});

pedido.editarPedido = (data) => new Promise((resolve, reject) => {
    query(queries.editarPedido, data, (error, pedido) => {
        if (error) {
            reject(error);
        } else {
            resolve(pedido || {});
        }
    });
});

pedido.eliminarSolicitud = (idSolicitud) => new Promise((resolve, reject) => {
    query(queries.eliminarSolicitud, [idSolicitud], (error, pedido) => {
        if (error) {
            reject(error);
        } else {
            resolve(pedido || []);
        }
    });
});

module.exports = pedido;
