import React from 'react'
import '../styles/blog.css';
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';
import blog4 from '../assets/blog4.jpg';
import blog5 from '../assets/blog5.jpg';
import blog6 from '../assets/blog6.jpg';
import { Link } from 'react-router-dom';
const About = () => {
  const posts = [
    {src: blog1, text:"Sed magna dui, dignissim id felis vitae, consectetur"},
    {src: blog2, text:"Fusce suscipit risus tempor, blandit urna at, laoreet ex"},
    {src: blog3, text:"Pellentesque varius, diam vitae mattis luctus, mi mi cursus"},
    {src: blog4, text:"Nam pharetra fringilla justo, et commodo lacus molestie ut"},
    {src: blog5, text:"Fusce vel tellus vulputate, dignissim turpis sit amet, aliquet mi"},
    {src: blog6, text:"Duis lacinia convallis odio, quis efficitur dolor pulvinar nec"},
  ];
  return (
    <div > 
     <h1 className='About'>Blog</h1>
    <div className='blog'>
    {posts.map((post,index)=>(
      <div className="blogs" key={index}>
        <img src={post.src} alt={post.text} className='blog-image' />
        <div className="blog-text"> <h6>July 18, 2021</h6> <br />{post.text}
        <h6 className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus necessitatibus  adipisicing elit culpa [..]</h6>
        <Link to={'/'}> <li className='read'>Read More</li></Link>
        </div>
      </div>
    ))}
    </div>
    </div>
  )
}

export default About;
