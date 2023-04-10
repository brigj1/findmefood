import React from 'react';

const FacilityFilters = ({
  handleFoodItemsChange,
  handleFacilityTypeChange,
  handleApplicantChange,
  handleStatusChange,

  initializeFilters
}) => {

    return (
      <div>
        <br/>
        <b>Filter by:</b>
        <br/>Food Type <input onChange={handleFoodItemsChange} placeholder="What type of food would you like?"/>
        <br/>
        Facility Type&nbsp;
          <select name="filter" onChange={handleFacilityTypeChange}>
            <option value="">Show all</option>
            <option value="0" >Truck</option>
            <option value="1" >Push Cart</option>
            <option value="2" >Not Listed</option>
          </select>   
        <br/>Applicant/Owner <input onChange={handleApplicantChange} placeholder="Enter Owner Info"/>
        <br/>
        Status&nbsp;
          <select name="filter" onChange={handleStatusChange}>
            <option value="">Show all</option>
            <option value="0" >Approved</option>
            <option value="1" >Requested</option>
            <option value="2" >Expired</option>
            <option value="3" >Suspended</option>
          </select>
        <br/><button onClick={initializeFilters}>Reset Filters</button>
      </div>
    )
}
            // <option value="0" >{ t('facility.facilitytype.optionValue0')  }</option>  {/* 'Truck' */}
            // <option value="1" >{ t('facility.facilitytype.optionValue1')  }</option>  {/* 'Push Cart' */}
            // <option value="2" >{ t('facility.facilitytype.optionValue2')  }</option>  {/* 'Not Listed' */}

            // <option value="0" >{ t('facility.status.optionValue0')  }</option>  {/* 'Approved' */}
            // <option value="1" >{ t('facility.status.optionValue1')  }</option>  {/* 'Requested' */}
            // <option value="2" >{ t('facility.status.optionValue2')  }</option>  {/* 'Expired' */}
            // <option value="3" >{ t('facility.status.optionValue3')  }</option>  {/* 'Suspend' (or Suspended?) */}

export default FacilityFilters;