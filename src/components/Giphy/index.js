import React from "react";

const GifList = props => {
  return props.gifs.map(gifObj => {
    return <GifListItem key={gifObj.id} gif={gifObj} />;
  });
  // return (
  //   <div>
  //     <li>hello</li>
  //     <li>cool</li>
  //   </div>
  // );
};

const GifListItem = props => {
  const url = props.gif.images.original.url;
  return (
    <div>
      <img src={url} alt="giphy" />
      <p> {url} </p>
    </div>
  );
};
const Giphy = () => {
  return (
    <ul className="giphy-list">
      <GifList />
    </ul>
  );
};

export default Giphy;
