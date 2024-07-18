import React, { useState } from "react";
import Contacts from "/assets/contact.svg";
import { toast } from "react-toastify";
import { InputGroup } from "react-bootstrap";
import  "./Style.css"
import Footer from "../Footer/Footer";
const Contact = () => {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    textarea: "",
  });
  const [form, setForm] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (
        input.firstname.trim() !== "" &&
        input.lastname.trim() !== "" &&
        input.email.trim() !== "" &&
        input.phone.trim() !== "" &&
        input.textarea.trim() !== ""
      ) {
        setForm([...form, input]);
        console.log(input);
        setInput({
          firstname: "",
          lastname:'',
          email: "",
          phone: "",
          textarea: "",
        });
        toast.success(`Thank you ${input.firstname} ${input.lastname}`);
        toast.success("Your Contact Details is Submitted");
      } else {
        toast.error("please fill all content");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="contact" id="contact">
      
      <div className="contact-flex d-flex justify-content-around align-items-center">
        <div className="contact-img">
          <img src={Contacts} />
        </div>
        <div className="contact-2">
          <h1>Get In Touch</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              value={input.firstname}
              onChange={handleInput}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              value={input.lastname}
              onChange={handleInput}
            />
            <input
              type="emial"
              placeholder="Email"
              name="email"
              value={input.email}
              onChange={handleInput}
            />
            <input
              type="number"
              placeholder="Phone No."
              name="phone"
              value={input.phone}
              onChange={handleInput}
            />
            <textarea
              name="textarea"
              placeholder="Message"
              value={input.textarea}
              onChange={handleInput}
              rows={5}
              cols={15}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
