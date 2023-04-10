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
    const { tableShow } = useStyles();

    return (
      <div>
        <br/>
        <span className={`center`}>
          <b>Search by:</b>
        </span>
        <br/>
        <Table striped bordered hover style={tableShow}>
          <thead>
          </thead>
          <tbody>
            <tr>
              <td>Food Type:</td>
              <td>
                <input
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
                  name="selectedApplicant"
                  value={selectedApplicant}
                  onChange={handleApplicantChange}
                  placeholder="Enter Owner Info"
                />
              </td>
            </tr>
            <tr>
              <td>Status:</td>
              <td>
                <input
                  name="selectedStatus"
                  value={selectedStatus}
                  onChange={handleStatusChange}
                  placeholder="App, Req, Exp, Susp?"
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