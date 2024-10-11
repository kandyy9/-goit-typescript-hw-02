import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { GalleryItem } from "../ImageCard/GalleryItem";

interface ImageGalleryProps {
  items: GalleryItem[];
  toggleModal: (item: GalleryItem) => void;
}

export default function ImageGallery({
  items,
  toggleModal,
}: ImageGalleryProps) {
  return (
    <ul className={css.imgGallery}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard item={item} toggleModal={toggleModal} />
        </li>
      ))}
    </ul>
  );
}
