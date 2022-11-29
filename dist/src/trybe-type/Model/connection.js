
const{ Client } = require("pg")


const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "1234"
})

client
  .connect()
  .then(() => console.log('Connected'))
  .catch((err) => console.log('Failed to connect ' + err.message ))

module.exports = client