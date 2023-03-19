import Photo from "./Photo";
import { PhotosListProps } from "../types";

const PhotosList = ({ photos }: PhotosListProps) => {
  return (
    <div className="photos__list">
      {photos && photos.map((photo) => <Photo photo={photo} key={photo.id} />)}
    </div>
  );
};

export default PhotosList;
