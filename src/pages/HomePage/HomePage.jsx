import "./HomePage.css" ;

import {  useLocation } from 'react-router-dom';

export default function HomePage() {

  const ActivePath = () => {
    const location = useLocation();
    console.log( location.pathname);
  };
function onn() {
  ActivePath()
}
  return (
    <main>
      <div className="mainHome">
        <h1 onClick={onn()} className="honeforMainBage">Ahmed Essam</h1>
        <p className='paraJops'>Frontend Web Developer</p>
        <div className="socialMediaIco">

        <span className="span">
        <a className="aaaSocial fa" href="https://www.facebook.com/ahmed.egyptian.9889/" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-facebook-f"></i>
      </a>
</span>
<span className="span">
<a href="https://api.whatsapp.com/send?phone=+201094461846&text=Hi" target="_blank" className='aaaSocial wh'><i class="fa-brands fa-whatsapp"></i></a>
</span>
<span className="span">
<a href="https://www.linkedin.com/in/ahmed-essam-618055230/" target="_blank" className="aaaSocial li"><i class="fa-brands fa-linkedin"></i></a>
</span>
<span className="span">
<a href="https://github.com/ahmed514essam" target="_blank" className="aaaSocial gi"><i class="fa-brands fa-github"></i></a>
</span>
        </div>
   

        <section className="home-btns">
        <a rel="noreferrer" target="_self" href="https://drive.google.com/uc?export=download&id=1Tg842i7lG-VIv3k_X9goxvDnOFfL0BFd" download="My_Resume.pdf">Download My Resume</a>
                        </section>


      </div>
    </main>
  );
}