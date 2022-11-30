import { Client } from 'pg';
export const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "1234"
})

client
  .connect()
  .then(() => console.log('Connected'))
  .catch((err: { message: string; }) => console.log('Failed to connect ' + err.message ))
  //.finally(()=> client.end())


