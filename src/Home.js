import React from "react";
import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();
//   const navigateTo = () => {
//     navigate("/contact");
//   };
// };

function Home() {
  let navigate = useNavigate();
  return (
    <div>
      Home Page
      <button
        onClick={() => {
          navigate("/contact");
        }}
      >
        {" "}
        go to contact
      </button>
    </div>
  );
}

export default Home;
