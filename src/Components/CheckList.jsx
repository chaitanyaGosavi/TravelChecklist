import React, { useState } from "react";
import CheckListItem from "./CheckListItem";

const CheckList = ({ checkList, handleIsPackedCheckBox, handleDeleteItem, handleClearCheckList }) => {

  return (
    <>
      <div className="w-full h-[30vh] md:h-[80vh]">
        <div className="w-[70vw] mx-auto h-full flex flex-wrap justify-between items-start ChecklistForm">
          <div className="w-full h-2/3 flex flex-col flex-wrap gap-5 text-xl p-5">
            {checkList &&
              checkList.map((item) => {
                return (
                  <CheckListItem
                    item={item}
                    handleIsPackedCheckBox={handleIsPackedCheckBox}
                    handleDeleteItem={handleDeleteItem}
                  />
                );
              })}
          </div>

          <div className="Action-Buttons flex w-full h-1/3 p-5 justify-evenly items-center mx-auto">
            <button className="w-[150px] md:w-[250px] h-[40px] bg-[#d46b3a] rounded-lg text-center hover:bg-[#e0713d]"
            onClick={handleClearCheckList}>
              Clear List
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckList;
