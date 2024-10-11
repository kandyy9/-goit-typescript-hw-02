import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onClose, imageData }) {
  if (!isOpen || !imageData) return null;

  const {
    urls: { regular: imageUrl },
    description,
  } = imageData;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modalContent}
      overlayClassName={css.modalOverlay}
    >
      <div>
        <img
          src={imageUrl}
          alt={description || "Image"}
          className={css.largeImage}
        />
      </div>
    </Modal>
  );
}
