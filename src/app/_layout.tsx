import { Stack } from 'expo-router';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { ActivityIndicator, View } from 'react-native';
import { EventProvider } from '../context/EventContext'; // Importation du context

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        'Poppins-Regular': Poppins_400Regular,
        'Poppins-Bold': Poppins_700Bold,
    });

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#FF8C00" />
            </View>
        );
    }

    return (
        <EventProvider>
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: '#FF8C00' },
                    headerTintColor: '#FFF',
                    headerTitleStyle: { fontFamily: 'Poppins-Bold' },
                }}
            >
                <Stack.Screen name="index" options={{ title: 'Mes Événements' }} />
                <Stack.Screen name="create" options={{ title: 'Nouvel Événement' }} />
                <Stack.Screen name="event/[id]" options={{ title: 'Détails' }} />
                <Stack.Screen name="invite/[token]" options={{ title: 'Invitation', headerShown: false }} />
            </Stack>
        </EventProvider>
    );
}