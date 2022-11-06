import React, { useState, useRef } from "react";
import { validateEmail } from "../../utils/index";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  const handleFormSubmit = (e) => {
    console.log(userName, email, message);

    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or username is invalid");
    } else if (!message) {
      setErrorMessage("No Message has been provided");
    } else setErrorMessage("Email Sent to Pj");
    setUserName("");
    setEmail("");
    setMessage("");
    emailjs
      .sendForm(
        "service_legkx49",
        "template_w1mzrmk",
        form.current,
        "PPAMBtfoRREzeh7bc"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.status, result.text);
        },
        (error) => {
          console.log("Failed", error.text);
        }
      );
  };

  return (
    <>
      <div className="col-4 py-2 my-2 rounded mx-auto d-block">
        <h1>Contact</h1>
        <div className="container">
          <form
            id="new-post-form"
            className="form-group-*"
            ref={form}
            onSubmit={handleFormSubmit}
          >
            <label className="form-label" htmlFor="inputdefault">
              Name:
            </label>
            <input
              type="text"
              value={userName}
              name="userName"
              onChange={handleInputChange}
              rows="3"
              className="form-control"
              id="inputdefault"
              required
            />
            <label className="form-label" htmlFor="inputdefault">
              Email:
            </label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              rows="3"
              className="form-control"
              id="inputdefault"
              required
            />
            <label className="form-label" htmlFor="inputdefault">
              Message:
            </label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              className="form-control"
              id="inputdefault"
              rows="3"
              col="5"
              required
            />
            <button
              type="submit"
              onClick={handleFormSubmit}
              className="btn btn-secondary my-2 mx-auto w-100"
            >
              Send Message
            </button>
          </form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Contact;
