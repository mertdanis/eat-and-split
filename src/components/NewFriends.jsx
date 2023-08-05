import React, { useState, useContext, useEffect } from "react";

import { MainContext } from "./Context";

function NewFriends() {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);
  const [img, setImg] = useState(`https://i.pravatar.cc/48?img=`);

  const { friendData, setFriendData, setShowAddFriend, id, setId } =
    useContext(MainContext);

  useEffect(() => {
    setImg(`https://i.pravatar.cc/48?img=${id}`);
  }, [id, img]);

  const handleNewFriend = (e) => {
    e.preventDefault();
    if (!name) return;

    if (friendData.some((item) => item.name === name)) return;

    const newData = [...friendData, { name: name, img: img, balance: balance }];
    setId((cur) => cur + 1);
    setFriendData(newData);
    setName("");
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
            setImg(value);
          }}
        />
      </div>

      <div className="mt-3 flex justify-between">
        <button className=" w-32 rounded-2xl bg-black p-3 font-bold text-white hover:bg-white hover:text-black">
          Add
        </button>

        <button
          onClick={() => setShowAddFriend(false)}
          className=" w-32 rounded-2xl bg-black p-3 font-bold text-white hover:bg-white hover:text-black"
        >
          Close
        </button>
      </div>
    </form>
  );
}

export default NewFriends;
