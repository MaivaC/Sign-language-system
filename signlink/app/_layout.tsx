import 'react-native-reanimated';

import { useFonts } from 'expo-font';
import { View } from 'react-native';

import { mainstyles } from '@/AppSignlinks/styles/generalappstyles';
import CameraTensor from '@/backendLogic/handgesture';
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
<CameraTensor/>
        
    </View>
    </ThemeProvider>
  );
}


