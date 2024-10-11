import css from "./ImageCard.module.css";
import { GalleryItem } from "./GalleryItem";

interface ImageCardProps {
  item: GalleryItem;
  toggleModal: (item: GalleryItem) => void;
}

export default function ImageCard({ item, toggleModal }: ImageCardProps) {
  return (
    <div className={css.imgCard}>
      <img
        src={item.urls.small}
        onClick={() => toggleModal(item)}
        alt={item.alt_description || "Image"}
      />
      <div className={css.extraInfo}>
        <p>Uploaded by: {item.user.name}</p>
        <p>Likes: {item.likes}</p>
      </div>
    </div>
  );
}
