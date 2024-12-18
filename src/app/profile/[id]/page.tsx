import React from 'react'

function UserProfile({params}) {
  return (
    <div>
          <h3 className='text-3xl'>Profile Page <span className='text-4xl bg-orange-600 p-4'>{ params.id}</span></h3>
    </div>
  )
}

export default UserProfile
