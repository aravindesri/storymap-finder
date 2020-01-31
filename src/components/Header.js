import React from "react";
import TopNav, {
  TopNavTitle,
  TopNavList,
  TopNavLink
} from "calcite-react/TopNav";
import Checkbox from "calcite-react/Checkbox";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <TopNav
      style={{ border: "none", margin: "0 25px 0 25px" }}
      className="block-group block-group-4-up tablet-block-group-3-up phone-block-group-1-up"
    >
      <TopNavTitle as={NavLink} to="/stories">
        ArcGIS StoryMaps Gallery
      </TopNavTitle>
      <TopNavList>
        <TopNavLink as={NavLink} to="/stories">
          Stories
        </TopNavLink>
        <TopNavLink as={NavLink} to="/collections" onClick={props.handleClick}>
          Collections
        </TopNavLink>
      </TopNavList>
      <div style={{ display: "flex", marginTop: "25px" }}>
        <Checkbox
          name="isStg"
          checked={props.isStg}
          onChange={props.handleChange}
        >
          View in STG
        </Checkbox>
      </div>
    </TopNav>
  );
}

export default Header;
