import express, {Request, Response, NextFunction} from 'express'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import cors from 'cors'
import jwt, { Secret } from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import { authenticateJWT } from './middleware/authenticateJWT'
import { Database } from '../src/database'
import fs from 'fs'
import https, { ServerOptions } from 'https'

const app = express()

dotenv.config()

const privateKey = fs.readFileSync("C:/Users/Logan/key.pem", 'utf8');
const certificate = fs.readFileSync("C:/Users/Logan/cert.pem", 'utf8');
const credentials = { key: privateKey, cert: certificate };

const httpsServer = https.createServer(credentials, app);

const PORT = process.env.PORT || 3000

// Singleton pattern
const db = Database.getInstance()

app.use(cors({
  origin: 'http://localhost:5173',  // Adjust this to your frontend's address
  credentials: true
}));

app.use(express.json())

app.use(cookieParser())

// Redirect to https, does this even work! this caused me so much pain and is being kept here as a reminder of the pain it cauesed me.
// app.use((req: Request, res: Response, next: NextFunction) => {
//   if(!req.secure) {
//     return res.redirect('https://' + req.headers.host + req.url);
//   }
// })

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path} - Body: ${JSON.stringify(req.body)}`);
  next();
});

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log('Origin header:', req.headers.origin);
  console.log('Access-Control headers:', res.get('Access-Control-Allow-Origin'));
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.get('/users', async (req: Request, res: Response) => {
  try {
      const [users] = await db.query('SELECT `username` FROM `users`')
      res.status(200).json(users);
  } catch (err) {
      res.status(500).json({ message: 'Internal server error' })
  }
})

app.post('/user', async (req: Request, res: Response) => {
  try {
    const { username, password, email } = req.body

    // Input Validiation
    if ((username === '') || (password === '')) {
      console.log('Feilds missing', req.body)
      return res.status(400).json({ msg: 'Please enter all fields' })
    }

    if (password.length < 8) {
      return res.status(400).json({ msg: 'Password must be at least 8 characters' })
    }
    
    const [existingUser] = await db.query('SELECT `username` FROM `users` WHERE `username` = ?', [username])
    
    if (existingUser && existingUser.length > 0) {
      return res.status(400).json({ msg: 'User already exists' })
    }

    // Hash the password
    const saltRounds = 10 // Adjustable, higher value more secure but more hashing time
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    // Add user with hashed password
    const result = await db.query('INSERT INTO users (username, password, email) VALUES (?, ?, ?)', [username, hashedPassword, email])

    // Return success response
    res.status(201).json({ message: 'user created successfully', userId: result.insertId })
  } catch (err) {
    res.status(500).json({ message: 'Internal server error: ' + err })
  }
})

app.post('/login', async (req, res) => {
  console.log(`${new Date().toISOString()} - Received login request for username: ${req.body.username}`);
  try {
    const { username, password } = req.body
    console.log('username: ', username)
    // get user from database
    const [user] = await db.query('SELECT password FROM users WHERE username = ?', [username])
    
    if (user === '') {
      return res.status(400).json({ message: 'username or password is incorrect' })
    }

    // compare password
    const isPassword = await bcrypt.compare(password, user.password)

    if (!isPassword) {
      return res.status(400).json({ message: 'username or password is incorrect' })
    }
    
    const token = jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET!, {
      expiresIn: '1h'
    })

    console.log('token: ', token)

    // Authenticated
    res.cookie('access_token', 'test', { path: '/login', httpOnly: true, secure: true, maxAge: 3600, sameSite: 'none' })
    res.status(200).json({ message: 'user logged in successfully', token: token })
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' })
  }
})

app.get('/logout', authenticateJWT, (req, res) => {
  res.clearCookie('access_token', { path: '/login' })
  res.status(200).json({ message: 'user logged out successfully' })
})

httpsServer.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`)
})