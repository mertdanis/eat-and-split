import React, { useState, useContext, useEffect } from "react";

import { MainContext } from "./Context";

function NewFriends() {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);
  const [id, setId] = useState(0);
  const [img, setImg] = useState(`https://i.pravatar.cc/48?img=${id}`);

  const { friendData, setFriendData, setShowAddFriend } =
    useContext(MainContext);

  useEffect(() => {
    setImg(`https://i.pravatar.cc/48?img=${id}`);
  }, [id, img]);

  const handleNewFriend = (e) => {
    e.preventDefault();

    setId((id) => id + 1);
    if (!name) return;

    if (friendData.some((item) => item.name === name)) return;

    const newData = [...friendData, { name: name, img: img, balance: balance }];

    setFriendData(newData);
    setName("");
    setShowAddFriend(false);
  };

  const handleClose = () => {
    setShowAddFriend(false);
  };

  return (
    <form
      className="flex grow flex-col gap-5 rounded-2xl bg-slate-300 p-6"
      onSubmit={handleNewFriend}
    >
      <div className="flex items-center justify-between gap-6">
        <label htmlFor="">Friend Name</label>
        <input
          className="grow  rounded-xl p-2 capitalize"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Mert"
        />
      </div>

      <div className="flex items-center gap-12 ">
        <label htmlFor="">Image Url</label>
        <input
          className="grow rounded-xl p-2"
          type="text"
          placeholder="https://i.pravatar.cc/48?img=38"
          value={`https://i.pravatar.cc/48?img=${id}`}
          onChange={(e) => {
            console.log(img);
            setImg(value);
          }}
        />
      </div>

      <div className="mt-3 flex justify-between">
        <button className=" w-32 rounded-2xl bg-black p-3 font-bold text-white hover:bg-white hover:text-black">
          Add
        </button>

        <button
          onClick={handleClose}
          className=" w-32 rounded-2xl bg-black p-3 font-bold text-white hover:bg-white hover:text-black"
        >
          Close
        </button>
      </div>
    </form>
  );
}

export default NewFriends;
