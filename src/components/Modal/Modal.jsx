import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Modal, Button } from 'bootstrap';

const Modal = ({ ind, article }) => {
  return (
    <div id="Modal">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#News_${ind}`}
      >
        Read More
      </button>

      <div
        className="modal fade"
        id={`News_${ind}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
          <div className="modal-content animate__animated animate__fadeInTopLeft animate_delay-3s animate__slow">
            <div className="modal-body">
              <div></div>
              <div>
                <div className="row">
                  <div className="col-12">
                    <p>Artcile Source:{article.source.name}</p>
                    {article.source.name === "YouTube" ? (
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/uDSUn8dc0FI"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    ) : (
                      <img
                        src={article.urlToImage}
                        className="img-fluid"
                        alt="Image not Available"
                        style={{ width: "50%" }}
                      />
                    )}
                  </div>
                  <div className="col-12 ">
                    <h2>{article.title}</h2>
                    {article.author !== null ? (
                      <h4>
                        <b>Author: </b>
                        {article.author}{" "}
                      </h4>
                    ) : (
                      ""
                    )}
                    {article.publishedAt !== null ? (
                      <span>
                        <b>publishedAt: </b> {article.publishedAt}
                      </span>
                    ) : (
                      ""
                    )}
                    <p>{article.content}</p>
                    <p>{article.description}</p>
                    {article.url !== " " ? (
                      <a href={article.url}>Read full article</a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-success"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
