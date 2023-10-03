import './App.css';
import './mobile.css';
import OffcanvasExample from './comman/Hearder';
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";
import html from './html-removebg-preview.png';
import css from './css-removebg-preview.png';
import bootstrap from './bootstrap-removebg-preview.png';
import tailwind from './tailwind.png';
import react from './react.png';
import video from './password.mp4';
import videocont from './contecholic.mp4';
import videofashanoz from './fashnoz.mp4';
import videojpdhpurtrip from './jodhpurtrip.mp4';
import Footer from './comman/Footer';
import movieapp from './MovieApp.mp4';
import webapp from './Reactwebapp.mp4'


function App() {
   return (
      <div className="App">
         <OffcanvasExample />
         <section className='container' id={'home'}>
            <div className='row ps-lg-5'>
               <div className='col-lg-6 col-12 pt-lg-5 mt-lg-5'>
                  <h3 className='fw-bold pt-5 mt-5'>
                     Hi, It's Me
                  </h3>
                  <h4>
                     I'm  <span className='word'>M</span>ohit . . .
                  </h4>
                  <p className='fw-semibold pera'>
                     I'm Professional Web Developer . our main gol to help &
                     satisficed the local & globle clients by web development solutions.
                  </p>
                  <div className='d-flex'>
                     <a href='https://www.linkedin.com/in/mohit-gehlot-9b3998262/' className='icons text-center'>
                        <AiFillLinkedin />
                     </a>
                     <a href='https://www.instagram.com/mr.mohitgehlot9656/' className='icons text-center'>
                        <AiFillInstagram />
                     </a>
                     <a href='https://api.whatsapp.com/send/?phone=9588990084&text&type=phone_number&app_absent=0' className='icons text-center'>
                        <BsWhatsapp />
                     </a>
                     <a href='mailto:mohitgehlot9656@gmail.com' className='icons text-center'>
                        <AiOutlineMail />
                     </a>
                  </div>
               </div>
               <div className='col-lg-6 col-12 ps-lg-5 ps-3'>
                  <div className='imgporofile mx-auto'></div>
               </div>
            </div>
         </section>
         <section className='container mt-5 pt-5' id={'sikills'}>
            <div className='row ps-lg-5'>
               <h3 className='col-12 col-lg-3'>
                  My Skills
               </h3>
               <div className='col-12 col-lg-9'>
                  <hr />
               </div>
               <h6 className='sikills pt-3 '>
                  thes are my sikills
               </h6>
            </div>
            <div className='row ps-lg-5'>
               <div className='col-lg-6 col-12 ps-lg-5'>
                  <div>
                     <div className='mt-5 d-flex'>
                        <div className='mx-2 imgsikills'>
                           <img src={html} width={'40px'} alt="" />
                        </div>
                        <h4 className='pt-1'>HTML</h4>
                     </div>
                     <div className='line'>
                        <div className='linecolorhtml'></div>
                     </div>
                  </div>
                  <div>
                     <div className='mt-5 d-flex'>
                        <div className='mx-2 imgsikills text-center pt-2'>
                           <img src={css} className='img-fluid' width={'30px'} alt="" />
                        </div>
                        <h4 className='pt-1'>CSS (Cascading Style Sheets)</h4>
                     </div>
                     <div className='line'>
                        <div className='linecolorcss'></div>
                     </div>
                  </div>
                  <div>
                     <div className='mt-5 d-flex'>
                        <div className='mx-2 imgsikills fw-bold text-center pt-2'>
                           JS
                        </div>
                        <h4 className='pt-1'> Java Script</h4>
                     </div>
                     <div className='line'>
                        <div className='linecolorjava'></div>
                     </div>
                  </div>
                  <div>
                     <div className='mt-5 d-flex'>
                        <div className='mx-2 imgsikills fw-bold text-center pt-2'>
                           <img src={bootstrap} className='img-fluid' alt="" />
                        </div>
                        <h4 className='pt-1'>Bootstrap</h4>
                     </div>
                     <div className='line'>
                        <div className='linecolorboo'></div>
                     </div>
                  </div>
                  <div>
                     <div className='mt-5 d-flex'>
                        <div className='mx-2 imgsikills fw-bold text-center pt-2'>
                           <img src={tailwind} width={'30px'} className='img-fluid' alt="" />
                        </div>
                        <h4 className='pt-1'>tailwind Css </h4>
                     </div>
                     <div className='line'>
                        <div className='linecolorjava'></div>
                     </div>
                  </div>
                  <div>
                     <div className='mt-5 d-flex'>
                        <div className='mx-2 imgsikills fw-bold text-center pt-2'>
                           <img src={react} width={'25px'} height={'20px'} className='img-fluid' alt="" />
                        </div>
                        <h4 className='pt-1'>React Js</h4>
                     </div>
                     <div className='line'>
                        <div className='linecolorreact'></div>
                     </div>
                  </div>
               </div>
               <div className='col-lg-6 col-12'>
                  <div className='row pt-5 mt-5'>
                     <div className='col-lg-6 col-12 mt-3'>
                        <a href="#react">
                        <div className='react  rounded text-center p-5'>
                           <img src={react} width={'110px'} alt="" />
                           <h5 className='fw-bold mt-2'>React Js</h5>
                        </div>
                        </a>
                     </div>
                     <div className='col-lg-6 col-12 mt-3'>
                        <a href="#bootstrap">
                           <div className='react rounded text-center p-5'>
                              <img src={bootstrap} width={'150px'} alt="" />
                              <h5 className='fw-bold mt-2'>Bootstrap</h5>
                           </div>
                        </a>
                     </div>
                     <div className='col-lg-6 col-12 mt-3'>
                        <a href="#html">
                           <div className='react rounded text-center p-5'>
                              <img src={html} width={'110px'} alt="" />
                              <h5 className='fw-bold mt-2'>HTML</h5>
                           </div>
                        </a>
                     </div>
                     <div className='col-lg-6 col-12 mt-3'>
                        <div className='react rounded text-center p-5'>
                           <img src={tailwind} width={'110px'} alt="" />
                           <h5 className='fw-bold mt-2'>Tailwind Css</h5>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className='container mt-5 pt-5' id={'project'}>
            <div className='row  ps-lg-5'>
               <h3 className='col-12 col-lg-3'>
                  My Projects
               </h3>
               <div className='col-12 col-lg-9'>
                  <hr />
               </div>
            </div>
            <h2  id={'react'} className='hedings text-center ps-lg-5 py-5'>these are my react projects</h2>
            <div className='row'>
               <div className='col-lg-4 col-12 ps-lg-5'>
                     <h6 className='text-center text-uppercase mt-3 my-2'> Password Generatore App</h6>
                  <video width={'100%'}  src={video} controls autoPlay muted loop></video>
                  <p className=''>
                    view full  project click haer <BiRightArrowAlt style={{fontSize:'25px'}}/>
                    <a href="https://pass-word-generatore.vercel.app/">https://pass-word-generatore.vercel.app/</a>
                  </p>
               </div>
               <div className='col-lg-4 col-12 ps-lg-5'>
                     <h6 className='text-center text-uppercase mt-3 my-2'> designdpo web App </h6>
                  <video width={'100%'}  src={webapp} controls autoPlay muted loop></video>
                  <p className=''>
                    view full  project click haer <BiRightArrowAlt style={{fontSize:'25px'}}/>
                    <a  href="https://designdpo-e4aj7u3qm-yashgehlot004.vercel.app">https://designdpo-ytvo.vercel.app/</a>
                  </p>
               </div>
               <div className='col-lg-4 col-12 ps-lg-5'>
                     <h6 className='text-center text-uppercase mt-3 my-2'> Movie App </h6>
                  <video width={'100%'}  src={movieapp}  controls autoPlay muted loop></video>
                  <p className=''>
                    view full  project click haer <BiRightArrowAlt style={{fontSize:'25px'}}/>
                    <a  href="https://movie-app-blond-eight.vercel.app/">https://movie-app-blond-eight.vercel.app/</a>
                  </p>
               </div>
            </div>
            <h2 id={'bootstrap'} className='hedings ps-lg-5 text-center py-5'>these are my Bootstrap  projects</h2>
            <div className='row' >
               <div className='col-lg-4 col-12 ps-lg-5' >
                     <h6 className='text-center text-uppercase mt-3 my-2'>
                      WebSite  Contentholic
                     </h6>
                      <video width={'100%'} loop  autoPlay  muted   controls>
                           <source src={videocont} type="video/mp4" />
                      </video>
                      <p>
                     view full  project click haer <BiRightArrowAlt style={{fontSize:'25px'}}/>
                     <a  href="https://mohitgehlot22.github.io/Contentholic/">https://mohitgehlot22..io/Contentholic/</a>
                     </p>
               </div>
               <div className='col-lg-4 col-12 ps-lg-5'>
                     <h6 className='text-center text-uppercase mt-3 my-2'> 
                         WebSite FASHIONZ
                      </h6>
                  <video width={'100%'}  src={videofashanoz} loop  autoPlay  muted  controls></video>
                  <p className=''>
                    view full  project click haer <BiRightArrowAlt style={{fontSize:'25px'}}/>
                    <a  href="https://mohitgehlot22.github.io/FASHIONZ/">https://mohitgehlot22..io/FASHIONZ/</a>
                  </p>
               </div>
               <div className='col-lg-4 col-12 ps-lg-5'>
                     <h6 className='text-center mt-3 text-uppercase my-2'> website Jodhpur Trip </h6>
                  <video width={'100%'}  src={videojpdhpurtrip} loop  autoPlay  muted   controls></video>
                  <p className=''>
                    view full  project click haer <BiRightArrowAlt style={{fontSize:'25px'}}/>
                    <a href="https://mohitgehlot22.github.io/bootstrapjodhpurtrip/">https://mohitgehlot22.</a>
                  </p>
               </div>
            </div>
         </section>
         <Footer/>
      </div>
   );
}

export default App;
