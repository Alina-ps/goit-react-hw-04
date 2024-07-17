import { useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import fetchImages from "../../services/api";

function App() {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchImages(query, page);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    getData();
  }, [query, page]);

  return (
    <>
      <SearchBar />
    </>
  );
}

export default App;
