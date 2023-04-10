import React, {useState} from 'react';
import { useStyles } from "../hooks/useStyles";

import FacilityLink from '../components/FacilityLink'
import FacilityFilters from '../components/FacilityFilters'
//import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
//import Tippy from '@tippyjs/react';
//import 'tippy.js/dist/tippy.css';
//import { useTranslation } from "react-i18next";

const Facilities = ({facilities}) => {
  const { tableShow } = useStyles();
  //const { t } = useTranslation();

  function sortFacilities( a, b )
  {
    if ( a.blocklot < b.blocklot ){
        return -1;
    }
    if ( a.blocklot > b.blocklot ){
      return 1;
    }
    if ( a.objectid < b.objectid ){
        return -1;
    }
    if ( a.objectid > b.objectid ){
      return 1;
    }
    return 0;
  }

  // TODO: probably not needed
  function facilities_exist(array) {
    if (array.length > 0) {
      return true
    }
    return false
  }

  const [selectedFoodItems, setSelectedFoodItems]       = useState('');
  const [selectedFacilityType, setSelectedFacilityType] = useState('');
  const [selectedApplicant, setSelectedApplicant]       = useState('');
  const [selectedStatus, setSelectedStatus]             = useState('');
  
  console.log('facilities', facilities);
  const facilitiesList =
      facilities_exist(facilities)
      ?
        facilities
          // keep facility if filter is unset (''), else keep if matches user's input
          .filter(facility => selectedFoodItems === ''    || facility.fooditems)
          .filter(facility => selectedFoodItems === ''    || facility.fooditems.toLowerCase().includes(selectedFoodItems.toLowerCase()) )

          .filter(facility => selectedFacilityType === '' || facility.facilitytype === Number(selectedFacilityType) ) 

          .filter(facility => selectedApplicant === ''    || facility.applicant)
          .filter(facility => selectedApplicant === ''    || facility.applicant.toLowerCase().includes(selectedApplicant.toLowerCase()) )

          .filter(facility => selectedStatus === ''       || facility.status === Number(selectedStatus) ) 
          .sort( sortFacilities )
          .map(facility => {
            return <FacilityLink key={facility.objectid} facility = { facility } />
          })
      : null;

  function handleFoodItemsChange(e)    { setSelectedFoodItems(e.target.value) }
  function handleFacilityTypeChange(e) { setSelectedFacilityType(e.target.value) }
  function handleApplicantChange(e)    { setSelectedApplicant(e.target.value) }
  function handleStatusChange(e)       { setSelectedStatus(e.target.value) }

  function initializeFilters() {
    setSelectedFoodItems('');
    //setSelectedFacilityType('');
    setSelectedFacilityType(0);
    setSelectedApplicant('');
    //setSelectedStatus('');
    setSelectedStatus(0);
  }

  console.log('fl_', facilitiesList);
  return (
    <div>
      <h3>Facilities:</h3>
      <FacilityFilters
        handleFoodItemsChange    = {handleFoodItemsChange}
        handleFacilityTypeChange = {handleFacilityTypeChange}
        handleApplicantChange    = {handleApplicantChange}
        handleStatusChange       = {handleStatusChange}
        initializeFilters = {initializeFilters}
      />
      {
        facilitiesList
          ? <Table striped bordered hover style={tableShow}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Applicant</th>
                  <th>Facility Type</th>
                  <th>Address</th>
                  <th>Status</th>
                  <th>Food Items</th>
                  <th>Days/Hours</th>
                  {/* <th>Blocklot</th> */}
                </tr>
              </thead>
              <tbody>
                {facilitiesList}
              </tbody>
            </Table>
          : <p>
              No Facilities available
            </p>
      }
    </div>
  )
}


export default Facilities;