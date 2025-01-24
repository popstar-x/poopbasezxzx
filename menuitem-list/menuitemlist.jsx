import React, {useRef} from "react";
import { MenuContent } from "../../data/menubar";
import Menuitem from "../menu-item/menuitem";

const MenuitemList = () => {
    const items = useRef(MenuContent)
  return (
    <nav className="menuoptions">
      {items.current.map((item) => (
          <Menuitem name={item.name} key={item.name} />
      ))}     
      <style jsx>
        {`
        .menuoptions{
          display: flex;
          flex: 6 1 0%;
          justify-content: center;
          margin: 0 5px;
        }
        `}
      </style>
    </nav>
  );
};

export default MenuitemList;
