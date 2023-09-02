import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import { Database, DbConfig } from './database.ts';

dotenv.config();

interface Connection {
    host: string | undefined;
    user: string | undefined;
    password: string | undefined;
    database: string | undefined;
}

const app = express();
const PORT = process.env.PORT || 3000;

const dbConfig: DbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
};

const db = new Database(dbConfig);

// const selectAll = async () => {
//     try {
//         const users = await db.query('SELECT * FROM users');
//         console.log(users);
//     } catch (error) {
//         console.log(error);
//     } finally {
//         await db.close();
//     }
// }

// Immediately Invoked Function Expression (IIFE)
(async () => {
    try {
        const users = await db.query('SELECT * FROM users');
        console.log(users[0].username);
    } catch (error) {
        console.log(error);
    } finally {
        await db.close();
    }
})();

app.get('/', (req, res) => {
    res.send("Hello, TypeScript with pnpm!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})