const client = require('./connection');

client.query('select * from books')
  .then(response => console.log(response.rows))
  .finally(()=> client.end())


  const text = 'INSERT INTO books(title, price, author, isbn) VALUES ($1, $2, $3, $4) RETURNING *'
  const values = ["Comece pelo mais difícil", 19.58, "Brian Tracy", "978-8543104881"]

client.query(text, values)
.then(response => console.log(response, "created"))
.finally(()=> client.end())

//DROP TABLE table_name;