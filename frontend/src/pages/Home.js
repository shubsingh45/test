import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Post from './Post'

const Home = () => {
  return (
    <div className="h-[100vh]">
      <Navbar>
      </Navbar>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>


      <Footer />
    </div>
  )
}

export default Home