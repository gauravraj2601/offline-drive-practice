import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
const colors = ["yellow", "lightblue", "lightgreen", "lightcoral", "lightpink"];

const InfiniteDataScroll = () => {
  const [items, setItems] = useState(Array.from({ length: 20 }));

  const fetchMoreData = () => {
    setTimeout(() => {
        setItems(prevItems => prevItems.concat(Array.from({ length: 20 })));
      }, 500);
  };
  return (
    <div
     
      style={{
        width: 300,
        margin: "auto",
        height: 500,
       
      }}
    >
      {/*Put the scroll bar always on the bottom*/}
      <InfiniteScroll
         dataLength={items.length}
         next={fetchMoreData}
         height={400}
         hasMore={true}  // Ensure this is set to true for loading more items
         loader={<h4>Loading...</h4>}
         
      >
        {items.map((_, index) => (
          <div
            style={{
              width: "300px",
              margin: "auto",
              height: "100px",
              backgroundColor: colors[index % colors.length],
            }}
            key={index}
          >
            div - #{index}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteDataScroll;
