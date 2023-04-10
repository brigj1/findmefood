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

  //function useLookups()
  return {
    lookup_status
  }
}