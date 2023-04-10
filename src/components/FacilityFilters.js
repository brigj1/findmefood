import React from 'react';
import { useStyles } from "../hooks/useStyles";
import Table from 'react-bootstrap/Table';

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
    const { tableShow, tableData } = useStyles();

    return (
      <div className={`container`}>
        <span className={`center`}>
          <b>Search by:</b>
        </span>
        <br/>
        <Table striped bordered hover style={tableShow}>
          <thead>
          </thead>
          <tbody
          style={tableData} >
            <tr>
              <td>Food Type:</td>
              <td>
                <input
                  type="text"
                  name="selectedFoodItems"
                  value={selectedFoodItems}
                  onChange={handleFoodItemsChange}
                  placeholder="Type of food you'd like?"
                />
              </td>
            </tr>
            <tr>
              <td>Facility Type:</td>
              <td>
                <input
                  type="text"
                  name="selectedFacilityType"
                  value={selectedFacilityType}
                  onChange={handleFacilityTypeChange}
                  placeholder="Truck or Push Cart?"
                />
              </td>
            </tr>
            <tr>
              <td>Applicant/Owner:</td>
              <td>
                <input
                  type="text"
                  name="selectedApplicant"
                  value={selectedApplicant}
                  onChange={handleApplicantChange}
                  placeholder="Name of the Owner/Applicant?"
                />
              </td>
            </tr>
            <tr>
              <td>Status:</td>
              <td>
                <input
                  type="text"
                  name="selectedStatus"
                  value={selectedStatus}
                  onChange={handleStatusChange}
                  placeholder="Approved, Requested, Expired, Suspended?"
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <br/><button className={`center`} onClick={initializeFilters}>Reset Filters</button>
        <br/>
      </div>
    )
}

export default FacilityFilters;