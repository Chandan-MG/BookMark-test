import React, { useState } from "react";

const Header = (props) => {

    return(
        <header>
          <div>
            <h1>BookMark Website</h1>
          </div>
          <div>
            <button onClick={props.onAddNew}>Add New</button>
           </div>
        </header>
    )
}

export default Header;