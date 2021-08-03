const { query } = require("./connection");

module.exports = {
  get: function (req, res) {

    query("INSERT INTO people(name) values('Paulo Silva')");

    query("SELECT * FROM people", function (error, lista, field) {
      console.log(lista); // resultado obtido
      if (error) {
        res.json(error);
      } else {
        res.json({ "retorno": "<h1>Full Cycle Rocks!</h1>", lista})
      }
    });
  },
};