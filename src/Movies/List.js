import React from "react";
import Cards from "./Cards";

function ListMovies(props) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        backgroundColor: "white",
      }}
    >
      {props.moviedata
        .filter(
          (el) =>
            el.title.toUpperCase().includes(props.search.toUpperCase()) &&
            props.rate <= el.rate
        )
        .map((el) => (
          <Cards el={el}></Cards>
        ))}
    </div>
  );
}

export default ListMovies;
