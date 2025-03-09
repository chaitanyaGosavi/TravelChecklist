import React from 'react'

const CheckListSummary = ({countTotalItems, countPackedItems}) => {
  return (
    <div className='w-full h-[10vh] flex bg-[#eedbb9] justify-center items-center ChecklistForm gap-5 text-xl p-5 CheckListSummary'>
      <p className='text-xl md:text-3xl text-[#383838]'>Your List Summary : Total Items - {countTotalItems} Packed - {countPackedItems} ({countPackedItems ?Math.round((countPackedItems *100)/countTotalItems) : 0}%)</p>
    </div>
  )
}

export default CheckListSummary
