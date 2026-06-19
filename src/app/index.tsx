import { View, StyleSheet, FlatList } from 'react-native';
import { router } from 'expo-router';
import EventCard from '../components/EventCard';
import CustomButton from '../components/CustomButton';
import { useEvents } from '../context/EventContext'; // Utilisation du hook

export default function Home() {
    const { events } = useEvents(); // Récupération des événements dynamiques

    return (
        <View style={styles.container}>
            <FlatList
                data={events}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <EventCard {...item} />}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
            <CustomButton title="+ Organiser un moment" onPress={() => router.push('/create')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFF', padding: 16 },
});