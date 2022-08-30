import React from "react";

function Button({ title }) {
   return (
      <button className="btn btn-secondary custom-button text-white font-14 d-flex align-items-center">
         <img src="/assets/icons/plus-icon.svg" className="mr-3" alt="" />
         <span>{title}</span>
      </button>
   );
}

export default Button;
