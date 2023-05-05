import React from "react";
import { Link } from "react-router-dom";

const AuthorItems = ({ authorItems }) => {
  return (
    <div className='de_tab_content'>
      <div className='tab-1'>
        <div className='row'>
          {authorItems.nftCollection.map((item, index) => (
            <div className='col-lg-3 col-md-6 col-sm-6 col-xs-12' key={index}>
              <div className='nft__item'>
                <div className='author_list_pp'>
                  <Link to=''>
                    <img
                      className='lazy'
                      src={authorItems.authorImage}
                      alt=''
                    />
                    <i className='fa fa-check'></i>
                  </Link>
                </div>
                <div className='nft__item_wrap'>
                  <div className='nft__item_extra'>
                    <div className='nft__item_buttons'>
                      <button>Buy Now</button>
                      <div className='nft__item_share'>
                        <h4>Share</h4>
                        <Link to='/' target='_blank' rel='noreferrer'>
                          <i className='fa fa-facebook fa-lg'></i>
                        </Link>
                        <Link to='/' target='_blank' rel='noreferrer'>
                          <i className='fa fa-twitter fa-lg'></i>
                        </Link>
                        <Link to='/'>
                          <i className='fa fa-envelope fa-lg'></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <Link to={`/item-details/${item.nftId}`}>
                    <img
                      src={item.nftImage}
                      className='lazy nft__item_preview'
                      alt=''
                    />
                  </Link>
                </div>
                <div className='nft__item_info'>
                  <Link to={`/item-details/${item.nftId}`}>
                    <h4>{item.title}</h4>
                  </Link>
                  <div className='nft__item_price'>{item.price} ETH</div>
                  <div className='nft__item_like'>
                    <i className='fa fa-heart'></i>
                    <span>{item.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
