import React from "react";
import PropTypes from "prop-types";
// CSS
import "./card-item.styles.css";

export default function CardPageItem({ id, title, backgroundImage }) {
  console.log(backgroundImage);
  return (
    <div className="card-item">
      <h5 className="card-item-title">{title}</h5>
      <img className="card-item-image" src={backgroundImage} alt={title} />
    </div>
  );
}

CardPageItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};
