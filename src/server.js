const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors');
const db = require("./models");
const Books = db.books;

db.sequelize.sync();

app.use(cors());
app.options('*', cors());

app.use(express.json());

app.get('/books', async (req, res) => {
  try {
    const result = await Books.findAll();
    return res.json(result);
  }
  catch (err) {
    return res.status(500)
    .send({
      message:
        err.message || "Some error occurred while retrieving books."
    });
  }
});

app.post('/books', async (req, res) => {
  try {
    const result = await Books.create(req.body);
    return res.json(result);
  }
  catch (err) {
    return res.status(500)
    .send({
      message:
        err.message || "Some error occurred while creating book."
    });
  }
});

process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);

function shutDown() {
  console.log('Received kill signal, shutting down gracefully');
  server.close(() => {
      console.log('Closed out remaining connections');
      process.exit(0);
  });

  setTimeout(() => {
      console.error('Could not close connections in time, forcefully shutting down');
      process.exit(1);
  }, 10000);
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})