import React, { useContext, useEffect } from "react";
import { MainContext } from "./Context";
import FriendItem from "./FriendItem";

function Friends() {
  const {
    friendData,
    selectedFriend,
    setSelectedFriend,
    setShowAddFriend,
    setBill,
    setExpense,
    setWhoPays,
  } = useContext(MainContext);

  const reset = () => {
    setBill(0), setExpense(0), setWhoPays("you");
  };

  useEffect(() => {
    reset();
  }, [selectedFriend]);

  return (
    <div className="	flex flex-col items-center gap-6">
      <p className="block text-2xl font-bold">Friends</p>
      <div className="rounded-xl bg-orange-500">
        {friendData.map((friend) => {
          return (
            <FriendItem
              friend={friend}
              selectedFriend={selectedFriend}
              setSelectedFriend={setSelectedFriend}
              setShowAddFriend={setShowAddFriend}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Friends;
