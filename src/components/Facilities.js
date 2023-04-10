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
          .map(facility => {
            const new_facil = { ...facility,
              fooditems:    facility.fooditems    == null ? '' : facility.fooditems,
              facilitytype: facility.facilitytype == null ? '' : facility.facilitytype,
              applicant:    facility.applicant    == null ? '' : facility.applicant,
              status:       facility.status       == null ? '' : facility.status
            }
            return new_facil;
          })

          // keep facility if filter is unset (''), else keep if matches user's input
          // TODO: refactor the 'includes' part into a function
          .filter(facility => selectedFoodItems === ''    || facility.fooditems.toLowerCase().includes(selectedFoodItems.toLowerCase()) )
          .filter(facility => selectedFacilityType === '' || facility.facilitytype.toLowerCase().includes(selectedFacilityType.toLowerCase()) )
          .filter(facility => selectedApplicant === ''    || facility.applicant.toLowerCase().includes(selectedApplicant.toLowerCase()) )
          .filter(facility => selectedStatus === ''       || facility.status.toLowerCase().includes(selectedStatus.toLowerCase()) )
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
    setSelectedFacilityType('');
    setSelectedApplicant('');
    setSelectedStatus('');
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

        selectedFoodItems    = { selectedFoodItems }
        selectedFacilityType = { selectedFacilityType }
        selectedApplicant    = { selectedApplicant }
        selectedStatus       = { selectedStatus }

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