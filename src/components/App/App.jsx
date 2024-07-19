import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import fetchImages from "../../services/api";
import ImageGallery from "../ImageGallery/ImageGallery";

function App() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        const response = await fetchImages(query, page);
        setResults((prev) => [...prev, ...response.results]);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [query, page]);

  const handleSetQuery = (newQuery) => {
    setQuery(newQuery);
    setResults([]);
    setPage(1);
  };

  return (
    <>
      <SearchBar setQuery={handleSetQuery} />
      <ImageGallery results={results} />
    </>
  );
}

export default App;
