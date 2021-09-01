import React from "react";

const Newsitem = (props) => {
  let { title, description, image, newsurl, author, date, source } = props;
  return (
    <>
      <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1", left:"90%"}}>
    {source}
  </span>
          <img src={image} className="card-img-top" alt="NewsImage" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsitem;
