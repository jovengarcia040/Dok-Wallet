import {View, Linking, useWindowDimensions} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './PrivacyPolicyComponentStyles';
import RenderHtml from 'react-native-render-html';

const source1 = {
  html: `<ul style="list-style-type: circle; font-size: 12px;">
  <li style="margin-left: 12px">to allow you to use and interact with the Site;</li>
  <li style="margin-left: 12px">to provide the Services to you as our customer;</li>
  <li style="margin-left: 12px">to inform our continued development of the Site and the Services;</li>
  <li style="margin-left: 12px">to communicate with you from time to time in response to your requests for information or as may be relevant to your account with us;</li>
  <li style="margin-left: 12px">to send marketing communications related to the services we provide;</li>
  <li style="margin-left: 12px">as required by applicable law or legal requirements pertaining to records retention or for internal administrative purposes; or</li>
  <li style="margin-left: 12px">as specifically authorized by you in writing.</li>
</ul>`,
};

const source2 = {
  html: `<ul style="list-style-type: circle; font-size: 12px;">
  <li style="margin-left: 12px">when we believe disclosure is reasonably required to comply with any law or legal request;</li>
  <li style="margin-left: 12px">to enforce our legal and contractual rights, or to protect the rights and safety of others;</li>
  <li style="margin-left: 12px">to third parties who help us provide any part of the Site or the Services, to the limited extent required for such help, and on condition that they may not further disclose your data or use it for any other purpose; or</li>
  <li style="margin-left: 12px">as part of a sale of our assets or a merger of our company.</li>
</ul>`,
};

