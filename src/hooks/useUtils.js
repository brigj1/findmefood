import { useTranslation } from "react-i18next";

export function useLookups() {
  const { t } = useTranslation();

  function lookup_status ({
    status,
  }) {
    switch (status) {
      case  0: return t('facility.status.optionValue0');  // 'Approved'
      case  1: return t('facility.status.optionValue1');  // 'Requested'
      case  2: return t('facility.status.optionValue2');  // "Expired",
      case  3: return t('facility.status.optionValue3');  // "Suspended",
      default: return t('facility.status.optionValue0');  // 'Other'
    }
  };

  function getMapUrlByLatLon ({
    latitude,
    longitude,
  }) {
    if (parseFloat(latitude) > 35 && parseFloat(longitude) < -100) {
      const url = 'http://maps.google.com/maps?q='
        + latitude
        + ','
        + longitude
        + '&ll='
        + latitude
        + ','
        + longitude
        + '&z=17';
      // e.g. http://maps.google.com/maps?q=35.128061,-106.535561&ll=35.126517,-106.535131&z=17
      return url;
    }
    else {
      return null
    }
  }

  //function useLookups()
  return {
    getMapUrlByLatLon,
    lookup_status
  }
}