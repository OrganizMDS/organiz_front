import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useEvents } from '../context/EventContext'; // Utilisation du hook

export default function CreateEvent() {
    const { addEvent } = useEvents();
    const [form, setForm] = useState({ title: '', date: '', location: '' });

    const handleCreate = () => {
        if (!form.title || !form.date || !form.location) {
            alert('Remplis tous les champs pour ton groupe !');
            return;
        }

        addEvent(form); // Ajout dynamique de l'événement
        router.replace('/');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <CustomInput label="Nom du délire" placeholder="Ex: Secret Santa, Raclette..." value={form.title} onChangeText={(t) => setForm({ ...form, title: t })} />
            <CustomInput label="Quand ?" placeholder="Ex: Vendredi soir à 21h" value={form.date} onChangeText={(t) => setForm({ ...form, date: t })} />
            <CustomInput label="Où ça ?" placeholder="Ex: Chez Baptiste ou Bar l'Amiot" value={form.location} onChangeText={(t) => setForm({ ...form, location: t })} />
            <CustomButton title="Créer l'invitation" onPress={handleCreate} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: '#FFF', padding: 20, flexGrow: 1 },
});