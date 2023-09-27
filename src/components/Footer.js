import React from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {MdOutlinePhotoLibrary} from 'react-icons/md';
import {BsBoxSeam} from 'react-icons/bs';
import {FiPhoneCall} from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import  styled  from 'styled-components';
import {BiMessageDetail} from 'react-icons/bi';

const Footer = () => {
  return (
    <Wrapper>
      <div className='body1'>
  <footer className="footer1">
    <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>
  
    <ul className="menu">
      <li className="menu__item">
        <NavLink class="menu__link" to='/'>
          <h2 className='mx-4'>
            <AiOutlineHome className='mx-4 mt-4'/>
            Home</h2>
          </NavLink>
          </li>
      <li className="menu__item">
        <NavLink class="menu__link" to="/about">
          <h2 className='mx-4'>
            <MdOutlinePhotoLibrary className='mx-4 mt-4'/>
            About</h2>
            </NavLink>
            </li> 
            <li className="menu__item">
              <NavLink class="menu__link" to="/product">
                <h2 className='mx-4'>
                  <BsBoxSeam className='mx-4 mt-4'/>
                  Product</h2>
                  </NavLink>
                  </li>
                  <li className="menu__item">
                    <NavLink  class="menu__link" to="/contact">
                      in<h2 className='mx-4'>
                        <BiMessageDetail className='mx-4 mt-4'/>
                        Message Us</h2>
                        </NavLink>
                        </li>
                        <li className="menu__item">
                          <a href='tel:9896521488'  class="menu__link"><h2 className='mx-4'><FiPhoneCall className='mx-4 mt-4'/>Call Us</h2></a></li>

 

    </ul>
    <p>&copy;{new Date().getFullYear()} Amazon Store | All Rights Reserved</p>
  </footer>
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.body1 {
  display: flex;
  background: #333;
  justify-content: flex-end;
  align-items: flex-end;
  min-height: 33vh;
}

.footer1 {
  position: relative;
  width: 100%;
  background: #3586ff;
  min-height: px;
  padding: 15px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.social-icon,
.menu {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -40px 0;
  flex-wrap: wrap;
}

.social-icon__item,
.menu__item {
  list-style: none;
 
}

.social-icon__link {
  font-size: 2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
}
.social-icon__link:hover {
  transform: translateY(-10px);
}

.menu__link {
  font-size: 1.2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
  text-decoration: none;
  opacity: 0.75;
  font-weight: 300;
}

.menu__link:hover {
  opacity: 0.5;
}

.footer1 p {
  color: #fff;
  margin: 15px 0 10px 0;
  margin-bottom:-5px;
  font-size: 2.0rem;
  font-weight: oblique;
}

.wave {
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 100px;
  background: url("https://i.ibb.co/wQZVxxk/wave.png");
  background-size: 1000px 100px;
}

.wave#wave1 {
  z-index: 1000;
  opacity: 1;
  bottom: 0;
  animation: animateWaves 4s linear infinite;
}

.wave#wave2 {
  z-index: 999;
  opacity: 0.5;
  bottom: 10px;
  animation: animate 4s linear infinite !important;
}

.wave#wave3 {
  z-index: 1000;
  opacity: 0.2;
  bottom: 15px;
  animation: animateWaves 3s linear infinite;
}

.wave#wave4 {
  z-index: 999;
  opacity: 0.7;
  bottom: 20px;
  animation: animate 3s linear infinite;
}

@keyframes animateWaves {
  0% {
    background-position-x: 1000px;
  }
  100% {
    background-positon-x: 0px;
  }
}

@keyframes animate {
  0% {
    background-position-x: -1000px;
  }
  100% {
    background-positon-x: 0px;
  }
}`

export default Footer;




