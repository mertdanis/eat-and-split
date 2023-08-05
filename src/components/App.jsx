import { useState } from "react";
import "../index.css";
import Friends from "./Friends";
import NewFriends from "./NewFriends";
import Splitform from "./Splitform";
import Header from "./Header";
import Data from "../data/Data";

import { MainContext } from "./Context";

function App() {
  const [friendData, setFriendData] = useState(Data);
  const [showaddfriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState("");

  const [bill, setBill] = useState();
  const [expense, setExpense] = useState();
  const [whopays, setWhoPays] = useState("you");

  const provideData = {
    friendData,
    setFriendData,
    selectedFriend,
    setSelectedFriend,
    friendData,
    setFriendData,
    setShowAddFriend,
    showaddfriend,
    bill,
    setBill,
    expense,
    setExpense,
    whopays,
    setWhoPays,
  };

  return (
    <>
      <Header />

      <div className=" item  mt-[5rem] flex-col items-start  justify-center gap-6 font-poppins text-black sm:flex md:flex-row ">
        <MainContext.Provider value={provideData}>
          <div className=" flex flex-col gap-3">
            <Friends />

            {!showaddfriend && (
              <button
                className="rounded-2xl bg-slate-300 p-3"
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
    </>
  );
}

export default App;
