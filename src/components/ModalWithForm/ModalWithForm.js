import "./ModalWithForm.css";
import close from "../../images/close.svg";

const ModalWithForm = ({
  children,
  name,
  title,
  buttonText,
  onClose,
  onSubmit,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content modal__form">
        <button type="button" className="modal__close" onClick={onClose}>
          <img src={close} alt="Close modal button" />
        </button>
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <div className="modal__submit-wrapper">
            <button type="submit" className="modal__submit">
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
