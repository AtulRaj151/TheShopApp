import { createStackNavigator } from 'react-navigation-stack'
import ProductOverViewScreen from '../screens/shop/ProductOverViewScreen'
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import Colors from '../constants/Colors'

const productNavigation = createStackNavigator({
    ProductsOverView: ProductOverViewScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
})


export default createAppContainer(productNavigation);