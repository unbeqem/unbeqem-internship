import React,  {useState, useEffect} from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";

const TopSellers = () => {
  const [topSellers, setTopSellers] = useState([])
  async function main() {
    const { data } = await axios.get(
      'https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers'
    )
    setTopSellers(data)
  }

  useEffect(() => {
    main()
  }, [])
  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            <ol className="author_list">
              {topSellers.map((topSellers, index) => (
                <li key={index}>
                  <div className="author_list_pp">
                    <Link to={`/author/${topSellers.authorId}`}>
                      <img
                        className="lazy pp-author"
                        src={topSellers.authorImage}
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>
                  <div className="author_list_info">
                    <Link to={`/author/${topSellers.authorId}`}>{topSellers.authorName}</Link>
                    <span>{topSellers.price} ETH</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
