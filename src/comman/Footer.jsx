import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FcCellPhone } from "react-icons/fc";

const Footer = () => {
  return (
    <div className="footer pt-5" id={'contact'}>
      <div className="container mt-5 ps-lg-5">
        <div className="row">
          <div className="col-lg-4 col-12">
            <h4>Contact</h4>
            <div className='d-flex mt-4'>
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
            <div className="mt-4">
                <FcCellPhone className="fs-2"/> <span className="mt-2">9588990084</span> 
            </div>
            <div className="mt-4">
            <a href="mailto:mohitgehlot9656@gmail.com">
                < AiOutlineMail className="fs-3"/> <span className="mt-2">mohitgehlot9656@gmail.com</span> 
            </a>
            </div>
          </div>
          <div className="col-lg-4 col-12 mt-4" id={'html'}>
            <h4> HTML Project </h4>
             <a className="py-2 d-block" href="https://mohitgehlot22.github.io/htmlProject1/">
                https://mohitgehlot22.github.
             </a>
             <a className="py-2 d-block" href="https://mohitgehlot22.github.io/HtmlProjct2/">https://mohitgehlot22.github.io//</a> 
             <a className="py-2 d-block" href="https://mohitgehlot22.github.io/htmlproject3/">
              https://mohitgehlot22.github.io
             </a>
          </div>
          <div className="col-lg-4 col-12 my-3 px-lg-5">
            <h4> Bootstrap Project </h4>
             <a className="py-2 d-block" href="https://mohitgehlot22.github.io/PreetiWeb/">
                https://mohitgehlot22.github.io/
             </a>
             <a className="py-2 d-block" href="https://mohitgehlot22.github.io/FASHIONZ/">https://mohitgehlot22.github.i</a> 
             <a className="py-2 d-block" href="https://mohitgehlot22.github.io/Contentholic/">
              https://mohitgehlot22.github.io/
             </a>
             <a href="https://64fc3bb4ecfe834322586ae0--imaginative-moonbeam-3bab4c.netlify.app/">
                <p>
                https://64fc3bb4ecfe834322586ae0--imaginative-moonbeam-3bab4c.netl
                </p>
             </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
