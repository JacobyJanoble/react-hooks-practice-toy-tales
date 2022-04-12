import React from "react";


function ToyCard({toy, onDeleteItem, onHandleLikes }) {
  console.log(toy)
  const {name, id, image, likes} = toy

  // console.log(img)

  function handleDelete(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
    .then(resp => resp.json())
    .then(() => onDeleteItem(id))
  }

  function onLikes(){
    onHandleLikes(toy, id, likes)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={onLikes}>Like {onLikes}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
