import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../../screens/Profile/ProfileScreen';
import BottomNavigation from '../BottomNavigation';
import Colors from '../../constansts/Colors';

const Drawer = createDrawerNavigator();

function DrawerContainer() {
  return (
    <Drawer.Navigator 
      screenOptions={{ 
        headerShown: false,
        drawerActiveTintColor: Colors.primary800, // Active item color
        drawerStyle: {
          backgroundColor: "white", // Drawer background color
          width: 240, // Drawer width
        },
      }}
      drawerType="slide" // Drawer type
    >
      <Drawer.Screen name="Ana Ekran" component={BottomNavigation} />
      <Drawer.Screen name="Profil Ekranı" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerContainer;