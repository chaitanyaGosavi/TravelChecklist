import React from "react";
import CheckListItem from "./CheckListItem";

const CheckList = ({ checkList, handleIsPackedCheckBox, handleDeleteItem }) => {
  return (
    <>
      <div className="w-full h-[80vh]">
        <div className="w-[70vw] mx-auto h-full flex flex-col flex-wrap justify-start items-start ChecklistForm gap-5 text-xl p-5">
          {checkList &&
            checkList.map((item) => {
              return <CheckListItem item={item} handleIsPackedCheckBox = {handleIsPackedCheckBox} handleDeleteItem = {handleDeleteItem}/>;
            })}
        </div>
      </div>
    </>
  );
};

export default CheckList;
