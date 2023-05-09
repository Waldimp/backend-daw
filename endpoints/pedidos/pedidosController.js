"use strict";
const pedido = require("../../models/pedidos/pedidos");

const obtenerPedidos = async (req, res) => {
    let result = [];
    try {
        result = await pedido.obtenerPedidos();
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

const obtenerProductos = async (req, res) => {
    let result = [];
    try {
        result = await pedido.obtenerProductos();
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

const obtenerPedidoPorId = async (req, res) => {
    let result = [];
    const id = req.params.id;
    try {
        result = await pedido.obtenerPedidoPorId(id);
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

const obtenerSolicitudesPorIdPedido = async (req, res) => {
    let result = [];
    const idPedido = req.params.idPedido;
    try {
        result = await pedido.obtenerSolicitudesPorIdPedido(idPedido);
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

const crearPedido = async (req, res) => {
    const data = Object.values(req.body);
    let result = {};
    try {
        result = await pedido.crearPedido(data);
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

const crearSolicitud = async (req, res) => {
    const data = Object.values(req.body);
    let result = {};
    try {
        result = await pedido.crearSolicitud(data);
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

const editarPedido = async (req, res) => {
    const data = Object.values(req.body);
    let result = {};
    try {
        result = await pedido.editarPedido(data);
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

const eliminarSolicitud = async (req, res) => {
    let result = [];
    const idSolicitud = req.params.idSolicitud;
    try {
        result = await pedido.eliminarSolicitud(idSolicitud);
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

module.exports = {
    obtenerPedidos,
    obtenerProductos,
    obtenerPedidoPorId,
    obtenerSolicitudesPorIdPedido,
    crearPedido,
    crearSolicitud,
    editarPedido,
    eliminarSolicitud,
};