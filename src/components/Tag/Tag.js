import PropTypes from "prop-types";
import Button from "../Button/Button";
import tagStyles from "./Tag.module.scss";

function Tag({ text, isActive }) {
  return (
    <li className={tagStyles.listItem}>
      <Button
        className={(tagStyles.button, isActive && tagStyles.button_active)}
        isLight
        type="button"
        onClick={() => console.log("123")}
      >
        {text}
      </Button>
    </li>
  );
}

Tag.propTypes = {
  isActive: PropTypes.bool,
  text: PropTypes.string,
};

export default Tag;
