import classes from "./Container.module.css";
import Search from "../Search/Search";
import Profiles from "../Profiles/Profiles";
import { useState, useEffect } from "react";
import { worldData, indiaData } from "../../data";
const Container = (props) => {
  const [players, setPlayers] = useState(indiaData);
  useEffect(() => {
    if (
      props.id === "1" ||
      props.id === "2" ||
      props.id === "3" ||
      props.id === "4" ||
      props.id === "5"
    ) {
      setPlayers(worldData);
    } else {
      setPlayers(indiaData);
    }
  }, [props.id]);

  const conClass = `${classes.mainDiv} ${
    props.isClicked ? classes.rotateCard : ""
  }`;
  const conClass1 = `${classes.mainDiv} ${
    props.isClicked ? classes.rotateContent : ""
  }`;

  return (
    <div className={classes.container}>
    <Profiles  />
    <div className={classes.card}>
    <Search onSearchChange={props.onSearchChange} />
      <div className={conClass}>
        {players
          .filter((x) => x.id === props.id)
          .map((person) => (
            <div className={conClass1}>
              <h2>{person.name} </h2>
              <img className={classes.user} src={person.image} alt="img.." />
              <div className={classes.country}>
                <h3>{person.country} </h3>
                <img src={person.flag} />
              </div>

              <h3>{person.rating} </h3>
              <p>{person.desc} </p>
            </div>
          ))}
      </div>
      </div>
    </div>
  );
};

export default Container;
