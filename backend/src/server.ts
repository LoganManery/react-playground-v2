import express from 'express';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { Database, DbConfig } from './database';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Singleton pattern
const db = Database.getInstance();

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

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello, TypeScript with pnpm!");
});

app.post('/user', async (req, res) => {
    try {
        const { username, password } = req.body;

        //Input Validiation
        if (!username || !password) {
            return res.status(400).json({ msg: "Please enter all fields" });
        }

        // Hash the password
        const saltRounds = 10; // Adjustable, higher value more secure but more hashing time
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Add user with hashed password
        const result = await db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);

        // Return success response
        res.status(201).json({ message: 'user created successfully', userId: result.insertId });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // get user from database
        const [user] = await db.query('SELECT password FROM user WHERE username = ?', [username]);

        if(!user) {
            return res.status(400).json({ message: 'username or password is incorrect' });
        }

        // compare password
        const isPassword = await bcrypt.compare(password, user.password);

        if(!isPassword) {
            return res.status(400).json({ message: 'username or password is incorrect' });
        }

        // Authenticated
        res.status(200).json({ message: 'user logged in successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});