/* External */
import React, {useEffect, useRef, useState} from "react";
import { useDispatch } from "react-redux";

/* Style */
import "./SearchInput.scss";

/* Assets */
import searchIcon from "../../../../public/assets/icons/ic_Search.png";

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

  const search = () => {
    if (searchQuery) {
      history.push(`/items?search=${searchQuery}`);
      dispatch(updateSearchInputValue(searchQuery));
    }  
  };

  const handleOnKeyUp = (e) => {
    if (e.key === "Enter"){
      search();
    }
  };

  const handleOnClick = () => {
    search();
  };

  return (
    <div className="ml-searchInput">
      <input
        type="text"
        onChange={({target: { value } }) => setSearchQuery(value)}
        autoComplete="off"
        ref={inputRef}
        placeholder="Nunca dejes de buscar"
        className="ml-searchInput__input"
        onKeyUp={handleOnKeyUp}
      />
      <button
        onClick={handleOnClick}
        className="ml-searchInput__button"
      >
        <img src={searchIcon} alt="search icon"/>
      </button>
    </div>
  );
}

export default SearchInput;