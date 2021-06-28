import React from "react";
import PropTypes from "prop-types";
// Components
import CardItem from "./card-item.component";
// CSS
import "./card-container.styles.css";

export default function CardContainer({ finalResult }) {
  console.log(finalResult);
  return (
    <div className="card-container">
      {finalResult?.map((item, index) => (
        <CardItem key={index} {...item.data} />
      ))}
    </div>
  );
}

CardContainer.propTypes = {
  finalResult: PropTypes.array.isRequired,
};
