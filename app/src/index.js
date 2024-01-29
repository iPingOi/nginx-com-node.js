const mysql = require('mysql')
const { faker } = require('@faker-js/faker')
const express = require('express')
const app = express()
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}
const connection = mysql.createConnection(config)

async function insertIntoPeople(name) {
  const sql = `INSERT INTO people(name) values(?);`
  await connection.query(sql, name)
}

app.get('/', async (req, res) => {
  const getName =  faker.internet.userName()
  await insertIntoPeople(getName)

  connection.query('SELECT * FROM people', (error, results) => {
    if (error) throw error

    res.send(`
        <h1>Full Cycle Rocks!</h1>
        <ul>${results.map((row) => `<li>${row.name}</li>`).join('\n')}</ul>
    `)
  })
})

const port = 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}. 🚀`)
})