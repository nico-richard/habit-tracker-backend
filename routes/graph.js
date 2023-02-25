const express = require("express");
const graphRouter = express.Router();

let graphs = [
    { id: 1, name: "graph1" },
    { id: 2, name: "graph2" },
    { id: 3, name: "graph3" },
    { id: 4, name: "graph4" },
    { id: 5, name: "graph5" },
];

// Get all graphs
graphRouter.get("/", (req, res) => {
    res.json({ message: "get all graphs", data: graphs });
});

// Get a graph
graphRouter.get("/:id", (req, res) => {
    const graph = graphs.find((el) => el.id === req.params.id);
    res.json({ message: `get graph ${req.params.id}`, data: [graph] });
});

// Add new graph
graphRouter.post("/", (req, res) => {
    if (graphs.some((el) => el.id === req.body.id)) {
        res.json({
            message: `error id ${req.body.id} already exists`,
            data: graphs,
        });
    } else {
        const graph = { id: req.body.id, name: req.body.name };
        graphs.push(graph);
        res.json({
            message: `new graph created : ${JSON.stringify(req.body)}`,
            data: graphs,
        });
    }
});

// Delete a graph
graphRouter.delete("/:id", (req, res) => {
    const graphToDeleteIndex = graphs.findIndex(
        (el) => el.id === +req.params.id
    );
    if (graphToDeleteIndex > -1) {
        graphs.splice(graphToDeleteIndex, 1);
        res.json({ message: `graph ${req.params.id} deleted`, data: graphs });
    } else {
        res.json({
            message: `error id ${req.params.id} does not exist`,
            data: graphs,
        });
    }
});

module.exports = graphRouter;
