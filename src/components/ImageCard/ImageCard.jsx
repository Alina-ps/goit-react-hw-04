import s from "./ImageCard.module.css";
const ImageCard = ({ src, alt, onClick }) => {
  return (
    <div onClick={onClick} className={s.imageCard}>
      <img src={src} alt={alt} className={s.image} />
    </div>
  );
};

export default ImageCard;
