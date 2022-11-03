import React, { useState } from "react";
import { validateEmail } from "../../utils/index";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or username is invalid");
    }
    setUserName("");
    setEmail("");
  };

  return (
    <div class="col-4 py-2 my-2 rounded mx-auto d-block">
      <h2>Contact</h2>
      <form id="new-post-form" className="card-body">
        <label class="form-label" for="post-title">
          Name:
        </label>
        <input
          type="text"
          value={userName}
          name="userName"
          onChange={handleInputChange}
          rows="3"
          class="form-control"
        />
        <label class="form-label" for="post-body">
          Email:
        </label>
        <input
          value={email}
          name="Email"
          onChange={handleInputChange}
          type="text"
          rows="3"
          class="form-control"
        />
        <label class="form-label" for="post-body">
          Message:
        </label>
        <textarea
          name="post-body"
          class="form-control"
          id="messagearea"
          rows="3"
          col="5"
        ></textarea>
        <button
          type="button"
          onClick={handleFormSubmit}
          className="btn btn-primary my-2 mx-auto w-100"
        >
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};
export default Contact;
