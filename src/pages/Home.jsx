import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Main from '../components/Main'
// import Page1 from './Landing-page'
import Page2 from '../pages/LandinPage1'
import Page3 from '../pages/V0page'

const Home = () => {
  return (
    <div>
      <Page2></Page2>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>

      {/* <Page1></Page1> */}
      <Page3></Page3>
    
    </div>
  )
}

export default Home