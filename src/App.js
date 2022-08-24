import './App.css';
import picture from './assets/IMG_1048.JPG'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faCircleUser, faEnvelopeOpen, faMessage, faBriefcase } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="app">
        <div className='container'>
            <img alt='profile-pic' src={picture} className='profilePic' />
            <div className='info'>
                <h3>hi there !</h3>
                <h1>i'm a <span>web designer</span></h1>
                <h6>
                    I'm a Tusinia based web designer & front-end developer
                    focused on crafting 
                    <br/>
                    clean & user-friendly experiences.I'm passionate about building exellent
                    <br/>
                    software that improves the lives of those around me.
                </h6>
                <input type={'button'} value={'MORE ABOUT ME'} className={'moreBtn'} />
            </div>
            <div className='sidebar'>
                <div className='homeBtn'>
                    <input type={'button'} value={'HOME'}  className={'home'}/>
                    <FontAwesomeIcon icon={faHouseChimney} fontSize={'25px'}/>
                </div>
                <div className='icons'>
                    <div className='user'>
                        <FontAwesomeIcon icon={faCircleUser} fontSize={'25px'}/>
                    </div>
                    <div className='briefcase'>
                        <FontAwesomeIcon icon={faBriefcase} fontSize={'25px'}/>
                    </div>
                    <div className='envelope'>
                        <FontAwesomeIcon icon={faEnvelopeOpen} fontSize={'25px'}/>
                    </div>
                    <div className='message'>
                        <FontAwesomeIcon icon={faMessage} fontSize={'25px'}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
