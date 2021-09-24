/* External */
import React, {useEffect, useRef, useState} from "react";
import { useDispatch } from "react-redux";

/* Style */
import "./SearchInput.scss";

/* Assets */
import search from "../../../../public/assets/icons/ic_Search.png";

/* Others */
import { history } from "../../../App";
import { updateSearchInputValue } from "./searchInputSlice";


const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  },[inputRef]);

  const handleOnClick = () => {
    if (searchQuery) {
      history.push(`/items?search=${searchQuery}`);
      dispatch(updateSearchInputValue(searchQuery));
    }  
  }

  return (
    <div className="ml-searchInput">
      <input
        type="text"
        onChange={({target: { value } }) => setSearchQuery(value)}
        autoComplete="off"
        ref={inputRef}
        placeholder="Nunca dejes de buscar"
        className="ml-searchInput__input"
      />
      <button
        onClick={handleOnClick}
        className="ml-searchInput__button"
      >
        <img src={search} alt="search" />
      </button>
    </div>
  );
}

export default SearchInput;