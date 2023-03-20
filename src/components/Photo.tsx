import React from "react";
import { PhotoProps } from "../types";

const Photo = ({ photo }: PhotoProps) => {
  return (
    <div className="photo">
      <img src={photo.url} alt="Logo" />
      <p>{photo.title}</p>
    </div>
  );
};

export default Photo;
