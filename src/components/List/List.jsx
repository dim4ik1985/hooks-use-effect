import classes from "./list.module.css";

export const List = (props) => {
  const { items, action } = props;

  return (
    <div className={classes["list__wrapper"]}>
      {items.map((item) => (
        <div className={classes["list__item"]} key={item.id} onClick={() => action(item)}>
          {item.name}
        </div>
      ))}
    </div>
  );
};
