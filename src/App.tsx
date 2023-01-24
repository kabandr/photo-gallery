import { useEffect, useState } from "react";
import { Box, Pagination, Grommet, TextInput } from "grommet";
import PhotosList from "./components/PhotosList";

const baseUrl = "https://jsonplaceholder.typicode.com/photos";

export interface PhotoI {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const App = () => {
  const [photos, setPhotos] = useState<PhotoI[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchInput, setSearchInput] = useState("");

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = photos.slice(startIndex, endIndex);

  const filteredPhotos = photos.filter((photo: PhotoI) =>
    JSON.stringify(photo.title)
      .toLowerCase()
      .includes(searchInput.toLowerCase())
  );
  const filteredData = filteredPhotos.slice(startIndex, endIndex);

  const getTotalPages = () => {
    if (searchInput) {
      return Math.ceil(filteredPhotos.length / itemsPerPage);
    }
    return Math.ceil(photos.length / itemsPerPage);
  };

  const handleClick = ({ page }: { page: number }) => {
    setCurrentPage(page);
  };
  const totalPages = getTotalPages();

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    const res = await fetch(baseUrl);
    const data = await res.json();
    setPhotos(data);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchInput]);

  return (
    <Grommet>
      <div className="App">
        <Box style={{ margin: "0.5rem" }}>
          <TextInput
            placeholder="Search for title"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </Box>

        <PhotosList photos={searchInput ? filteredData : currentData} />
        <Box>
          <Pagination
            numberItems={totalPages}
            onChange={handleClick}
            alignSelf="center"
            size="large"
          />
        </Box>
      </div>
    </Grommet>
  );
};

export default App;
