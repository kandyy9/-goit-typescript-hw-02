import { GalleryItem } from "./../ImageCard/GalleryItem";

export type ModalItem = {
  urls: Pick<GalleryItem["urls"], "regular">;
  description: GalleryItem["description"];
};
