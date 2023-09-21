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
    <nav className="
    flex 
    gap-4
    justify-start
    bg-black
    scrollbar-hide
    w-screen
    font-mono
    text-xl
    text-white
    ">
      <ul>
        <CustomLink to="/">
          <svg className="
          flex
          bg-transparent
          ml-2
          w-6 
          h-10" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5}
          stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
          </svg>
        </CustomLink>
      </ul>
      <h1 className="m-auto w-1/2">Logan Manery</h1>
      <ul className="
        flex
        m-auto 
        justify-end
        items-center
        columns-2
        gap-x-4
        w-screen
        h-10
        ">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/posts">Posts</CustomLink>
        <CustomLink to="/register">Register</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <br />
      </ul>
    </nav>
  )
}

