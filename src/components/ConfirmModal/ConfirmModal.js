import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const ConfirmModal = ({ onClose, onSignupModal, handleLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("logged out");
    onClose();
  };
  return (
    <ModalWithForm
      title="Log Out"
      buttonText="Yes"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div>Are you sure you want to logout?</div>
    </ModalWithForm>
  );
};

export default ConfirmModal;
