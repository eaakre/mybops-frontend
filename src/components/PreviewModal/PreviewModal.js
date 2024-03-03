import "./PreviewModal.css";
import close from "../../images/close.svg";

const PreviewModal = ({ selectedCard, onClose }) => {
  return (
    <div className={`modal`}>
      <div className="modal__content modal__item">
        <button type="button" className="modal__close" onClick={onClose}>
          <img src={close} alt="Close modal button" />
        </button>
        <img
          src={selectedCard.image}
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
