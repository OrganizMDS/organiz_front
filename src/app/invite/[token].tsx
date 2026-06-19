import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Colors } from '../../constants/Colors';
import RsvpStatus from '../../components/RsvpStatus';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

export default function MagicInvite() {
    const { token } = useLocalSearchParams();
    const [name, setName] = useState('');
    const [rsvp, setRsvp] = useState<'OK' | 'NON' | 'NSP' | null>(null);

    const handleResponse = () => {
        if (!name) {
            alert('Entre ton prénom pour que tes potes sachent qui tu es !');
            return;
        }
        if (!rsvp) {
            alert('Dis-nous si tu viens ou pas !');
            return;
        }

        // Simulation de la validation du formulaire côté interface
        alert(`Merci ${name} ! Ta réponse "${rsvp}" a bien été prise en compte pour cet événement.`);

        // Une fois validé, on redirige l'invité vers la fiche de l'événement
        router.replace(`/event/demo-invitation`);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.card}>
                <Text style={styles.emoji}>🎉</Text>
                <Text style={styles.title}>Tu es invité !</Text>
                <Text style={styles.subtitle}>Rejoins ton groupe pour organiser ce moment sans prise de tête.</Text>

                <CustomInput
                    label="Ton prénom"
                    placeholder="Ex: Romance"
                    value={name}
                    onChangeText={setName}
                />

                <Text style={styles.label}>Tu passes ?</Text>
                <RsvpStatus selected={rsvp} onSelect={setRsvp} />

                <View style={styles.buttonContainer}>
                    <CustomButton
                        title="Rejoindre l'événement"
                        variant="accent"
                        onPress={handleResponse}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        padding: 20
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 24,
        padding: 24,
        borderWidth: 1,
        borderColor: '#EAEAEA',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.05,
        shadowRadius: 12,
        elevation: 4,
    },
    emoji: {
        fontSize: 48,
        textAlign: 'center',
        marginBottom: 12
    },
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: 26,
        textAlign: 'center',
        color: Colors.text,
        marginBottom: 8
    },
    subtitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        textAlign: 'center',
        color: Colors.darkGray,
        marginBottom: 24,
        lineHeight: 20
    },
    label: {
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: Colors.text,
        marginTop: 16,
        marginBottom: 4
    },
    buttonContainer: {
        marginTop: 16
    }
});