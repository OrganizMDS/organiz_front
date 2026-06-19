import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

interface Props {
    selected: 'OK' | 'NON' | 'NSP' | null;
    onSelect: (status: 'OK' | 'NON' | 'NSP') => void;
}

export default function RsvpStatus({ selected, onSelect }: Props) {
    const options: ('OK' | 'NON' | 'NSP')[] = ['OK', 'NON', 'NSP'];

    return (
        <View style={styles.container}>
            {options.map((opt) => (
                <TouchableOpacity
                    key={opt}
                    style={[styles.badge, selected === opt && styles.activeBadge]}
                    onPress={() => onSelect(opt)}
                >
                    <Text style={[styles.text, selected === opt && styles.activeText]}>{opt}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 12 },
    badge: { flex: 1, paddingVertical: 12, marginHorizontal: 4, borderRadius: 12, backgroundColor: Colors.gray, alignItems: 'center' },
    activeBadge: { backgroundColor: Colors.yellow },
    text: { fontFamily: 'Poppins-Bold', color: Colors.darkGray },
    activeText: { color: Colors.text },
});