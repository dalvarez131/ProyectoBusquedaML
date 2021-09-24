/* External */
import React from "react";
import { useSelector } from "react-redux";

/* Style */
import "./Result.scss";

/* Components */
import Product from "../Product";

/* Services */
import { useGetQueryByNameQuery } from '../../services/query';

/* Others */
import { selectCount } from "../Navbar/SearchInput/searchInputSlice";
import { testsArray } from "../Navbar/SearchInput/searchInputSlice";

const Result = () => {
  const { searchInput } = useSelector(state => state);
  const { data: { results:items = [] } = {}, error, isLoading } = useGetQueryByNameQuery(searchInput);

  return (
    <div>
      <section className="ml-search">
        <h3>Electrónica, Audio y Video {'>'} iPod {'>'} Reproductores {'>'} iPod touch {'>'} <strong>32 GB</strong></h3>
        <ul className="ml-search__results">
          {items.slice(0, 4).map((item) =>
          <li className="ml-search__item" key={item.id}>
            <img className="ml-search__image" src={item.thumbnail}/>
            <div className="ml-search__info">
              <h4>$ {item.price}</h4>
              <h4>{item.title}</h4>
            </div> 
          </li>
          )}
        </ul>
        <Product/>
      </section>
    </div>
  );
}

export default Result;