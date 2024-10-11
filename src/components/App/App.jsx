import { useState, useEffect } from "react";
import { fetchImages } from "./../../unsplashGalleryAPI";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadmoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import css from "./App.module.css";

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageData, setSelectedImageData] = useState(null);
  const [endOfCollection, setEndOfCollection] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setError(null);
        setLoading(true);
        const res = await fetchImages(query, page);

        if (res.items.length === 0) {
          setEndOfCollection(true);
        } else {
          setImages((prevImages) => [...prevImages, ...res.items]);
          if (res.items.length < 20) {
            setEndOfCollection(true);
          }
        }
      } catch (error) {
        setError("An error occurred while fetching images");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setEndOfCollection(false);
  };

  const handleClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const toggleModal = (imageData) => {
    setModalIsOpen(!modalIsOpen);
    setSelectedImageData(imageData || null);
  };

  return (
    <div className={css.app}>
      <ImageModal
        isOpen={modalIsOpen}
        onClose={() => toggleModal(null)}
        imageData={selectedImageData}
      />
      <SearchBar onSearch={handleSearch} />
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery items={images} toggleModal={toggleModal} />
          {loading && <Loader />}
          {!loading && images.length > 0 && !endOfCollection && (
            <LoadMoreBtn handleClick={handleClick} />
          )}
        </>
      )}
      {endOfCollection && <ErrorMessage message="End of collection" />}
    </div>
  );
}
