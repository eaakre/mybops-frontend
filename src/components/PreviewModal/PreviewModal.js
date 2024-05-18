import "./PreviewModal.css";
import close from "../../images/close.svg";
import { useEffect } from "react";

const PreviewModal = ({ selectedCard, onClose }) => {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  });

  return (
    <div className={`modal`}>
      <div className="modal__content modal__item">
        <button type="button" className="modal__close" onClick={onClose}>
          <img src={close} alt="Close modal button" />
        </button>
        <img
          src={selectedCard.images[0].url}
          alt={selectedCard.name}
          className="modal__image"
        />
        <div className="modal__item-info">
          <div>
            <div className="modal__item-name">{selectedCard.name}</div>
            <div className="modal__item-type"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
