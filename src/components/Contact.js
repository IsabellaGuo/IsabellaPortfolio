import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import * as emailjs from "emailjs-com";
import axios from "axios";

import "./Contact.css";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [serverError, setServerError] = useState("");

  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [post, setPost] = useState([]);

  const onFormSubmit = e => {
    e.preventDefault();
    //postData(formState)
    emailjs
      .sendForm("gmail", "isabella", ".form", "user_btTiErros7eOOIrRBXfmn")
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  //inline validation
  const validateChange = e => {
    yup
      .reach(formSchema, e.target.name)
      .validate(
        e.target.type === "checkbox" ? e.target.checked : e.target.value
      )
      .then(valid => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch(err => {
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };

  const formSubmit = e => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then(resp => {
        setPost(resp.data);
        setServerError(null);
        setFormState({
          name: "",
          email: "",
          message: ""
        });
      })
      .catch(err => {
        setServerError("something went wrong!");
      });
  };

  const inputChange = e => {
    e.persist();
    const newFormState = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value
    };

    validateChange(e);
    setFormState(newFormState);
  };

  const formSchema = yup.object().shape({
    name: yup.string().required("Name is required."),

    email: yup.string().email().required("Please let me know how to contact you back."),

    message: yup.string().required("Please let me know what I can do for you.")
  });

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonIsDisabled(!valid);
    });
  }, [formState]);
  return (
    <div className="contact__main">
      <p>If you have a project in mind</p>
      <form className="form" onSubmit={onFormSubmit}>
        {serverError && <p className="error">{serverError}</p>}
        <label className="label__text" htmlFor="name">
          Name
          <input
            placeholder="Name"
            id="name"
            type="text"
            name="name"
            value={formState.name}
            onChange={inputChange}
          />
          {errors.name.length > 0 ? (
            <p className="error">{errors.name}</p>
          ) : null}
        </label>

        <label className="label__text" htmlFor="email">
          Email
          <input
            placeholder="Email"
            id="email"
            type="text"
            name="email"
            value={formState.email}
            onChange={inputChange}
          />
          {errors.email.length > 0 ? (
            <p className="error">{errors.email}</p>
          ) : null}
        </label>
        <label className="label__text" htmlFor="message">
          Message
          <textarea
            placeholder="Message"
            id="message"
            name="message"
            value={formState.message}
            onChange={inputChange}
          />
          {errors.message.length > 0 ? (
            <p className="error">{errors.message}</p>
          ) : null}
        </label>
        <button
          className="contact__button"
          type="submit"
          disabled={buttonIsDisabled}
        >
          Contact Me
        </button>
      </form>
    </div>
  );
}

export default Contact;
