import React from "react";

function Card({ data }) {
  return (
    <>
      {data.map((e, i) => {
        return (
          <div key={i} className="card p-2 m-2" style={{ width: "30rem" }}>
            <img src={`${e.imgurl}`} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{e.title}</h5>
              <p className="card-text">{e.description}</p>
              <p>
                <strong>Technology Stack</strong>
              </p>
              <p className="card-text">{e.Frontend}</p>
              <p className="card-text">{e.Backend}</p>
              <p className="card-text">{e.Database}</p>
              <p className="card-text">{e.Authentication}</p>
              <div className="d-flex justify-content-between apgn-items-end">
                <a href={`${e.link}`} className="btn submit-btn" target="_blank">
                  visit site
                </a>
                &nbsp;
                <div className="dropdown">
                  <button className="btn submit-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    view code
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a href={`${e.client}`} className="dropdown-item" target="_blank" rel="noopener noreferrer">
                        view client
                      </a>
                    </li>
                    {e.server && (
                      <li>
                        <a href={`${e.server}`} className="dropdown-item" target="_blank" rel="noopener noreferrer">
                          view server
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
                {/* <a href={`${e.github}`} className="btn submit-btn" target="_blank">
                  view code
                </a> */}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
