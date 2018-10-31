export const fetchGifsList = searchText => {
  console.log(searchText);
  const url = `https://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=r6PczBtQ06PK2YjYO2Z0QHPpMzdP9Xgo`;
  return fetch(url).then(res => res.json());
};
