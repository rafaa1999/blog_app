import React from 'react'
import Logo from '../img/mario_avatar.jpg'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'
export default function Single() {
  return (
    <div className='single'>
      <div className="content">
        <img src={Logo} alt="" />
        <div className="user">
          <img src={Logo} alt="" />
          <div className="info">
            <span>john</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Logo} alt="" />
            </Link>
              <img src={Logo} alt="" />
          </div>
        </div>
          <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, sed.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nulla accusantium,
             impedit velit a deleniti ullam, recusandae exercitationem modi beatae veritatis
            fugiat aspernatur nesciunt dolorum? </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nulla accusantium,
             impedit velit a deleniti ullam, recusandae exercitationem modi beatae veritatis
            fugiat aspernatur nesciunt dolorum?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nulla accusantium,
             impedit velit a deleniti ullam, recusandae exercitationem modi beatae veritatis
            fugiat aspernatur nesciunt dolorum?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nulla accusantium,
             impedit velit a deleniti ullam, recusandae exercitationem modi beatae veritatis
            fugiat aspernatur nesciunt dolorum?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nulla accusantium,
             impedit velit a deleniti ullam, recusandae exercitationem modi beatae veritatis
            fugiat aspernatur nesciunt dolorum?</p>
      </div>
      <Menu/>
    </div>
  )
}
