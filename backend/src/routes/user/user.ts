import express, {Request, Response} from 'express'
import { Database } from '../../database'
import bcrypt from 'bcrypt'

const db = Database.getInstance()

const router = express.Router()

router.get('/user', async (req: Request, res: Response) =>  {
  try {
      const [users] = await db.query('SELECT `username` FROM `users`')
      res.status(200).json(users);
  } catch (err) {
      res.status(500).json({ message: 'Internal server error' })
  }
})

router.post('/create', async (req: Request, res: Response) => {
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

export default router