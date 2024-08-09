import React, { useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  backgroundColor: "yellow",
  marginBottom: "10px",
  marginLeft: "-30px",
  height: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const DataScroller = () => {
  const [items, setItems] = useState(Array.from({ length: 20 }));
  

  const fetchMoreData = () => {
    setTimeout(() => {
      setItems(prevItems => prevItems.concat(Array.from({ length: 20 })));
    }, 500);
  };

  return (
    <div style={{ height: "400px", width: "300px", margin: "auto", marginTop: "40px" }}>
      <h1>DataScroller</h1>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        height={400}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <ul style={{ width: "200px", margin: "auto", listStyleType: "none" }}>
          {items.map((item, index) => (
            <li style={style} key={index}>
              {`Item ${index+1}`}
            </li>
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
};

export default DataScroller;
