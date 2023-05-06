"use strict";
// const libros = require("../../models/librosdeseados/librosdeseados");

const obtenerProjects = async (req, res) => {
    let result = [];
    // const idUsuario = req.params.idUsuario;
    try {
        result = "Hola test god";
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

module.exports = {
    obtenerProjects,

};