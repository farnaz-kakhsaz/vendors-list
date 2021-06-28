import React, { useRef, useCallback } from "react";
import PropTypes from "prop-types";
// CSS
import "./card-item.styles.css";

export default function CardPageItem({
  id,
  title,
  backgroundImage,
  isItLastItem,
  handleSeeLastItem,
}) {
  const observer = useRef();
  const lastItemElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        handleSeeLastItem();
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  return (
    <div className="card-item" ref={isItLastItem ? lastItemElementRef : null}>
      <h5 className="card-item-title">{title}</h5>
      <div
        className="card-item-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
    </div>
  );
}

CardPageItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  isItLastItem: PropTypes.bool.isRequired,
  handleSeeLastItem: PropTypes.func.isRequired,
};