const PrivacyPolicyComponent = () => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={styles.border} />
      <View style={styles.page}>
        <View style={styles.titlesContainer}>
          <Text style={styles.h1}>Privacy Policy</Text>
        </View>
        <Text style={styles.content}>
          The purpose of this Privacy Policy is to inform you of our practices
          with regard to personal data we collect from or about you in
          connection with our web site and/or mobile app which can be accessed
          at{' '}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://dokwallet.com/')}>
            dokwallet.com
          </Text>
          , Google play and/or Apple store (the “Site”). We may update this
          Privacy Policy from time to time in our sole discretion; the current
          version may be found at{' '}
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL('https://dokwallet.com/privacypolicy.html')
            }>
            Privacy Policy
          </Text>
          . By using the Site or the Services you acknowledge your consent to
          the practices described herein.
        </Text>
        <View style={styles.titlesContainer}>
          <Text style={styles.h2}>1. PERSONAL DATA WE COLLECT</Text>
        </View>
        <View style={styles.titlesContainer}>
          <Text style={styles.h3}> 1.1. Information you give us</Text>
        </View>
        <Text style={styles.content}>
          In order for you to use our Services and other features of our Site,
          we will ask you for some of your personal data (e.g. contact
          information, name, etc.). The amount and type of information that we
          gather depends on the nature of the interaction. Those who purchase
          Services from us are asked to provide additional information
          including, as necessary, the personal and financial information
          required to process transactions. In each case, we collect such
          information only insofar as is necessary or appropriate to fulfill the
          purpose of your interaction with us. You can always refuse to supply
          personal data; however, doing so may prevent you from receiving our
          Services or engaging in other activities on the Site. In no event will
          we ever request sensitive personal data (e.g. health information,
          religious preferences, etc.) from you, and we expressly request that
          you not provide any such sensitive personal data to us.
        </Text>
        <View style={styles.titlesContainer}>
          <Text style={styles.h3}>1.2. Web service log</Text>
        </View>
        <Text style={styles.content}>
          As is true of most websites, we gather certain information
          automatically through your use of the Site. This information may
          include Internet protocol (IP) addresses, browser type, Internet
          service provider (ISP), referring or exit pages, the files viewed on
          the Site (e.g., HTML pages, graphics, etc.), operating system,
          date/time stamp, and clickstream data to analyze trends in the
          aggregate and administer the site. We use analytical software to help
          us understand this information. This software sends information to its
          licensor. Other sites and companies may also use this software.
        </Text>
      </View>
      <View style={styles.border} />
      <View style={styles.page}>
        <Text style={styles.content}>
          As a result, the licensor may collect information that, when
          aggregated by them, allows them to identify you individually. We have
          no responsibility for this collection and use.
        </Text>
        <View style={styles.titlesContainer}>
          <Text style={styles.h3}> 1.3. Cookies</Text>
        </View>
        <Text style={styles.content}>
          We use cookies and similar technologies to analyze trends, administer
          the Site, track users’ movements around the Site, and gather
          demographic information about our user base as a whole. You can
          control the use of cookies at the individual browser level. Ads
          appearing on our Site may be delivered to you by advertising partners
          who may set cookies. These cookies allow the ad server to recognize
          your computer each time they send you an online advertisement to
          compile information about you or others who use your computer. This
          information allows ad networks to, among other things, deliver
          targeted advertisements that they believe will be of most interest to
          you. This Privacy Policy covers our use of cookies and does not cover
          the use of cookies by any advertisers. However, data tracking files
          used by us may also be used by these advertisers and, when combined
          with other information held by them, be used to identify you
          personally. For more information on third party cookies and
          instructions on how to opt-out of those cookies set by members of the
          National Advertising Initiative, please{' '}
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL('https://optout.networkadvertising.org/?c=1')
            }>
            click here
          </Text>
          . Or, if you are located in the European Union, please visit the
          European Interactive Digital Advertising Alliance{' '}
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL('https://www.youronlinechoices.com/')
            }>
            here
          </Text>
          .
        </Text>
        <View style={styles.titlesContainer}>
          <Text style={styles.h3}>
            1.4. Information collected by our customers
          </Text>
        </View>
        <Text style={styles.content}>
          Our customers may collect personal data in connection with the
          Services we provide to them. Our customers control the personal data
          they collect, and we will not use or disclose that personal data
          except as authorized or directed by the customer in the course of our
          provision of the Services. If your personal data is controlled by one
          of our customers and you have concerns about the way that data is
          managed, please contact that customer directly.
        </Text>
        <View style={styles.titlesContainer}>
          <Text style={styles.h2}>2. HOW WE USE PERSONAL DATA</Text>
        </View>
        <Text style={styles.content}>
          We will only use the personal data we collect as reasonably necessary
          for the following purposes:
        </Text>
      </View>
      <View style={styles.border} />
      <View style={styles.page}>
        <View style={styles.list}>
          <RenderHtml source={source1} contentWidth={width} />
        </View>
        <View style={styles.titlesContainer}>
          <Text style={styles.h2}>3. DISCLOSURE TO THIRD PARTIES</Text>
        </View>
        <Text style={styles.content}>
          We remain responsible for compliance with this Privacy Policy by third
          parties to whom we disclose your personal data. We will not disclose
          your personal data to third parties except as follows:
        </Text>
        <View style={styles.list}>
          <RenderHtml source={source2} contentWidth={width} />
        </View>
        <View style={styles.titlesContainer}>
          <Text style={styles.h2}>4. PROCEDURES TO PROTECT PERSONAL DATA</Text>
        </View>
        <Text style={styles.content}>
          4.1. We have put in place reasonable measures and appropriate
          procedures for implementing these policies and for safeguarding the
          personal data we collect. However, we cannot guarantee that personal
          data we collect will never be disclosed in a manner inconsistent with
          this Privacy Policy.
        </Text>
        <Text style={styles.content}>
          4.2. We follow generally accepted standards to protect the personal
          data submitted to us, both during transmission and once it is
          received.
        </Text>
      </View>
      <View style={styles.border} />
      <View style={styles.page}>
        <View style={styles.titlesContainer}>
          <Text style={styles.h2}>
            5. YOUR RIGHTS OVER PERSONAL DATA THAT WE CONTROL
          </Text>
        </View>
        <Text style={styles.content}>
          5.1. Upon request, we will provide you with details regarding your
          personal data that has been collected by us or which is under our
          control. If you would like to change information that we maintain
          about you, you may log into your account and change it or submit a
          support request for any information to which you don’t have access or
          the ability to change yourself. Information covered by this Privacy
          Policy may be deleted upon your request, provided that such deletion
          may impact our ability to provide you with the Services. You may also
          request that we update or correct your personal data by writing us at:
          International House, 12 Constance Street, London, E16 2DQ.
        </Text>
        <Text style={styles.content}>
          5.2. You may opt-out of receiving most e-mails from us by following
          the “unsubscribe” instructions provided in the e-mails. Alternatively,
          you may contact us as described herein. If you are our customer, you
          may not be able to opt out of all emails, including certain
          administrative or billing communications which are important to the
          ongoing maintenance of your account.
        </Text>
        <Text style={styles.content}>
          5.3. We may keep your personal data for as long as reasonably required
          to meet the purposes described herein. Additionally, we will retain
          this information as required by law, as necessary to comply with our
          legal obligations, resolve disputes, and enforce our agreements.
        </Text>
        <View style={styles.titlesContainer}>
          <Text style={styles.h2}>6. GENERAL DATA PROTECTION REGULATION</Text>
        </View>
        <Text style={styles.content}>
          6.1. The General Data Protection Regulation (GDPR) (
          https://www.eugdpr.org/) is the toughest privacy and security law in
          the world. Though it was drafted and passed by the European Union
          (EU), it imposes obligations onto organizations anywhere, so long as
          they target or collect data related to people in the EU. The
          regulation was put into effect on May 25, 2018. The GDPR will levy
          harsh fines against those who violate its privacy and security
          standards, with penalties reaching into the tens of millions of euros.
        </Text>
        <Text style={styles.content}>
          6.2. In relation to the GDPR (General Data Protection Regulation) and
          other applicable legal acts Vivo Mirror will process the data provided
          in this online application and any other data which you subsequently
          give to us in any manner in order to fulfill the agreements between
          customer and Vivo Mirror, for the following purposes:
        </Text>
      </View>
      <View style={styles.border} />
      <View style={styles.page}>
        <Text style={styles.content}>
          6.3. To provide, develop or improve our products and services, or
          otherwise for legitimate business reasons; For internal assessment and
          analysis (e.g. automated profiling, market and product analysis); If
          we are under a duty to disclose or share your data to comply with any
          legal or regulatory obligation; or to protect our rights, property, or
          safety of our employees, customers, or others. This includes
          exchanging information with other companies and organizations for the
          purposes of fraud protection.
        </Text>
      </View>
      <View style={styles.border} />
    </View>
  );
};

export default PrivacyPolicyComponent;
