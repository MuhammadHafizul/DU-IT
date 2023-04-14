import { StyleSheet, Image, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './src/screen/Splash';
import Home from './src/screen/Home';
import Login from './src/screen/Login';
import SignUp from './src/screen/SignUp';
import BibdMain from './src/components/BibdMain';
import BaiduriMain from './src/components/BaiduriMain';
import MaybankMain from './src/components/MaybankMain';
import TaibMain from './src/components/TaibMain';

const stack = createStackNavigator();

console.reportErrorsAsExceptions = false;

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />

      <stack.Navigator>

        <stack.Screen
          options={{ headerShown: false }}
          name="Splash"
          component={Splash}
        />

        <stack.Screen
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#020148',
              height: 70
            },
            headerTitleAlign: 'center',
            headerTitle: () => (
              <Image
                style={styles.logo}
                source={require('./src/images/Logo_white_01.png')}
              ></Image>
            ),
          }}
          name="Home"
          component={Home} />

        <stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login} />

        <stack.Screen
          options={{ headerShown: false }}
          name="SignUp"
          component={SignUp} />

        <stack.Screen
          options={{
            headerShown: true,
            headerTitle: '',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#8A1863',
              height: 70
            },
            headerTitleAlign: 'center',
            headerTitle: () => (
              <Image
                style={styles.banklogo}
                source={require('./src/images/bibdheader.png')}
              ></Image>
            ),
          }}
          name="BibdMain"
          component={BibdMain} />

        <stack.Screen
          options={{
            headerShown: true,
            headerTitle: '',
            headerTintColor: '#000',
            headerStyle: {
              backgroundColor: '#EFEFEF',
              height: 70
            },
            headerTitleAlign: 'center',
            headerTitle: () => (
              <Image
                style={styles.banklogo}
                source={require('./src/images/baiduriheader.png')}
              ></Image>
            ),
          }}
          name="BaiduriMain"
          component={BaiduriMain} />

        <stack.Screen
          options={{
            headerShown: true,
            headerTitle: '',
            headerTintColor: '#000',
            headerStyle: {
              backgroundColor: '#fff',
              height: 70
            },
            headerTitleAlign: 'center',
            headerTitle: () => (
              <Image
                style={styles.banklogo}
                source={require('./src/images/taibheader.png')}
              ></Image>
            ),
          }}
          name="TaibMain"
          component={TaibMain} />

        <stack.Screen
          options={{
            headerShown: true,
            headerTitle: '',
            headerTintColor: '#000',
            headerStyle: {
              backgroundColor: '#FFC600',
              height: 70
            },
            headerTitleAlign: 'center',
            headerTitle: () => (
              <Image
                style={styles.banklogo}
                source={require('./src/images/maybankheader.png')}
              ></Image>
            ),
          }}
          name="MaybankMain"
          component={MaybankMain} />

      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  logo: {
    flex: 1,
    width: 30,
    height: 30,
    marginTop: 15,
    marginBottom: 15,
    resizeMode: 'contain',
  },

  banklogo: {
    flex: 1,
    width: 90,
    height: 90,
    marginTop: 15,
    marginBottom: 15,
    resizeMode: 'contain',
  }
});
