import React from "react"
import { Link, useMatch, useResolvedPath, LinkProps } from "react-router-dom"

interface CustomLinkProps extends LinkProps {
  children?: React.ReactNode
  to: string
}

export function CustomLink({ to, children, ...props }: CustomLinkProps) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}

export default function Nav() {
  return (
    <nav className="">
      <Link to="/">Site Name</Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/register">Register</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
      </ul>
    </nav>
  )
}