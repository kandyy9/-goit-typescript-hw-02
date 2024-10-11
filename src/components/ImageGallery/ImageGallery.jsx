import ImageCard from "./../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, toggleModal }) {
  return (
    <ul className={css.imgGallery}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard item={item} toggleModal={toggleModal}></ImageCard>
        </li>
      ))}
    </ul>
  );
}
