import profilePic from '/profile.jpg'


export default function Profile() {
  return (
    <div>
      <img src={profilePic} className='w-12 h-12 rounded-full border border-blue-400 p-1 shadow-2xl cursor-pointer' alt="image" />
    </div>
  )
}


