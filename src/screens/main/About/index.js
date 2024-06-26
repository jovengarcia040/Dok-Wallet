// // import { createStackNavigator } from "@react-navigation/stack";
// import AboutScreen from './AboutScreen';
// import AboutApp from './AboutApp';
// import TermsConditions from './TermsConditions';
// import PrivacyPolicy from './PrivacyPolicy';
// import {Button, Image, TouchableOpacity} from 'react-native';
// import {DrawerToggleButton} from '@react-navigation/drawer';
// import Back from 'assets/images/sidebarIcons/Back.svg';

// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {createStackNavigator} from '@react-navigation/stack';
// // const Stack = createNativeStackNavigator();
// const Stack = createStackNavigator();

// // const Stack = createStackNavigator();

// const forFade = ({current}) => ({
//   cardStyle: {
//     opacity: current.progress,
//   },
// });

// const About = ({navigation}) => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: {
//           height: 80,
//           borderBottomColor: '#B7B7B7',
//           borderBottomWidth: 1,
//         },
//         headerTitleAlign: 'center',
//       }}>
//       <Stack.Screen
//         name="About screen"
//         component={AboutScreen}
//         options={({navigation}) => ({
//           title: 'About',
//           headerLeft: () => (
//             <TouchableOpacity onPress={() => navigation.navigate('Home')}>
//               <Back style={{marginLeft: 11}} />
//             </TouchableOpacity>
//           ),
//           headerTitleAlign: 'center',
//           cardStyleInterpolator: forFade,
//           // headerStyle: { height: 80, borderBottomColor: "#B7B7B7", borderBottomWidth: 1 },
//         })}
//       />
//       <Stack.Screen
//         name="About App"
//         component={AboutApp}
//         options={({navigation}) => ({
//           headerStyle: {
//             height: 80,
//             borderBottomColor: '#B7B7B7',
//             borderBottomWidth: 1,
//           },
//           headerTitleAlign: 'center',
//           headerLeft: () => (
//             <TouchableOpacity
//               style={{padding: 11}}
//               onPress={() => navigation.goBack()}>
//               <Back />
//             </TouchableOpacity>
//           ),
//           cardStyleInterpolator: forFade,
//         })}
//       />
//       <Stack.Screen
//         name="Terms & Conditions"
//         component={TermsConditions}
//         options={({navigation}) => ({
//           headerStyle: {
//             height: 80,
//             borderBottomColor: '#B7B7B7',
//             borderBottomWidth: 1,
//           },
//           title: 'Terms of Use',
//           headerTitleAlign: 'center',
//           headerLeft: () => (
//             <TouchableOpacity
//               style={{padding: 11}}
//               onPress={() => navigation.goBack()}>
//               <Back />
//             </TouchableOpacity>
//           ),
//           cardStyleInterpolator: forFade,
//         })}
//       />
//       <Stack.Screen
//         name="Privacy Policy"
//         component={PrivacyPolicy}
//         options={({navigation}) => ({
//           headerStyle: {
//             height: 80,
//             borderBottomColor: '#B7B7B7',
//             borderBottomWidth: 1,
//           },
//           headerTitleAlign: 'center',
//           headerLeft: () => (
//             <TouchableOpacity
//               style={{padding: 11}}
//               onPress={() => navigation.goBack()}>
//               <Back />
//             </TouchableOpacity>
//           ),
//           cardStyleInterpolator: forFade,
//         })}
//       />
//     </Stack.Navigator>
//   );
// };

// export default About;
