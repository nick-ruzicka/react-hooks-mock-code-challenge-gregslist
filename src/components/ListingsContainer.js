import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ search }) {
  const [gregListData, setGregListData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((res) => res.json())
      .then((data) => setGregListData(data));
  }, []);

  function removeCard(id) {
    const updatedDataArray = gregListData.filter(
      (reduceitem) => reduceitem.id !== id
    );
    setGregListData(updatedDataArray);
  }

  const filteredListing = gregListData.filter((gregListData) => {
    return gregListData.desciption.tolowerCase().includes(search.tolowerCase());
  });

  console.log(filteredListing);

  return (
    <main>
      <ul className="cards">
        {gregListData.map((item) => (
          <ListingCard
            key={item.id}
            desciption={item.desciption}
            image={item.image}
            location={item.location}
            remove={removeCard}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
