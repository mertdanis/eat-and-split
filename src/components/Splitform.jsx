import React, { useContext, useState } from "react";
import { MainContext } from "./Context";

function Splitform() {
  const {
    selectedFriend,
    setFriendData,
    friendData,
    bill,
    setBill,
    expense,
    setExpense,
    whopays,
    setWhoPays,
  } = useContext(MainContext);

  const friendExpense = bill - expense;
  const myExpense = expense - bill;

  const handleBalance = () => {
    const updateBalance = friendData.map((friend) => {
      if (friend.name === selectedFriend.name) {
        if (whopays === "friend") {
          return { ...friend, balance: friend.balance + friendExpense };
        } else if (whopays === "you") {
          return { ...friend, balance: friend.balance + myExpense };
        }
      }

      return friend;
    });

    setFriendData(updateBalance);
  };

  return (
    <div className=" rounded-2xl bg-orange-500 p-6">
      <div className=" flex  flex-col gap-3 p-6">
        <h2 className="font-bold uppercase">
          Split a bill with {selectedFriend.name}
        </h2>
        <div className="flex justify-between">
          <i class="fa-solid fa-money-bill"></i>

          <label htmlFor="bill">Bill Value</label>
          <input
            type="number"
            id="bill"
            value={bill}
            className="w-28	"
            onChange={(e) => setBill(Number(e.target.value))}
          />
        </div>

        <div className="flex justify-between">
          <i class="fa-solid fa-wallet"></i>
          <label className="font-bold" htmlFor="yourExpense">
            Your Expense
          </label>
          <input
            type="number"
            id="yourExpense"
            value={expense}
            className="w-28"
            onChange={(e) => setExpense(Number(e.target.value))}
          />
        </div>

        <div className="flex justify-between">
          <i class="fa-solid fa-hand-holding-dollar"></i>

          <label>{selectedFriend.name}'s Expense</label>
          <input
            disabled
            type="text"
            id="friendExpense"
            className="w-28 "
            value={friendExpense}
          />
        </div>

        <div className="flex justify-between">
          <i class="fa-solid fa-people-arrows"></i>
          <label htmlFor="paidByWho">Who is paying the bill?</label>
          <select
            value={whopays}
            className="w-28"
            id="paidByWho"
            onChange={(e) => setWhoPays(e.target.value)}
          >
            <option value="you">You</option>
            <option value="friend">{selectedFriend.name}</option>
          </select>
        </div>
        <button
          onClick={handleBalance}
          className=" mt-5 w-28 rounded-2xl bg-red-500 p-3 font-bold	"
        >
          Split Bill
        </button>
      </div>
    </div>
  );
}

export default Splitform;
