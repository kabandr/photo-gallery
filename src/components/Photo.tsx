interface PhotoProps {
  photo: {
    id: number;
    url: string;
    title: string;
  };
}

const Photo = ({ photo }: PhotoProps) => {
  return (
    <div className="photo">
      <img src={photo.url} alt="Logo" />
      <p>{photo.title}</p>
    </div>
  );
};

export default Photo;
