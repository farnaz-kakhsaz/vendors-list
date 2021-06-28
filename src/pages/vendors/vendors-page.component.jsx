import React, { useEffect, useState } from "react";
import { getVendorsList } from "../../services/handleResponse";
// Components
import CardContainer from "../../components/card/card-container.component";
// Images
import Loader from "../../assets/images/loader-icon.gif";
// CSS
import "./vendors-page.styles.css";

export default function Vendors() {
  const [vendors, setVendors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageSize, setPageSize] = useState(20);
  const [lat, setLat] = useState(35.754);
  const [long, setLong] = useState(51.328);
  const [pageNumber, setPageNumber] = useState(1);
  const [allPageNumber, setAllPageNumber] = useState(1);

  useEffect(() => {
    if (allPageNumber > vendors.length) {
      setIsLoading(true);
      getVendorsList(pageNumber, pageSize, lat, long)
        .then((data) => {
          setVendors((prevVendors) => [
            ...new Set([...prevVendors, ...data?.data?.finalResult]),
          ]);
          setAllPageNumber(data?.data.count);
          setIsLoading(false);
        })
        .catch((error) => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, [pageNumber]);

  const handleSeeLastItem = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  return (
    <div className="vendors-page-container">
      <CardContainer
        finalResult={vendors}
        handleSeeLastItem={handleSeeLastItem}
      />
      {isLoading && <img className="loader" src={Loader} alt="loader" />}
    </div>
  );
}
