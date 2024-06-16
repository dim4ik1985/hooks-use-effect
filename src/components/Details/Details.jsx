import { useEffect, useState } from "react";
import classes from "./details.module.css";
import { CardUser } from "../CardUser/index.js";
import { Loader } from "../Loader/index.js";

export const Details = (props) => {
  const { info } = props;
  const [userDetail, setUserDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  const userData = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`
      );
      const data = await response.json();
      setUserDetail(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    userData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info]);
  return (
    <div className={classes["wrapper"]}>
      {loading ? <Loader /> : <CardUser info={userDetail} />}
    </div>
  );
};
