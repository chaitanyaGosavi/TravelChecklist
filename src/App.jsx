import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeaderLogo from "./Components/HeaderLogo";
import ChecklistForm from "./Components/ChecklistForm";
import CheckList from "./Components/CheckList";
import CheckListSummary from "./Components/CheckListSummary";

function App() {
  const [checkList, setCheckList] = useState([]);

  const countTotalItems = checkList.length;
  const countPackedItems = (checkList && checkList.length > 0) ? checkList.reduce((count, item) =>( item.isPacked ? count+1 : count), 0) : 0;

  const handleIsPackedCheckBox = (item) =>{
    setCheckList((prevCheckList) => prevCheckList.map((prevItem) => prevItem.id === item.id ? {...prevItem, 'isPacked' : !prevItem.isPacked} : prevItem));
  }

  const handleDeleteItem = (item) =>{
    setCheckList((prevCheckList) => prevCheckList.filter((prevItem) => {
      if (prevItem.id !== item.id) {
        return prevItem;
      }
    }));
  }

  const handleClearCheckList = () => {
    setCheckList([]);
  }

  const addItemBtnHandler = () => {
    const itemDesc = document.getElementById('itemDescIp').value;
    const itemQty =  Number(document.getElementById('itemQtyIp').value);
    if (itemDesc && itemQty) {
      let itemObj = {
        'itemDesc': itemDesc,
        'itemQty' : itemQty,
        'isPacked' : false,
        'id' : Date.now()
      }
      setCheckList((prevCheckList) => [...prevCheckList, itemObj]);
    }else{
      alert("Please Add Item description and quantity")
    }

  }

  return (
    <>
      <div className="w-screen h-screen md:flex">
          <ChecklistForm addItemBtnHandler = {addItemBtnHandler} />
        <div className="flex flex-col h-[40vh] md:h-full bg-[#fff3d6] ">
        <HeaderLogo />
          <div className="h-full">
            <CheckList 
            checkList = {checkList} 
            handleIsPackedCheckBox = {handleIsPackedCheckBox} 
            handleDeleteItem = {handleDeleteItem}
            handleClearCheckList = {handleClearCheckList}/>
            <CheckListSummary countTotalItems = {countTotalItems} countPackedItems = {countPackedItems}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
