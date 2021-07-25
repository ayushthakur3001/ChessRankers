import classes from "./SearchResult.module.css";
import { worldData, indiaData } from "../../data";
import { useState} from "react";

const array = [...worldData, ...indiaData];
const SearchResult = (props) => {
  
  const handleClick = (e) => {
    props.onSearchChange(e)
    props.onManualClick()
  };
  return (
    
      <div className={classes.result}>
        {array
          .filter((val) => {
            if (props.searchTerm == "") {
              return;
            } else if (
              val.name.toLowerCase().includes(props.searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <div
                className={classes.user}
                onClick={() => handleClick(val.id)}
                key={key}
              >
                <p>{val.name} </p>
              </div>
            );
          })}
      </div>
   
  );
};

export default SearchResult;
