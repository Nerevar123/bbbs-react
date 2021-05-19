import Tag from "../Tag/Tag";
import tagsStyles from "./Tags.module.scss";

function Tags() {
  return (
    <div className={tagsStyles.tags}>
      <ul className={tagsStyles.list}>
        <Tag text="Декабрь" isActive />
        <Tag text="Январь" />
      </ul>
    </div>
  );
}

export default Tags;
