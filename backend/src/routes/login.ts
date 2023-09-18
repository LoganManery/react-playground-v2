import express, { Request, Response } from 'express'
import { Database } from '../database'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { authenticateJWT } from '../middleware/authenticateJWT'

const router = express.Router()

const db = Database.getInstance()

router.post('/login', async (req, res) => {
  console.log(`${new Date().toISOString()} - Received login request for username: ${req.body.username}`);
  try {
    const { username, password } = req.body
    console.log('username: ', username)
    // get user from database
    const [user] = await db.query('SELECT password, username, user_id FROM users WHERE username = ?', [username])

    // compare password
    const isPassword = await bcrypt.compare(password, user.password)

    if (!isPassword || !user) {
      return res.status(400).json({ message: 'incorrect information provided' })
    }
    
    const token = jwt.sign({id: user.user_id, username: user.username}, process.env.JWT_SECRET!, {
      expiresIn: '1h'
    })

    console.log('token: ', token)

    // Authenticated
    res.cookie('access_token', token, { path: '/login', httpOnly: true, secure: true, maxAge: 3600, sameSite: 'none' })
    res.status(200).json({ message: 'user logged in successfully', token: token })
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.get('/logout', authenticateJWT, (req, res) => {
  res.clearCookie('access_token', { path: '/login' })
  res.status(200).json({ message: 'user logged out successfully' })
})

export default router