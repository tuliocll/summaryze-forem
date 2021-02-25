import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import style from './SearchBar.module.css';


function SearchBar({ onClick }) {
  const [url, setUrl] = useState("");

  function handleChange(e) {
    setUrl(e.target.value);
  }

  function handleOnClick() {
    onClick(url);
  }

  return (
    <div className={style.container}>
      <AiOutlineSearch />
      <input
        value={url}
        onChange={handleChange}
        placeholder="https://dev.to..."
      />
      <button onClick={handleOnClick}>Generete</button>
    </div>
  );
}

export default SearchBar;
