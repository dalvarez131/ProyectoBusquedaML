/* External */
import React from "react";
import { useLocation } from "react-router";

/* Style */
import "./Product.scss";

/* Services */
import { useGetDescByIdQuery, useGetQueryByIdQuery } from '../../services/idApi';

const Product = () => {
  const location = useLocation();
  const id = location.pathname.match(/\/([^\/]+)$/)[1];
  const { data: item = {} } = useGetQueryByIdQuery(id);
  const { data: desc = {} }  = useGetDescByIdQuery(id);

  const condition = (item) => {
    if (!item) return "";
    return item.toLowerCase() === ("new" || "nuevo") 
    ? "Nuevo"
    : item.toLowercase() === ("used" || "usado")
      ? "Usado"
      : item;
  }

  const quantityWithText = (soldQty) => {
    if(!soldQty) return "";
    return soldQty > 1 ? ` ${soldQty} vendidos` : `${soldQty} vendido`
  };

  const priceFormat = (price) => {
    return price?.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  };

  return (
    <div>
      <section className="ml-product">
        <h5 className="ml-product__categoria">Electrónica, Audio y Video {'>'} iPod {'>'} Reproductores {'>'} iPod touch {'>'} <strong>32 GB</strong></h5>
        <div className="ml-product__card">
          <img className="ml-product__image" src={item.secure_thumbnail} alt={`Imagen de ${item.title}`} />
          <div className="ml-product__info">
            <p className="ml-product__condition">{`${condition(item.condition)} - ${quantityWithText(item.sold_quantity)}`}</p>
            <p className="ml-product__title">{item.title}</p>
            <p className="ml-product__price">$ {priceFormat(item.price)}</p>
            <button className="ml-product__button">Comprar</button>
          </div>
          <div className="ml-product__desc">
            <p className="ml-product__descTitle">Descripcion</p>
            <p className="ml-product__descText">{desc.plain_text}</p>
          </div> 
        </div>
      </section>
    </div>
  );
}

export default Product;