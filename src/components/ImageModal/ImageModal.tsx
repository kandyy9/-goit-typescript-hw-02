import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { GalleryItem } from "../ImageCard/GalleryItem";
import { ReactNode } from "react";
import { ModalItem } from "./ModalItem";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageData: ModalItem | null;
}

export default function ImageModal({
  isOpen,
  onClose,
  imageData,
}: ImageModalProps): JSX.Element | null {
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
