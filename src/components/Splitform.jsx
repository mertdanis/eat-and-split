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
    setSelectedFriend,
    showaddfriend,
  } = useContext(MainContext);

  const friendExpense = bill - expense;

  const handleBalance = () => {
    const updateBalance = friendData.map((friend) => {
      if (friend.name === selectedFriend.name) {
        if (whopays === "friend") {
          return {
            ...friend,
            balance: friend.balance - expense,
          };
        } else if (whopays === "you") {
          return { ...friend, balance: friend.balance + friendExpense };
        }
      }

      return friend;
    });

    setFriendData(updateBalance);
  };

  return (
    <div className=" m-4 flex rounded-2xl bg-slate-300  p-6  text-xl sm:m-0	 sm:mt-0 sm:p-0 ">
      <div className=" flex flex-col justify-start  gap-3 p-6  sm:gap-4">
        <h2 className="mb-5 mt-2 text-center font-bold uppercase tracking-widest">
          Split a bill with {selectedFriend.name}
        </h2>
        <div className="flex items-center justify-between ">
          <div className="space-x-3">
            <i class="fa-solid fa-money-bill"></i>
            <label htmlFor="bill">Bill Value</label>
          </div>
          <input
            type="number"
            id="bill"
            min={0}
            value={!bill ? "" : bill}
            className="w-28 rounded-2xl p-1 text-center	[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            onChange={(e) => setBill(Number(e.target.value))}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-x-3">
            <i class="fa-solid fa-wallet"></i>
            <label className="font-bold" htmlFor="yourExpense">
              Your Expense
            </label>
          </div>
          <input
            type="number"
            id="yourExpense"
            min={0}
            value={expense <= bill ? expense : setExpense(0)}
            className="w-28 rounded-2xl p-1 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            onChange={(e) => setExpense(Number(e.target.value))}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-x-3">
            <i class="fa-solid fa-hand-holding-dollar"></i>

            <label>{selectedFriend.name}'s Expense</label>
          </div>
          <input
            disabled
            type="text"
            id="friendExpense"
            className="w-28 rounded-2xl p-1 text-center"
            value={bill && expense ? friendExpense : ""}
          />
        </div>

        <div className="mb-6 flex items-center justify-between gap-6">
          <div className="space-x-3">
            <i class="fa-solid fa-people-arrows"></i>
            <label htmlFor="paidByWho">Who is paying the bill?</label>
          </div>

          <div>
            <select
              value={whopays}
              className="w-28 rounded-2xl p-1 text-center"
              id="paidByWho"
              onChange={(e) => setWhoPays(e.target.value)}
            >
              <option value="you">You</option>
              <option value="friend">{selectedFriend.name}</option>
            </select>
          </div>
        </div>

        <div className="mt-auto flex justify-between">
          <button
            onClick={handleBalance}
            className=" w-28 rounded-2xl bg-black  p-3 font-bold	text-white transition hover:bg-white hover:text-black"
          >
            Split Bill
          </button>

          <button
            onClick={() => setSelectedFriend(false)}
            className="mt-auto w-28 rounded-2xl bg-black  p-3 font-bold	text-white transition hover:bg-white hover:text-black"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Splitform;
