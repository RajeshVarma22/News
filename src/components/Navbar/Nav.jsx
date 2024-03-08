import React from "react";
import logo from "../../assets/News_4-removebg-preview.png";

const Nav = ({CATEGORY,handleChange,category,loading}) => {
  return (
    <div>
      <div className="Navi">
        <img src={logo} width="auto" height="100px" id="news_logo" />

        {CATEGORY.map((cat, index) => {
          return (
            <>
              <button
                key={index}
                type="button"
                className={
                  category === cat ? "black button-17" : "white button-17"
                }
                onClick={() => {
                  handleChange(cat);
                }}
                style={{ margin: "20px" }}
              >
                {cat}
              </button>
            </>
          );
        })}
      </div>
      {loading ? (
        <>
          <div className="text-center">
            <div className="spinner-border" role="status"></div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Nav;
