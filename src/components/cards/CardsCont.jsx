import React, { useEffect, useState } from "react";
import "./cardsContent.css";
import Modal from "../Modal/Modal";

const CardsCont = ({ articles }) => {
  const [articleFrom, setArticleFrom] = useState([]);
  const [articleName, setArticleName] = useState(" ");

  useEffect(() => {
    const publisher = articles.map((item) => {
      return item.source.name;
    });

    const uniquePublishers = [...new Set(publisher)];
    console.log("uniquePublishers", uniquePublishers);

    setArticleFrom(uniquePublishers);
  }, [articles]);

  const handleArticleFrom = (article) => {
    setArticleName(article);
  };

  return (
    <div id="cardsContent">
      {/* <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}> */}
      <div id="articlesFrom">
        {/* {articleName !== null || ""? {articleName}: ""} */}
        <h3 className="NewsFromHead">News From</h3>
        {articleFrom !== "" ? (
          <>
            <button
              className="btn btn-outline-primary my-2 mx-2"
              onClick={() => {
                setArticleName(" ");
              }}
            >
              All
            </button>

            {articleFrom.map((item, index) => {
              return (
                <button
                  className="btn btn-outline-primary my-2 mx-2"
                  key={index}
                  onClick={() => {
                    handleArticleFrom(item);
                  }}
                >
                  {item}
                </button>
              );
            })}
          </>
        ) : (
          ""
        )}
      </div>
      <div className="container">
        <div className="row ">
          {/* <h1>{articleName}</h1> */}
          {articles.map((article, index) => {
            return (
              <>
                {/* <div key={index} className="card" style={{ width: "30%", margin: "10px" }}> */}
                {articleName !== " " ? (
                  article.source.name === articleName ? (
                    <div
                      key={index}
                      className="card col-10 col-md-5 col-lg-3 m-4"
                    >
                      <img
                        src={article.urlToImage}
                        className="card-img-top"
                        alt="..."
                        style={{ width: "100%", height: "50%" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          {(article.title || "").substring(0, 50)}
                        </h5>
                        <p>{(article.content || "").substring(0, 100)}</p>
                        <p className="card-text">
                          {(article.description || "").substring(0, 200)}
                        </p>

                        <Modal ind={index} article={article} />
                      </div>
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  <div
                    key={index}
                    className="card col-10 col-md-5 col-lg-3 m-4"
                  >
                    <img
                      src={article.urlToImage}
                      className="card-img-top"
                      alt="..."
                      style={{ width: "100%", height: "50%" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {(article.title || "").substring(0, 50)}
                      </h5>
                      <p>{(article.content || "").substring(0, 100)}</p>
                      <p className="card-text">
                        {(article.description || "").substring(0, 200)}
                      </p>

                      <Modal ind={index} article={article} />
                    </div>
                  </div>
                )}
                {/* <div key={index} className="card col-10 col-md-5 col-lg-3 m-4">
                  <img
                    src={article.urlToImage}
                    className="card-img-top"
                    alt="..."
                    style={{ width: "100%", height: "50%" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {(article.title || "").substring(0, 50)}
                    </h5>
                    <p>{(article.content || "").substring(0, 100)}</p>
                    <p className="card-text">
                      {(article.description || "").substring(0, 200)}
                    </p>

                    <Modal ind={index} article={article} />
                  </div>
                </div> */}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardsCont;
