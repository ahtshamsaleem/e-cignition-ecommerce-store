import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate} from 'react-router-dom'


const ProtectedRoute = ({children}) => {
const isUser = useSelector(state => state.auth.user);




  return (
 <>
    {isUser ? children : <Navigate to='/sign-in'/>}
 </>
   
    
  )
}

export default ProtectedRoute