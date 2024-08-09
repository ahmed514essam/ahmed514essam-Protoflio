import style from "./About.module.css"
import photoMe from './photoMe.jpeg';

export default function About() {
  return (
    <section className={style.sectionMainAll}>

<div className={style.MyCardy}>

<div className={style.MyPhoto}><img alt="Ahmed Essam Photo" src={photoMe} />
</div>
<div className={style.addressMy}>


<p> <span className={style.spanAdd}>Name : </span> Ahmed Essam ElSayed </p>
<p><span className={style.spanAdd}>Birth Date:</span> Nov 5th 2002</p>
<p><span className={style.spanAdd}>Phone Number:</span> +20 109 446 1846</p>

<p><span className={style.spanAdd}>Gmail: </span>ahmedessaam124@gmail.com</p>

<p><span className={style.spanAdd}>Address: </span>Meet Ghamr, Ad Daqahliyah, Egypt </p>
</div>
<div className="socialMediaIco">

<span className="span">
<a className="aaaSocial fa" href="https://www.facebook.com/ahmed.egyptian.9889/" target="_blank" rel="noopener noreferrer">
<i className="fa-brands fa-facebook-f"></i>
</a>
</span>
<span className="span">
<a href="https://api.whatsapp.com/send?phone=+201094461846&text=Hi" target="_blank" className='aaaSocial wh'><i className="fa-brands fa-whatsapp"></i></a>
</span>
<span className="span">
<a href="https://www.linkedin.com/in/ahmed-essam-618055230/" target="_blank" className="aaaSocial li"><i className="fa-brands fa-linkedin-in"></i></a>
</span>
<span className="span">
<a href="https://github.com/ahmed514essam" target="_blank" className="aaaSocial gi"><i className="fa-brands fa-github"></i></a>
</span>
</div>
</div>





<div className={style.MyDetails}>

<div className={style.WhoMe}>
    <h2>Who am I <span className={style.headQuestionMark}>?</span></h2>

<p>

Hello There I'm Ahmed Essam, a web front-end developer with several months of experience in React and front-end web development who enjoys building everything with JavaScript.

Here's a rephrased version:
<br/>
Throughout this time, I've acquired knowledge in various technologies and developed projects using JavaScript and React. I've maintained a continuous learning mindset, staying updated with modern technologies.
<br/>
So I'm always seeking to have an opportunity that matches my skills, to make the best use of all what I have learned.
</p>

</div>

<div className={style.Education}>
    <h2>Education :-</h2>
    <p>

 studies a Bachelor's degree in Computer Science at the Future Academy for Specialized Technological Sciences. 2021- 2025
    </p>
</div>

<div className={style.Cerificate}>
<h2>Certificates :-</h2>
<p> Eraasoft certified Frontend Web Developer</p>

</div>



</div>

    </section>
  )
}