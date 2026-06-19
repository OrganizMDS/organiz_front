import React, { createContext, useState, useContext } from 'react';

export interface EventItem {
    id: string;
    title: string;
    date: string;
    location: string;
}

interface EventContextType {
    events: EventItem[];
    addEvent: (event: Omit<EventItem, 'id'>) => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export function EventProvider({ children }: { children: React.ReactNode }) {
    const [events, setEvents] = useState<EventItem[]>([
        { id: '1', title: 'Crémaillère Hugo', date: 'Samedi 20h', location: 'Lyon 7' },
        { id: '2', title: 'Barbecue Pool Party', date: 'Dimanche 12h', location: 'Villeurbanne' },
    ]);

    const addEvent = (newEvent: Omit<EventItem, 'id'>) => {
        const eventWithId = { ...newEvent, id: Math.random().toString() };
        setEvents((prev) => [...prev, eventWithId]);
    };

    return (
        <EventContext.Provider value={{ events, addEvent }}>
            {children}
        </EventContext.Provider>
    );
}

export function useEvents() {
    const context = useContext(EventContext);
    if (!context) throw new Error('useEvents doit être utilisé dans un EventProvider');
    return context;
}