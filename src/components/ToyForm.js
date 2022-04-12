import React, {useState} from "react";

function ToyForm({addItems}) {
  const [image, setShowImage] = useState([])
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItemData = {
      name: name,
      image: image,
      likes: 0,
    }

    fetch('http://localhost:3001/toys', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItemData)
    })
    .then(resp => resp.json())
    .then(newItem => addItems(newItem))
  }


  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(e) => setShowImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
