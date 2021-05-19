import headerStyles from "./Header.module.scss";

function Header() {
  return (
    <header className={headerStyles.header}>
      <p className={headerStyles.test}>Header</p>
    </header>
  );
}

export default Header;
