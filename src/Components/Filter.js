import React from 'react'

const Filter = ({ handleTitleFilter, handleRateFilter }) => {
  return (
    <div className="filter">
      <label htmlFor="title-filter">Title:</label>
      <input id="title-filter" type="text" onChange={handleTitleFilter} />
      <label htmlFor="rate-filter">Rating:</label>
      <input
        id="rate-filter"
        type="range"
        min="0"
        max="10"
        step="0.5"
        onChange={handleRateFilter}
      />
    </div>
  )
}

export default Filter;