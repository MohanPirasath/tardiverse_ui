import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
    const navigate = useNavigate()

    useEffect(()=>{
        localStorage.clear("TraName");
            navigate("/")
    },[])
  return (
    <div>
      Loging Out...
    </div>
  )
}
