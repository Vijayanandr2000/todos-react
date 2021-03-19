import React from "react";
import List from "./List";

const Todo = ({ item, setItem }) => {
  return (
    <div>
      <ul>
        {item.map((list) => (
          <List
            list={list.text}
            item={item}
            setItem={setItem}
            key={item.id}
            list1={list}
          />
        ))}
      </ul>
    </div>
  );
};
export default Todo;
