import {
  useFonts as useCustomFonts,
  Poppins_300Light as Light,
  Poppins_400Regular as Regular,
  Poppins_500Medium as Medium,
  Poppins_600SemiBold as SemiBold,
  Poppins_700Bold as Bold,
} from "@expo-google-fonts/poppins";
import { RootNavigation } from "./src/navigation";
import { Provider } from 'react-redux'
import { store } from './src/redux/store'




function App() {
  let [fontsLoaded, fontError] = useCustomFonts({
    Light,
    Regular,
    Medium,
    SemiBold,
    Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
     <Provider store={store}>
       <RootNavigation />
     </Provider>
  );
}

export default App;
