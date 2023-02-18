import "./App.css";
import React, { useEffect, useState } from "react";
import GiphyLogo from "./assets/giphy-logo.png";
import Giphy from "./components/Giphy";

function App() {
  const [text, setText] = useState("");
  const [keyword, setKeyword] = useState("");
  const [show, setShow] = useState(false);

  const handleInput = (e) => {
    setText(e.target.value);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setKeyword(text);
  };

  return (
    <>
      <div className="main">
        {(keyword === "ironman") | show ? (
          <>
            <div className="title-bar">
              {show ? (
                <form className="search-bar" onSubmit={handleChange}>
                  <input
                    type="text"
                    placeholder="search gifs..."
                    value={text}
                    onChange={handleInput}
                  />
                  <button>Search</button>
                </form>
              ) : (
                <h2 className="title">Ironman Giphy</h2>
              )}
            </div>
            <Giphy keyword={keyword} />
          </>
        ) : (
          <div className="welcome">
            <h3 className="title">Welcome to your Giphy</h3>
            <img src={GiphyLogo} alt="giphy_logo" className="giphy-logo" />
            <a className="btn" onClick={() => setKeyword("ironman")}>
              Ironman Giphy
            </a>
            <a className="btn" onClick={() => setShow(true)}>
              Search your Giphy
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
