import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

interface Props {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'accent';
}

export default function CustomButton({ title, onPress, variant = 'primary' }: Props) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: variant === 'primary' ? Colors.primary : Colors.accent }]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 16,
        alignItems: 'center',
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    text: { color: '#FFF', fontFamily: 'Poppins-Bold', fontSize: 16 },
});