import React, { useEffect, useState } from "react";
import { getVendorsList } from "../../services/handleResponse";
// Components
import CardContainer from "../../components/card/card-container.component";
// CSS
import "./vendors-page.styles.css";

export default function Vendors() {
  const [vendors, setVendors] = useState([]);
  useEffect(
    () =>
      getVendorsList(2, 10, 35.754, 51.328).then((data) =>
        setVendors(data?.data)
      ),
    []
  );
  console.log(vendors);
  // {vendors.finalResult.map((item, index) => (
  //   <div key={index}>{item.data}</div>
  // ))}
  return (
    <div className="vendors-page-container">
      <CardContainer finalResult={vendors.finalResult} />
    </div>
  );
}
