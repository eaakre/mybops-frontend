import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

// Need to change to accommodate Spotify Oauth connection
const LoginModal = ({ onClose, onSignupModal, handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [message, setMessage] = useState("");

  // const resetForm = () => {
  //   setEmail("");
  //   setPassword("");
  //   // setMessage("");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    onClose();
  };
  return (
    <ModalWithForm
      name="login"
      title="Log In"
      buttonText="Log in"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email
        <input
          type="text"
          className="modal__input"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          minLength="2"
          maxLength="30"
          placeholder="Email"
        />
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
