import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feed from './screens/tabScreens/Feed'
import Settings from './screens/tabScreens/Settings'
import Notifications from './screens/tabScreens/Notifications'

const Tab = createBottomTabNavigator()

const TabGroup = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Notifications" component={Notifications} />
        </Tab.Navigator>
    )
}
const Navigation = () => {
    return(
        <NavigationContainer>
            <TabGroup />
        </NavigationContainer>
    )
}

export default Navigation