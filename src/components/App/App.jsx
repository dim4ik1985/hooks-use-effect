import classes from "./app.module.css";
import { useEffect, useState } from "react";
import { List } from "../List/index.js";
import { Details } from "../Details/index.js";
import { Loader } from "../Loader/index.js";

export const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState();

  const loadData = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
      );

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handlerClick = (user) => {
    setUserInfo(user);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className={classes["container"]}>
        {loading ? (
          <Loader />
        ) : (
          <div className={classes["wrapper"]}>
            <List items={users} action={handlerClick} />
            {userInfo && <Details info={userInfo} />}
          </div>
        )}
      </div>
    </>
  );
};
