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

app.get("/registry/:id", (req, res) => {
  const results = [];
  const id = req.params.id;

  const query = client.query(`select r.id, i.name, r.ownership, r.number_of_shares, r.share_number, r.color from registry r left join investor i ON r.investor_id=i.id where company_id=${id}`);

  query.on('row', (row) => {
    results.push(row);
  });
  query.on('end', () => {

    return res.json(results);
  });
});

app.get("/portfolio/:id", (req, res) => {
  const results = [];
  const id = req.params.id;

  const query = client.query(`select p.id, c.name, p.number_of_shares, p.diluted, p.original_investments, p.value_of_investments, p.ROI, p.color from portfolio p left join company c ON p.company_id=c.id where investor_id=${id}`);

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