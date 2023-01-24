import Photo from "./Photo";

interface Photo {
  id: number;
  url: string;
  title: string;
}

interface PhotosListProps {
  photos: Photo[];
}

const PhotosList = ({ photos }: PhotosListProps) => {
  return (
    <div className="photos__list">
      {photos && photos.map((photo) => <Photo photo={photo} key={photo.id} />)}
    </div>
  );
};

export default PhotosList;
