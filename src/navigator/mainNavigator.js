import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings10196747Navigator from '../features/Settings10196747/navigator';
import Feed7196744Navigator from '../features/Feed7196744/navigator';
import Dashboard14196741Navigator from '../features/Dashboard14196741/navigator';
import SignUp23196740Navigator from '../features/SignUp23196740/navigator';
import SignIn52196739Navigator from '../features/SignIn52196739/navigator';
import BlankScreen0193726Navigator from '../features/BlankScreen0193726/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings10196747: { screen: Settings10196747Navigator },
Feed7196744: { screen: Feed7196744Navigator },
Dashboard14196741: { screen: Dashboard14196741Navigator },
SignUp23196740: { screen: SignUp23196740Navigator },
SignIn52196739: { screen: SignIn52196739Navigator },
BlankScreen0193726: { screen: BlankScreen0193726Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
