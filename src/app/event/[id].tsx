import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Colors } from '../../constants/Colors';

export default function EventDetail() {
    const { id } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fiche Événement #{id}</Text>
            <Text style={styles.body}>Les modules collaboratifs de budget et de répartition des tâches s'afficheront dynamiquement ici.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFF', padding: 24, justifyContent: 'center' },
    title: { fontFamily: 'Poppins-Bold', fontSize: 24, color: Colors.primary, marginBottom: 12 },
    body: { fontFamily: 'Poppins-Regular', fontSize: 16, color: Colors.darkGray, lineHeight: 24 },
});