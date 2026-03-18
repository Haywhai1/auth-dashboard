import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import API from "../services/api"

function Login() {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    await API.post("/auth/login", form)

    navigate("/dashboard")
  }

  return (

    <div className="flex items-center justify-center h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow w-96"
      >

        <h2 className="text-2xl mb-4">Login</h2>

        <input
          name="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
          onChange={handleChange}
        />

        <button className="bg-blue-500 text-white w-full p-2 rounded">
          Login
        </button>

        <p className="mt-4 text-sm">
          No account?
          <Link to="/register" className="text-blue-500 ml-1">
            Register
          </Link>
        </p>

      </form>

    </div>
  )
}

export default Login