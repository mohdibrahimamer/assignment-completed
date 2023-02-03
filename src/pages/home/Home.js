import React, { useEffect, useState } from "react";
import ShowDetails from "../../components/ShowDetails";
import "./home.css";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import axios from "axios";
const Home = () => {
  const [details, setDetails] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  const apiData = () => {
    axios.get(url).then((res) => {
      console.log(res);
      setDetails(res.data);
    });
  };

  useEffect(() => {
    apiData();
  }, []);

  return (
    <>
      <div className="home-page">
        <div>
          {details.map((detail) => {
            const {
              id,
              name,
              username,
              email,
              address,
              geo,
              phone,
              website,
              company,
            } = detail;
            return <ShowDetails key={id} {...detail} />;
          })}
        </div>
        <div className="home-buttons">
          <button type="button" className="home-leftbtn">
            <AiOutlineLeft />
          </button>

          <button type="button" className="home-btn">
            1
          </button>
          <button type="button" className="home-btn">
            2
          </button>
          <button type="button" className="home-btn">
            3
          </button>
          <button type="button" className="home-rightbtn">
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
