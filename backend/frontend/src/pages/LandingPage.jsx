import React from 'react'
import {Button} from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
const LandingPage = () => {
  const navigate = useNavigate()
  return (
     <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-300 to-blue-600 text-black text-4xl font-bold gap-6">
      <p>It's live now! Move to /login route to check the entire project</p>
      <Button  onClick={() => navigate('/login')}>Go to Login</Button>
    </div>
  )
}

export default LandingPage