import React from 'react'
import { Link} from 'react-router-dom'

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto">
        {/* Left */}
        <div>
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Alexa Blog Center</span>
          </Link>
          <p className="text-sm mt-5">This is a demo project. You can sign in with your email and password or with Google.</p>
        </div>
        {/* Right */}
        <div>
          {/* TODO: Working on the sign up form */}
        </div>
      </div>
    </div>
  )
}
