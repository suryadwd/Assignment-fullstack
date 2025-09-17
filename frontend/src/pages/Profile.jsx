import React from 'react'
import { useSelector } from "react-redux";
const Profile = () => {

    const username = useSelector((state) => state.auth.user) || 'Not Logged In';

  return (
    <div className='flex items-center justify-between h-screen ml-5'>Profile of current login User: {username}</div>
  )
}

export default Profile