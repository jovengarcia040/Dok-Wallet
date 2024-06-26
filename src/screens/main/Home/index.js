// import {createStackNavigator} from '@react-navigation/stack';

// import {Button, Image, TouchableOpacity} from 'react-native';
// import {DrawerToggleButton} from '@react-navigation/drawer';
// import Back from 'assets/images/sidebarIcons/Back.svg';
// import HomeScreen from './HomeScreen';

// const Stack = createStackNavigator();

// const forFade = ({current}) => ({
//   cardStyle: {
//     opacity: current.progress,
//   },
// });

// const Home = () => {
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
//         name="HomeScreen"
//         component={HomeScreen}
//         // initialParams={{showModal: false}}
//         options={{
//           cardStyleInterpolator: forFade,
//           headerShown: false,
//         }}
//       />
//       {/*
//       <Stack.Screen
//         name="SendScreen"
//         component={SendScreen}
//         options={{
//           headerBackImage: () => <Back />,
//           cardStyleInterpolator: forFade,
//         }}
//       /> */}
//     </Stack.Navigator>
//   );
// };

// export default Home;
