import "./Product.css";

const ProductsList = (props) => {
  const { id, category, title, price, description, image, rating } = props;

  return (
    <div className="card">
      <div className="card__category">{category}</div>
      <h1 className="card__title">{title}</h1>
      <img src={image} alt={title} className="card__image" />
      <div className="card__wrapper">
        <div className="card__rating">{rating.rate} ★</div>
        <div className="card__price">{price} Euro</div>
      </div>
      <div className="card__description">{description}</div>
    </div>
  );
};

export default ProductsList;
