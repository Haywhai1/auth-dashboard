import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import API from "../services/api"

function Register() {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
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

    await API.post("/auth/register", form)

    navigate("/")
  }

  return (

    <div className="flex items-center justify-center h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow w-96"
      >

        <h2 className="text-2xl mb-4">Register</h2>

        <input
          name="name"
          placeholder="Name"
          className="border p-2 w-full mb-3"
          onChange={handleChange}
        />

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
          Register
        </button>

        <p className="mt-4 text-sm">
          Already have an account?
          <Link to="/" className="text-blue-500 ml-1">
            Login
          </Link>
        </p>

      </form>

    </div>
  )
}

export default Register