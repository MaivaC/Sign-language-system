import 'react-native-reanimated';

import { useFonts } from 'expo-font';
import {
  Text,
  View,
} from 'react-native';

import { mainstyles } from '@/AppSignlinks/styles/generalappstyles';
import { useColorScheme } from '@/hooks/useColorScheme';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View style={mainstyles.container}>
      <Text style={{textAlign:"center",fontSize:50,fontWeight:"bold"}}>WELCOME</Text>
        <Text style={{textAlign:"center",fontSize:30,fontWeight:"bold"}}>Entery Point is here</Text>
    </View>

    </ThemeProvider>
  );
}


