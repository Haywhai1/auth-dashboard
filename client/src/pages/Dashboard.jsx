import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import API from "../services/api"
import { AuthContext } from "../context/AuthContext"

function Dashboard() {

  const navigate = useNavigate()
  const { user } = useContext(AuthContext)

  const logout = async () => {

    await API.post("/auth/logout")

    navigate("/")

  }

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-4">
        Dashboard
      </h1>

      <p>Welcome {user?.name}</p>
      <p>ID: {user?._id}</p>
      <p className="mb-6">Email: {user?.email}</p>


      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>

    </div>

  )
}

export default Dashboard