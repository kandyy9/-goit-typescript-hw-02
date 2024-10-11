import css from "./ImageCard.module.css";

export default function ImageCard({ item, toggleModal }) {
  return (
    <div className={css.imgCard}>
      <img
        src={item.urls.small}
        onClick={() => toggleModal(item)}
        alt={item.alt_description}
      />
      <div className={css.extraInfo}>
        <p>Uploaded by: {item.user.name}</p>
        <p>Likes: {item.likes}</p>
      </div>
    </div>
  );
}
