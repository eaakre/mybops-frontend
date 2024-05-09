import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect } from "react";

const ConfirmModal = ({ onClose, handleLogout }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogout();
    onClose();
  };

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

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
