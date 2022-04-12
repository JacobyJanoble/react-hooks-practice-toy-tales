import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toysArray, onDeleteItem, onUpdateItem, handleLikes}) {

  const toys = toysArray.map(item => {
    // console.log(item)
    return <ToyCard
    key={item.id}
    toy={item}
    onHandleLikes={handleLikes}
    onDeleteItem={onDeleteItem}
    onUpdateItem={onUpdateItem}  />
  })

  return (
    <>
    <div id="toy-collection">{toys}</div>
    </>
  );
}

export default ToyContainer;
