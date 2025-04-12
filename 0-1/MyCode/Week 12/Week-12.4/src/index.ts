// write a function to create a users table in your database.
import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
})

async function insertUserData(username: string, password: string, email: string) {
    await client.connect()

    // SQL Injection -> Wrong way
    // const result = await client.query(`
    //     INSERT INTO users (username, password, email)
    //     VALUES ('${username}', '${password}', '${email}')
    //     `)
    // console.log(result)

    //Right syntax to prevent SQL Injection and write any query in postgres.
    const result = await client.query(`
        INSERT INTO users (username, password, email)
        VALUES ($1, $2, $3)
        `, [username, password, email])
    console.log(result)
}

insertUserData(
    'anuj',
    '123',
    'anuj9111@gmail.com'
);