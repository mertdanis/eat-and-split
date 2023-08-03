import { useState } from "react";
import "../index.css";
import Friends from "./Friends";
import NewFriends from "./NewFriends";
import Splitform from "./Splitform";

import Data from "../data/Data";

import { MainContext } from "./Context";

function App() {
  const [friendData, setFriendData] = useState(Data);
  const [showaddfriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState("");

  const [bill, setBill] = useState(0);
  const [expense, setExpense] = useState(0);
  const [whopays, setWhoPays] = useState("you");

  const provideData = {
    friendData,
    setFriendData,
    selectedFriend,
    setSelectedFriend,
    friendData,
    setFriendData,
    setShowAddFriend,
    bill,
    setBill,
    expense,
    setExpense,
    whopays,
    setWhoPays,
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center gap-6 bg-orange-50 text-black">
      <MainContext.Provider value={provideData}>
        <div className="flex flex-col gap-6">
          <Friends />

          {!showaddfriend && (
            <button
              className="bg-orange-500 p-3"
              onClick={() => setShowAddFriend(!showaddfriend)}
            >
              Add new friend
            </button>
          )}

          {showaddfriend && <NewFriends />}
        </div>
        {selectedFriend && <Splitform />}
      </MainContext.Provider>
    </div>
  );
}

export default App;
