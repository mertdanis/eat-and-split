import React, { useState, useContext } from "react";

import { MainContext } from "./Context";

function NewFriends() {
  const [name, setName] = useState();
  const [img, setImg] = useState("");
  const [balance, setBalance] = useState(0);

  const { friendData, setFriendData } = useContext(MainContext);

  const handleNewFriend = (e) => {
    e.preventDefault();

    if (!name) return;

    const newData = [...friendData, { name: name, img: img, balance: balance }];

    setFriendData(newData);
  };

  return (
    <form
      className="flex flex-col gap-1 rounded-2xl bg-blue-500 p-5"
      onSubmit={handleNewFriend}
    >
      <div className="flex gap-3">
        <label htmlFor="">Friend Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Mert"
        />
      </div>

      <div className="flex gap-3">
        <label htmlFor="">Image Url</label>
        <input
          className="w-full"
          type="text"
          value="https://i.pravatar.cc/48?img=38"
          onChange={(e) => setImg(e.target.value)}
        />
      </div>

      <button className="mt-auto rounded-2xl bg-orange-500 p-3"> Add</button>
    </form>
  );
}

export default NewFriends;
