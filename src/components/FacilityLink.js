import React from 'react';
//import { Link } from 'react-router-dom';

import { useLookups } from "../hooks/useUtils";
//import Tippy from '@tippyjs/react';
//import 'tippy.js/dist/tippy.css';
//import { useTranslation } from "react-i18next";
export const FacilityLink = ( {facility} ) => {

  const { getMapUrlByLatLon } = useLookups();
  //const { lookup_status } = useLookups();
  //const { t } = useTranslation();

  if (facility) {
  console.log('facilityX', facility)
  } else {
    return 
  }


// address : "100 SPEAR ST"
// applicant : "Zuri Food Facilities"
// approved : "2023-03-29T00:00:00.000"
// block : "3717"
// blocklot : "3717001"
// cnn : "12045000"
// expirationdate : "2023-11-15T00:00:00.000"
// facilitytype : "Truck"
// fooditems : "Peruvian Food Served Hot"
// latitude : "37.792150548481686"
// location : {latitude: '37.792150548481686', longitude: '-122.39399997405945', human_address: '{"address": "", "city": "", "state": "", "zip": ""}'}
// locationdescription : "SPEAR ST: MISSION ST to HOWARD ST (100 - 199)"
// longitude : "-122.39399997405945"
// lot : "001"
// objectid : "1684001"
// permit : "23MFF-00003"
// priorpermit : "0"
// received : "20230316"
// schedule : "http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=23MFF-00003&ExportPDF=1&Filename=23MFF-00003_schedule.pdf"
// status : "APPROVED"


// address : "5 THE EMBARCADERO"
// applicant : "Ziaurehman Amini"
// blocklot : "0234017"
// cnn : "30727000"
// expirationdate : "2016-03-15T00:00:00.000"
// facilitytype : "Push Cart"
// fooditems : "Peruvian Food Served Hot"
// latitude : "37.794331003246846"
// location : {latitude: '37.794331003246846', longitude: '-122.39581105302317', human_address: '{"address": "", "city": "", "state": "", "zip": ""}'}
// locationdescription : "MARKET ST: DRUMM ST intersection"
// longitude : "-122.39581105302317"
// objectid : "735318"
// status : "REQUESTED"


  const facility_address = getMapUrlByLatLon({
        latitude: facility.latitude,
        longitude: facility.longitude,
  })

  // Facility Details
  return (
    <tr>
      <td>{facility.objectid}</td>
      <td>{facility.applicant}</td>
      <td>{facility.facilitytype}</td>
      <td>{ facility_address
        ? <a href={facility_address}
            target="_blank" rel="noopener noreferrer">{facility.address}</a>
        : facility.address
      }</td>
      
      {/* <td>{facility.locationdescription}</td> */}
      <td>{facility.status}</td>
      <td>{facility.fooditems}</td>
      <td>{facility.dayshours}</td>

      {/* <td>{facility.objectid}</td>
      <td>{facility.applicant}</td>
      <td>{facility.facilitytype}</td>
      <td>{facility.address}</td>
      <td>{facility.status}</td>
      <td>{facility.fooditems}</td>
      <td>{facility.dayshours}</td> */}
      {/* <td>{facility.locationdescription}</td> */}

      {/* <td>{facility.blocklot}</td> */}
      {/* <td>
        <Tippy content= { toHmmA({timeString: trip.hour}) } >
          <span>{ toMmmDdYyyy({dateString: trip.day}) }</span>
        </Tippy>
      </td>
      <td><Link to={`/trips/${trip.id}`}>{ trip.label }</Link></td> */}
    </tr>
  )
}

export default FacilityLink