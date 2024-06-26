import AboutAppIcon from 'assets/images/icons/aboutApp.svg';
import PrivacyPolicyIcon from 'assets/images/icons/privacyPolicy.svg';
import TcIcon from 'assets/images/icons/t&c.svg';

import appStyles from 'assets/AppStyles';

export const aboutApp = (
  <AboutAppIcon width="30" height="30" fill={appStyles.colour.purpleGray} />
);
export const privacyPolicy = (
  <PrivacyPolicyIcon
    width="30"
    height="30"
    fill={appStyles.colour.purpleGray}
  />
);
export const tc = (
  <TcIcon width="30" height="30" fill={appStyles.colour.purpleGray} />
);

export const aboutList = [
  {
    page: 'About App',
    icon: aboutApp,
  },
  {
    page: 'Terms & Conditions',
    icon: tc,
  },
  {
    page: 'Privacy Policy',
    icon: privacyPolicy,
  },
];
