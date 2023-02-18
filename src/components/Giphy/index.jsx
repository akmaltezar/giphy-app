import React, { useState, useEffect } from "react";
import "./styles.css";
import Loader from "../Loader";

const Giphy = (props) => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getGiphy = async () => {
      setLoading(true);
      await fetch(
        `https://api.giphy.com/v1/gifs/search?&apikey=k3ewsj3Hc5U8ygNw6RLr9X3N0BQ7q1CF&limit=20&q=${props.keyword}`,
        {
          method: "GET",
          redirect: "follow",
        }
      )
        .then((response) => response.json())
        .then((result) => {
          // console.log(result);
          setResults(result.data);
          setError(false);
          setLoading(false);
        })
        .catch((error) => {
          // console.log(error);
          setLoading(false);
          setError(true);
        });
    };
    getGiphy();
  }, [props.keyword]);

  const renderGifs = () => {
    if (loading) {
      return <Loader />;
    }
    return results.map((item) => {
      return (
        <div key={item.id} className="gif">
          <img src={item.images.fixed_height.url} alt={item.title} />
        </div>
      );
    });
  };
  const renderError = () => {
    if (error) {
      return <div>Unable to get Gifs, please refresh the page</div>;
    }
  };

  return (
    <div>
      {renderError()}
      <div className="container">{renderGifs()}</div>
    </div>
  );
};

export default Giphy;
