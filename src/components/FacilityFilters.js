import React from 'react';

const FacilityFilters = ({
  handleFoodItemsChange,
  handleFacilityTypeChange,
  handleApplicantChange,
  handleStatusChange,

  selectedFoodItems,
  selectedFacilityType,
  selectedApplicant,
  selectedStatus,

  initializeFilters
}) => {

    return (
      <div>
        <br/>
        <b>Filter by:</b>
        <br/>Food Type: <input
            name="selectedFoodItems"
            value={selectedFoodItems}
            onChange={handleFoodItemsChange}
            placeholder="Type of food you'd like?"
          />
        <br/>Facility Type: <input
            name="selectedFacilityType"
            value={selectedFacilityType}
            onChange={handleFacilityTypeChange}
            placeholder="Truck or Push Cart?"
          />
        <br/>Applicant/Owner: <input
            name="selectedApplicant"
            value={selectedApplicant}
            onChange={handleApplicantChange}
            placeholder="Enter Owner Info"
          />
        <br/>Status: <input
            name="selectedStatus"
            value={selectedStatus}
            onChange={handleStatusChange}
            placeholder="App, Req, Exp, Susp?"
          />
        <br/><button onClick={initializeFilters}>Reset Filters</button>
      </div>
    )
}

export default FacilityFilters;