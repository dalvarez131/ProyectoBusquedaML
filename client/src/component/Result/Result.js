/* External */
import React from "react";
import { useSelector } from "react-redux";

/* Style */
import "./Result.scss";

/* Assets */
import shippingLogo from "../../../public/assets/icons/ic_shipping.png";

/* Services */
import { useGetQueryByNameQuery } from '../../services/queryApi';

/* Others */
import { history } from "../../App";

const Result = () => {
  const { searchInput } = useSelector(state => state);
  const { data: { results:items = [] } = {} } = useGetQueryByNameQuery(searchInput);

  const handleOnClick = (id) => {
    history.push(`/items/${id}`);
  };

  return (
    <div>
      <section className="ml-result">
        <h5 className="ml-result__categoria">Electrónica, Audio y Video {'>'} iPod {'>'} Reproductores {'>'} iPod touch {'>'} <strong>32 GB</strong></h5>
        <ul className="ml-result__list">
          {items.slice(0, 4).map((item) =>
          <li className="ml-result__item" key={item.id} onClick={ () => handleOnClick(item.id) } >
            <img className="ml-result__image" src={item.thumbnail} alt={item.title}/>
            <div className="ml-result__info">
              <h2 className="ml-result__price">$ {item.price.toLocaleString()}</h2>
              {item?.shipping?.free_shipping &&
                <img className="ml-result__shippingLogo" src={shippingLogo} alt="Free Shipping Logo" />
              }
              <p className="ml-result__location">{item?.seller_address?.city?.name}</p>
              <h4 className="ml-result__title">{item.title}</h4>
            </div> 
          </li>
          )}
        </ul>
      </section>
    </div>
  );
}

export default Result;