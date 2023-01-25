import React from "react"
import "./Home.css"
import naqvi from "../Components/pic/naqvi.jpg"
import Skill1 from "../Components/pic/Skill1.png"
import skill2 from "../Components/pic/skill2.png"
import skill3 from "../Components/pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY Home Page </h3>
            <h1>
              Hi, I’m <span>Syed Tawakkal Hassan</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" DevOps Engineer.", " React Js Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I'm syed tawakkal hassan and a highly skilled and experienced software professional having expertise in various areas of the field. I have a strong background in software requirements analysis and devOps engineering, as well as front end development. In addition to my professional work, I have also been active in the freelance community , serving as the vice president of the Freelance Force Ucp Society and heading the tech team for the Institute of Electrical and Electronics Engineers (IEEE). My diverse skill set and dedication to my work make me a valuable asset to any team or project</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={Skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={naqvi} alt='' width="510" height ="580"/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home