import React from 'react'
import Navbar from './navbar'
import '../App.css'
import backgroundVideo from './video/video.mp4';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div>
      <Navbar/>
  </div>
      <div className='video2'>
      <video  loop autoPlay muted id='video2'>
      <source src={backgroundVideo} type='video/mp4'/>
      </video>

      <h1 className='big12'>Online Voting System</h1>
      <h1 className='big22'>Stay home.. Stay voted...</h1>
      <hr/>
      <p className='font2'>Bad officials are elected by good citizens.. who doesn't vote</p>
      <p className='font2'> We have the power to make a difference..  But we have to vote</p>
      <hr/>
      <br/>
      <p className='text2'>Demo video for using this website</p>
       <Link to='/Demo'>
      <button className='button2' align-item='center' >
        Get Started</button>
      </Link>

      <div class='square12'>
      <div class='square22'>
      <div class='square32'>
      <div class='square42'>
      </div>
      </div>
      </div>
      </div>
      <span className='texting12'>Signup website 
      <span className='texting22'>See Manifesto page
      <span className='texting32'>Vote for the right
      <span className='texting42'>View result analysis
      </span></span></span></span>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <div className='big22'>Why Online Voting?</div>
      <br/>
      <p className='fontt2'>Looking for simple method of voting,location-independent and also verify the result and analysis.</p>
      <p className='fontt2'>Vote at anytime from anywhere , Boost participation , Less physical infrastructure , </p>
      <p className='fontt2'>More rich ballots  AND  Fast and easy votes tally.</p>
      <br/>
      <div className='big22'>What's new?</div>
      <br/>
      <p className='fontt2'>You can view manifesto page,result analysis and you can save your time by voting online.</p>
      <p className='fontt2'> It includes nomination services , ballot feature , full-service management , security and accuracy.</p>
      <br/><br/><br/><br/><br/><br/>

      <div className='imagea2'>
      <div className='imageb2'>
      <div className='imagec2'>
      <div className='imaged2'>

      </div></div></div></div>
      <div className='big22'>Contact Us</div> 
      <br/>
      <p className='font2'>9876543210</p>
      <br/><br/><br/>
      
      
      </div>
    </>  
  );
}

export default Home