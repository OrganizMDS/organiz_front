import { TextInput, StyleSheet, View, Text } from 'react-native';
import { Colors } from '../constants/Colors';

interface Props {
    label: string;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
}

export default function CustomInput({ label, placeholder, value, onChangeText }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor="#999"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { marginVertical: 10, width: '100%' },
    label: { fontFamily: 'Poppins-Bold', fontSize: 14, marginBottom: 6, color: Colors.text },
    input: { backgroundColor: Colors.gray, padding: 14, borderRadius: 12, fontFamily: 'Poppins-Regular', fontSize: 15 },
});