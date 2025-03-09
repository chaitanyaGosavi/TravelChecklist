import React from 'react'

const CheckListItem = ({item, handleIsPackedCheckBox, handleDeleteItem}) => {
  return(
    <div className='flex justify-center items-center gap-2 text-xl bg-[hsl(60,26%,64%)] p-2 rounded-lg CheckListItem'>
      <input className='w-7 h-7 rounded-md' type="checkbox" onChange={function (params) {
        handleIsPackedCheckBox(item);
      }}/>
      <h1 className={`text-[#343434] ${item.isPacked ? 'line-through' : ''}`}>{item.itemQty} {item.itemDesc}</h1>
      <button onClick={function (params) {
        handleDeleteItem(item)
      }}>❌</button>
    </div>
  )
}

export default CheckListItem
