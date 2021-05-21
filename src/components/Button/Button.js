import PropTypes from "prop-types";
import cn from "classnames";
import buttonStyles from "./Button.module.scss";

function Button({ className, isLight, children, type, onClick, ...props }) {
  return (
    <button
      className={cn(className, buttonStyles.button, {
        [buttonStyles.button_theme_light]: isLight,
      })}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  isLight: PropTypes.bool,
  children: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
