import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [newsdata, setnewsdata] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(true);
  const [totalArticales, settotalArticales] = useState(0);

  const capitalizeletter = (String) => {
    return String.charAt(0).toUpperCase() + String.slice(1);
  };

  document.title = capitalizeletter(props.category) + " - News Monkey ";

  const UpdateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=2cd304b5a1b74f198e64f8260384846b&page=${
      page
    }&pageSize=${props.pageSize}`;
    const res = await fetch(url);
    props.setProgress(30);
    const data = await res.json();
    props.setProgress(70);
    setnewsdata(data.articles);
    setloading(false);
    settotalArticales(data.totalResults);
    props.setProgress(100);
  };

  useEffect(() => {
    UpdateNews();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=2cd304b5a1b74f198e64f8260384846b&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setpage(page + 1);
    const res = await fetch(url);
    const data = await res.json();
    setnewsdata(newsdata.concat(data.articles));
    settotalArticales(data.totalResults);
  };

  return (
    <>
      <div className="container my-3">
        <h1 className="text-center" style={{marginTop:"100px", marginBottom:"50px"}}>NewsMonkey - Top {capitalizeletter(props.category)} Headlines</h1>
        {loading && <Spinner />}

        <div className="row">
          {newsdata.map((elem, index) => {
            const {
              title,
              description,
              urlToImage,
              url,
              author,
              publishedAt,
              source,
            } = elem;
            return (
              <div className="col-md-4" key={index}>
                <Newsitem
                  title={title}
                  description={description}
                  image={urlToImage}
                  newsurl={url}
                  author={author}
                  date={publishedAt}
                  source={source.name}
                />
              </div>
            );
          })}
        </div>
        <InfiniteScroll
          dataLength={newsdata.length}
          next={fetchMoreData}
          hasMore={newsdata.length !== totalArticales}
          loader={<Spinner />}
        ></InfiniteScroll>
      </div>
    </>
  );
};

export default News;
