import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ results = [] }) => {
  if (results.length === 0) {
    return null;
  }

  return (
    <ul>
      {results.map((result) => (
        <li key={result.id}>
          <ImageCard src={result.urls.small} alt={result.alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
