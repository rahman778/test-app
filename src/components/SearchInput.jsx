import React from "react";

function SearchInput(props) {
   const { placeholder, name, onChange, inputValue = "", disabled } = props;
   return (
      <div className="search-input d-flex align-items-center">
         <img src="/assets/icons/icon-search.svg" alt="" />
         <input
            type="text"
            name={name}
            className="form-control border-0"
            placeholder={placeholder}
            onChange={(event) => onChange(event.target.value)}
            value={inputValue}
            disabled={disabled}
         />
      </div>
   );
}

export default SearchInput;
