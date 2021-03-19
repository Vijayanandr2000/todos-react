import React from "react";
import "./style.css";

const List = ({ list, item, setItem, list1 }) => {
  const del = () => {
    setItem(item.filter((e) => e.id !== list1.id));
  };
  const check = () => {
    setItem(
      item.map((e) => {
        if (e.id === list1.id) {
          return {
            ...e,
            completed: !e.completed,
          };
        }
        return e;
      })
    );
    // console.log(item);
  };

  return (
    <div>
      <li className={`list ${list1.completed ? "completed" : ""}`}>
        <input type="text" value={list} />
      </li>
      <li>
        <button onClick={check}>C</button>
      </li>
      <li>
        <button onClick={del}>D</button>
      </li>
    </div>
  );
};
export default List;
