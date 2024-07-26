import React from "react";

function Card({data}) {

  return (
    <>
      {
        data.map((e,i)=>{
          return <div key={i} className="card p-2 m-2" style={{ width: "30rem" }}>
          <img src={`${e.imgurl}`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{e.title}</h5>
            <p className="card-text">{e.description}</p>
            <a href={`${e.link}`} className="btn submit-btn">
              visit site
            </a>
          </div>
        </div>
        })
      }
  
    </>
  );
}

export default Card;
