export interface Photo {
  id: number;
  url: string;
  title: string;
}

export interface PhotosListProps {
  photos: Photo[];
}

export interface PhotoProps {
  photo: Photo;
}
