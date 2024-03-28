import React, { useContext } from "react";
import { ItemContext } from '../Item/ItemContext.js';

const Header = (props) => {
    const { openModal } = useContext(ItemContext);
    return(
        <header style={{marginLeft : '45rem'}}>
          <div>
            <h1>BookMark Website</h1>
          </div>
          <div style={{marginLeft : '6rem'}}>
            <button onClick={openModal}>Add New</button>
           </div>
        </header>
    )
}

export default Header;