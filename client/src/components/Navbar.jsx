import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white text-center">
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
    </nav>
  )
}
