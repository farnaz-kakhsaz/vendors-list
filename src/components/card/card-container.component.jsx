import React from "react";
import PropTypes from "prop-types";
// Components
import CardItem from "./card-item.component";
// CSS
import "./card-container.styles.css";

export default function CardContainer({ finalResult, handleSeeLastItem }) {
  return (
    <div className="card-container">
      {finalResult?.map((item, index) => (
        <CardItem
          isItLastItem={finalResult.length === index + 1}
          key={index}
          {...item.data}
          handleSeeLastItem={handleSeeLastItem}
        />
      ))}
    </div>
  );
}

CardContainer.propTypes = {
  finalResult: PropTypes.array.isRequired,
  handleSeeLastItem: PropTypes.func.isRequired,
};
