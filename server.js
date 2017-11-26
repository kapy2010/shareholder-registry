const express = require("express");

const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/shareholder_db';
const client = new pg.Client(connectionString);
client.connect();

const app = express();

app.set("port", process.env.PORT || 3001);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get("/company/:id", (req, res) => {
    const results = [];
    const id = req.params.id;
    const query = client.query(`select * from company where id = ${id}`);

    query.on('row', (row) => {
        results.push(row);
    });
    query.on('end', () => {
        return res.json(results[0]);
    });
});

app.get("/investor/:id", (req, res) => {
    const results = [];
    const id = req.params.id;
    const query = client.query(`select * from investor where id = ${id}`);

    query.on('row', (row) => {
        results.push(row);
    });
    query.on('end', () => {
        return res.json(results[0]);
    });
});

app.get("/registry", (req, res) => {
    const results = [];
    const query = client.query('select * from registry');

    query.on('row', (row) => {
        results.push(row);
    });
    query.on('end', () => {

        return res.json(results);
    });
});

app.get("/portfolio", (req, res) => {
    const results = [];
    const query = client.query('select * from portfolio');

    query.on('row', (row) => {
        results.push(row);
    });
    query.on('end', () => {

        return res.json(results);
    });
});

app.listen(app.get("port"), () => {
    console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});