import { useState, useEffect } from "react"
import API from "../services/api"
import { AuthContext } from "./AuthContext"

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const checkAuth = async () => {
    try {

      const res = await API.get("/auth/me")

      setUser(res.data)
      console.log(res.data);
      

    } catch {

      setUser(null)

    } finally {

      setLoading(false)

    }
  }

  useEffect(() => {
    checkAuth()
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider