import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Colors } from '../constants/Colors';

interface Props {
    id: string;
    title: string;
    date: string;
    location: string;
}

export default function EventCard({ id, title, date, location }: Props) {
    return (
        <Link href={`/event/${id}`} asChild>
            <Pressable style={styles.card}>
                <View style={styles.stripe} />
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.details}>{date} • {location}</Text>
                </View>
            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    card: { backgroundColor: '#FFF', borderRadius: 16, flexDirection: 'row', marginVertical: 8, overflow: 'hidden', borderWidth: 1, borderColor: '#EAEAEA' },
    stripe: { width: 8, backgroundColor: Colors.accent },
    content: { padding: 16, flex: 1 },
    title: { fontFamily: 'Poppins-Bold', fontSize: 16, color: Colors.text },
    details: { fontFamily: 'Poppins-Regular', fontSize: 13, color: Colors.darkGray, marginTop: 4 },
});