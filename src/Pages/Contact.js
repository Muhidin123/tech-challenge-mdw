import { useState, useEffect } from "react";
import axios from "axios";

import styles from "../Styles/Contact.module.scss";
import "../Styles/App.scss";

const API_URI = "https://api.mwi.dev/";
const API_POST_URI =
  "http://localhost:5000/midwestern-api/us-central1/api/contacts";
export default function Contact() {
  const [content, setContent] = useState({});
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    title: "",
    email: " ",
    message: "",
  });

  useEffect(() => {
    axios.get(API_URI.concat("content/contact")).then(res => {
      setContent(res.data.data[0]);
    });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(API_POST_URI, formData)
      .then(_res => {
        alert("Your message was sent! Thank you!");
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.error.message.email);
        }
      });
  };

  const handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={styles.Contact}>
      <div className={`${styles.text_container} ${styles.center}`}>
        <div className={styles.content}>
          <h1>{content.title}</h1>
          <hr></hr>
          <p>{content.content}</p>
        </div>
      </div>

      <div className={`${styles.form_container} ${styles.center}`}>
        <div className={styles.content}>
          <h2 className={styles.form_heading}>Heading Two</h2>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              id='fname'
              name='first_name'
              placeholder='First Name'
              onChange={handleInputChange}
            />
            <input
              type='text'
              id='lname'
              name='last_name'
              placeholder='Last Name'
              onChange={handleInputChange}
            />
            <input
              type='text'
              id='title'
              name='title'
              placeholder='Title'
              onChange={handleInputChange}
            />

            <input
              type='email'
              required
              id='email'
              name='email'
              placeholder='Email'
              onChange={handleInputChange}
            />
            <textarea
              className={styles.long}
              id='message'
              name='message'
              placeholder='Message'
              rows='10'
              onChange={handleInputChange}
            ></textarea>
          </form>
          <button id='button' className='click_button' onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
