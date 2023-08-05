import React, { useContext, useEffect, useState } from "react";
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

  const [totalBalance, setTotalBalance] = useState(13);

  const handleTotal = () => {
    const totalBalance = friendData.reduce((total, item) => {
      return total + item.balance;
    }, 0);

    setTotalBalance(totalBalance);
  };

  useEffect(() => {
    reset();
  }, [selectedFriend]);

  useEffect(() => {
    handleTotal();
  }, [friendData]);

  let key = self.crypto.randomUUID();

  return (
    <div className="h-[27rem]  overflow-auto">
      <div
        className=" flex flex-col gap-4 rounded-2xl bg-slate-300	 p-6"
        key={key}
      >
        <p className="block text-center text-2xl font-bold">Friends</p>
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

        <p className="rounded-2x flex items-center justify-center rounded-2xl bg-slate-200 p-3">
          Your total balance is:{" "}
          <span
            className={`${
              totalBalance > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            ${totalBalance}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Friends;
