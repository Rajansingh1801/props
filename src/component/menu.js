import React from "react";
import "../css/All-style.css";

function Menu({ item }) {
  return (
    <>
      <div className="card d-flex flex-wrap justify-content-between">
        {item.map((i) => (
          <>
            <div className="card-item text-center">
              {/* <h1>Name is:{i.name}</h1>
                <h3>Age is:{i.age}</h3> */}
              <img src={i.img} alt="song-images" />
              <div className="card-detail"></div>
              <h3>Song:{i.song_name}</h3>
              <h4>Movie:{i.movie_name}</h4>
              <h5>Singer:{i.singer}</h5>
              <div className="">
                <button className="visit">
                  <a href={i.link} rel="noopener" target="blank">
                    Visit
                  </a>
                </button>
                <button className="lyrics">Lyrics</button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Menu;
