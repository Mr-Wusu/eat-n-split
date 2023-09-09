/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";

function FormAddFriend({ setFriends, setShowAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleAddFriend(friend) {
    setFriends((curFriends) => [...curFriends, friend]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      name,
      id,
      image: `${image}?=${id}`,
      balance: 0,
    };
    handleAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
    setShowAddFriend(false);
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👨🏼‍🤝‍👨🏼 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>📷 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
