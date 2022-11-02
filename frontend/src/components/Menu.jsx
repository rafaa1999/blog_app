import React from 'react'
import Logo from '../img/mario_avatar.jpg'
export default function Menu() {
    const posts=[
        {
          id:1,
          title:"lorem dededededede",
          desc:"lorem deeeeee",
          img:"https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        },
        {
          id:2,
          title:"lorem dededededede",
          desc:"lorem deeeeee",
          img:"https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        },
        {
          id:3,
          title:"lorem dededededede",
          desc:"lorem deeeeee",
          img:"https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        },
      ]
  return (
    <div className='menu'>
        <h1>Other post you may like</h1>
        {posts.map((post)=>(
            <div className="post" key={post.id}>
                <img src={Logo} alt="" />
                <h2>{post.title}</h2>
                <button>read more</button>
            </div>
        ))}
    </div>
  )
}
