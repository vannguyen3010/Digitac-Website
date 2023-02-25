import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle} from "react-icons/bi";
import { FiMail} from "react-icons/fi";
import Container from "../components/Container";


const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7834.2152893917!2d106.80335141159604!3d10.955240741484737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d95970202f3f%3A0x679e7fa6d33f74e5!2sLac%20Hong%20University%2C%20Campus%201!5e0!3m2!1sen!2s!4v1676556918387!5m2!1sen!2s"
                width="600"
                height="450"
                className="boder-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                 <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input type="text" className="form-control" placeholder="Name"/>
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder="Email"/>
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder="Mobile Number"/>
                    </div>
                    <div>
                      <textarea name="" id="" className="w-100 form-control" cols="30" rows="4" placeholder="Comments"></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                 </div>
                 <div>
                  <h3 className="contact-title mb-4">Get in touch with Us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-10 align-items-center">
                        <AiOutlineHome className="fs-5"/>
                        <address className="mb-0">Hno:277 , Near village chopal, Mandaura, sonipat, hanrya</address>
                      </li>
                      <li className="mb-3 d-flex gap-10 align-items-center">
                        <BiPhoneCall className="fs-5"/>
                        <a href="tel:+84 707830715">+84 70783071</a>
                      </li>
                      <li className="mb-3 d-flex gap-10 align-items-center">
                        <FiMail className="fs-5"/>
                        <a href="mailto:vovannguyen30102001@gmail.com">vovannguyen30102001</a>
                      </li>
                      <li className="mb-3 d-flex gap-10 align-items-center">
                        <BiInfoCircle className="fs-5"/>
                        <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                      </li>
                    </ul>
                  </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
