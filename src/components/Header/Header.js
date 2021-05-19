import React from "react";
import PropTypes from "prop-types";
import headerStyles from "./Header.module.scss";

// eslint-disable-next-line react/prop-types
function Header({ children }) {
  return <header className={headerStyles.header}>{children}</header>;
}

Header.PropTypes = {
  children: PropTypes.any,
};

export default Header;
