import { Constants } from '../../constants';
import { UiData } from '../../types'
import { getSite } from '../api';
import { SilexNotification } from '../utils/Notification';

export function onChangeUi(prev: UiData, ui: UiData) {
  if (ui.mobileEditor) {
    document.body.classList.add(Constants.MOBILE_MODE_CSS_CLASS);
    if (!getSite().enableMobile) {
      SilexNotification.alert('Mobile editor warning', `
        Warning: you are entering the mobile editor, but your website is not configured to support it,
        so you need to open the menu "File", then "Settings" and "Enable mobile version".
      `, () => {});
    }
  } else {
    document.body.classList.remove(Constants.MOBILE_MODE_CSS_CLASS);
  }
  if (ui.loading) {
    document.body.classList.add('loading-pending');
  } else {
    document.body.classList.remove('loading-pending');
  }
}
