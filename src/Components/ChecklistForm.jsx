import React from "react";

const ChecklistForm = ({ addItemBtnHandler }) => {
  return (
    <div className="w-full h-[60vh] md:h-full bg-[#d1c3a9] ChecklistForm text-xl flex flex-col justify-center items-center gap-y-10">
      <div className="w-[90%] h-auto flex flex-col justify-center items-start gap-5 mx-10 bg-[#7bb97d78] p-5 rounded-lg">
        <p className="text-xl text-[#243625]">
          Pack your Travel Essentials here 📃
        </p>
        Item:{" "}
        <input
          type="text"
          id="itemDescIp"
          className="w-[70%] h-[40px] bg-[#FFF4E0] rounded-lg text-center"
        />
        Quantity:{" "}
        <input
          type="number"
          id="itemQtyIp"
          className="w-[120px] h-[30px] bg-[#FFF4E0] rounded-lg text-center"
        />
      </div>
      <button
        className="w-[150px] md:w-[250px] h-[40px] mx-auto bg-[#6eaa73] rounded-lg text-center hover:bg-[#6db38f]"
        onClick={addItemBtnHandler}
      >
        Add Item
      </button>
    </div>
  );
};

export default ChecklistForm;
