import React from 'react'
import { Link } from 'react-router-dom'

export default  function Home() {

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
    <div className='home' >
      <div className="posts">
        {posts.map(post=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
                <p>{post.desc}</p>
                <button>read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
