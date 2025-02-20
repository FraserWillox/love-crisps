import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define types
interface Crisp {
    flavor: string;
    image: string;
}

interface CrispHistoryContextType {
    history: Crisp[];
    addCrispToHistory: (newCrisp: Crisp) => void;
}

// Create the Context with a default value
const CrispHistoryContext = createContext<CrispHistoryContextType | undefined>(undefined);

interface CrispHistoryProviderProps {
    children: ReactNode;
}

export const CrispHistoryProvider: React.FC<CrispHistoryProviderProps> = ({ children }) => {
    const [history, setHistory] = useState<Crisp[]>([]);

    // Function to add a new crisp to history
    const addCrispToHistory = (newCrisp: Crisp) => {
        setHistory((prevHistory) => {
            const updatedHistory = [newCrisp, ...prevHistory];
            return updatedHistory.slice(0, 5); // Keep only last 5 crisps
        });
    };

    return (
        <CrispHistoryContext.Provider value={{ history, addCrispToHistory }}>
            {children}
        </CrispHistoryContext.Provider>
    );
};

// Custom hook for using the crisp history context
export const useCrispHistory = () => {
    const context = useContext(CrispHistoryContext);
    if (!context) {
        throw new Error("useCrispHistory must be used within a CrispHistoryProvider");
    }
    return context;
};