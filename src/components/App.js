import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showImg, setShowImg] = useState([])


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function onAddItem(newItems){
    setShowImg([...showImg, newItems])
  }

  function onDeleteItem(id) {
    const updatedItems = showImg.filter((item) => item.id !== id)
    setShowImg(updatedItems)
  }

  function onUpdateItem(toy){
    // console.log(toy)
    const updatedItems = showImg.map((item) => {
      if (item.id === toy.id){
        return toy;
      } else {
        return item;
      }
    })
    setShowImg(updatedItems)
  }


  function handleLikes(toy, id, likes){

    const likesData = {
      ...toy,
      likes: likes + 1
    }
    // console.log(likesData)

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(likesData)
    })
    .then(resp => resp.json())
    .then(updatedItem => onUpdateItem(updatedItem))
  }



  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(resp => resp.json())
    .then(data => setShowImg(data))
  }, [])

  return (
    <>
      <Header />
      {showForm ? <ToyForm addItems={onAddItem} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
      toysArray={showImg}
      onDeleteItem={onDeleteItem}
      onUpdateItem={onUpdateItem}
      handleLikes={handleLikes}
      />
    </>
  );
}

export default App;
