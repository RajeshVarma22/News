import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import CardsCont from "./cards/CardsCont";
import Navbar from "./Navbar/Navbar";
import Nav from "./Navbar/Nav";
import Pagination from "./Pagination/Pagination";

const CATEGORY = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];
const NewsApp = () => {
  const [articles, setarticle] = useState([]);
  const [category, setCategory] = useState("business");
  const [loading, setLoading] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [pageNum, setPageNum] = useState(1);

  const loadnews = () => {
    setLoading(true);
    axios({
      method: "get",
      url: "https://newsapi.org/v2/top-headlines?country=in&apiKey=71aac45f79174d3a8576d9a682479cfe",
      params: {
        country: "in",
        apiKey: "71aac45f79174d3a8576d9a682479cfe",
        category: category,
        page: pageNum,
      },
    })
      .then((responce) => {
        console.log("response From the api", responce);
        setarticle(responce.data.articles);
        setTotalRecords(responce.data.totalResults);
        setLoading(true);
      })
      .catch((err) => {
        console.log("error");
        setLoading([]);
      })
      .finally(() => {
        console.log("finally called");
        setLoading(false);
      });
  };

  useEffect(() => {
    loadnews();
  }, []);

  useEffect(() => {
    loadnews();
  }, [category, pageNum]);

  const handleChange = (cat) => {
    setCategory(cat);
  };

  return (
    <>
      <Navbar
        CATEGORY={CATEGORY}
        handleChange={handleChange}
        category={category}
        loading={loading}
      />
      {/* <Nav
        CATEGORY={CATEGORY}
        handleChange={handleChange}
        category={category}
        loading={loading}
      /> */}

      <CardsCont articles={articles} />

      <Pagination setPageNum={setPageNum} totalRecords={totalRecords} />
    </>
  );
};
export default NewsApp;
