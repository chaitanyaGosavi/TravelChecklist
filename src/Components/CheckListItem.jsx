import React from 'react'

const CheckListItem = ({item, handleIsPackedCheckBox, handleDeleteItem}) => {
  return(
    <div className='flex justify-between items-start gap-2 text-xl bg-[#d7d2b7] p-2 rounded-lg CheckListItem w-auto max-w-[240px]'>
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
