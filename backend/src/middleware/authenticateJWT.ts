import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { VerifyErrors } from 'jsonwebtoken'

interface RequestWithUser extends Request {
  user?: string | object
}

export function authenticateJWT(req: RequestWithUser, res: Response, next: NextFunction) {
  const token = req.cookies.jwt

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET!, (err: VerifyErrors | null, user: any) => {
      if (err) {
        return res.sendStatus(403) // forbidden
      }

      req.user = user
      next()
    })
  } else {
    res.sendStatus(401) // unauthorized
  }
}