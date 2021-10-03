/* External */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

/* Style */
import "./Result.scss";

/* Assets */
import shippingLogo from "../../../public/assets/icons/ic_shipping.png";

/* Services */
import { useLazyGetCategoryByIdQuery } from '../../services/categoryApi';
import { useGetQueryByNameQuery } from '../../services/queryApi';

/* Others */
import { history } from "../../index";

const Result = () => {
  const location = useLocation();
  const reloadCount = Number(sessionStorage.getItem('reloadCount')) || 0;
  const searchTermUrl = location.search.match(/(\?|\&)([^=]+)\=([^&]+)/)[3];
  const { searchInput } = useSelector(state => state);
  const searchTerm = !!searchInput.searchQuery ? searchInput : {searchQuery: searchTermUrl};
  const { data: { categories = [], items = [] } = {}, isSuccess: resultSuccess } = useGetQueryByNameQuery(searchTerm);
  const [ getCategoryString, { data: { name: categoryName = "" } = {}, isSuccess: categorySuccess }] = useLazyGetCategoryByIdQuery();

  useEffect(() => {
    const updateCategoryStringTimeOut = setTimeout(() => {
      getCategoryString(categories[0]);
    }, 1000);
    return () => clearTimeout(updateCategoryStringTimeOut);
  },[getCategoryString, categories]);

  useEffect(() => {
    if(reloadCount < 2) {
      sessionStorage.setItem('reloadCount', String(reloadCount + 1));
      window.location.reload();
    } else {
      sessionStorage.removeItem('reloadCount');
    }
  }, []);

  const handleOnClick = (id) => {
    history.push(`/items/${id}`);
    window.location.reload();
  };

  return (
    <>
      <section className="ml-result">
        <h5 className="ml-result__categoria">{categoryName}</h5>
        {!!items.length && resultSuccess && categorySuccess &&
        <ul className="ml-result__list">
          {items.map((item) =>
          <li className="ml-result__item" key={item.id} onClick={ () => handleOnClick(item.id) } >
            <img className="ml-result__image" src={item.picture} alt={item.title}/>
            <div className="ml-result__info">
              <h2 className="ml-result__price">$ {item.price.amount.toLocaleString()}</h2>
              {item.free_shipping &&
                <img className="ml-result__shippingLogo" src={shippingLogo} alt="Free Shipping Logo" />
              }
              <p className="ml-result__location">{item.seller_city}</p>
              <h4 className="ml-result__title">{item.title}</h4>
            </div> 
          </li>
          )}
        </ul>
        }
        {!items.length && resultSuccess &&
        <h3 className="ml-result__noResult">
          No se encuentran resultados
        </h3>}
      </section>
    </>
  );
}

export default Result;