import classes from "./loader.module.css";

export const Loader = () => {
  return (
    <div className={classes["wrapper__loader"]}>
      <div className={classes["loader"]}></div>
    </div>
  );
};
