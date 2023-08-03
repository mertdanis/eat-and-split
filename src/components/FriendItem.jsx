import React from "react";

function FriendItem({
  friend,
  selectedFriend,
  setSelectedFriend,
  setShowAddFriend,
}) {
  return (
    <div className="  flex items-center gap-3 	p-6	 text-white ">
      <img
        className="rounded-3xl	"
        src={`${friend.img}`}
        alt={`${friend.name}`}
      />
      <div>
        <p className="text-xl font-semibold">{friend.name}</p>

        {friend.balance > 0 ? (
          <p className="bg-green-500">
            {friend.name} owes you ${friend.balance}
          </p>
        ) : (
          ""
        )}

        {friend.balance < 0 ? (
          <p className="bg-red-500">
            You owe {friend.name} {friend.balance}$
          </p>
        ) : (
          ""
        )}

        {friend.balance == 0 ? <p>You and {friend.name} are even</p> : ""}
      </div>
      <button
        className="ml-5  rounded-xl bg-white p-2 font-semibold text-red-600"
        onClick={() => {
          setShowAddFriend(false);
          {
            selectedFriend.name == friend.name
              ? setSelectedFriend("")
              : setSelectedFriend(friend);
          }
        }}
      >
        Select
      </button>
    </div>
  );
}

export default FriendItem;
