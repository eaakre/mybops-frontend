import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const ConfirmModal = ({ onClose, handleLogout }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogout();
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
