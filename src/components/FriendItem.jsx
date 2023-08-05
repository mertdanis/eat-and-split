import React from "react";

function FriendItem({
  friend,
  selectedFriend,
  setSelectedFriend,
  setShowAddFriend,
}) {
  return (
    <div className="gap-3 text-black">
      <div
        className={`flex items-center gap-5 rounded-2xl p-2 ${
          selectedFriend.name == friend.name
            ? "bg-slate-200 text-black"
            : "bg-white-500"
        }`}
      >
        <img
          className="h-12 w-12 rounded-3xl	 object-cover"
          src={`${friend.img}`}
          alt={`${friend.name}`}
        />

        <div>
          <p className="text-xl font-semibold capitalize">{friend.name}</p>

          <div className="mt-1">
            {friend.balance > 0 ? (
              <p className="text-green-600	">
                {friend.name} owes you ${friend.balance}
              </p>
            ) : (
              ""
            )}

            {friend.balance < 0 ? (
              <p className="text-red-500">
                You owe {friend.name} {friend.balance}$
              </p>
            ) : (
              ""
            )}

            {friend.balance == 0 ? (
              <p>
                You and <span className="capitalize">{friend.name}</span> are
                even
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <button
          className="ml-auto  rounded-xl bg-black  p-2  font-semibold text-white hover:bg-white hover:text-black"
          onClick={() => {
            console.log(friend);
            {
              selectedFriend.name == friend.name
                ? setSelectedFriend("")
                : setSelectedFriend(friend);
            }
          }}
        >
          {friend.name === selectedFriend.name ? "Close" : "Select"}
        </button>
      </div>
    </div>
  );
}

export default FriendItem;
