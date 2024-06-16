import classes from "./cardUser.module.css";
export const CardUser = (props) => {
  const { name, avatar, details } = props.info;

  return (
    <div className={classes["card-user"]}>
      <img src={avatar} alt="user fhoto" />
      <h2 className={classes["user__name"]}>{name}</h2>
      <p className={classes["user__city"]}>City: {details?.city}</p>
      <p className={classes["user__company"]}>Company: {details?.company}</p>
      <p className={classes["user__position"]}>Position: {details?.position}</p>
    </div>
  );
};
