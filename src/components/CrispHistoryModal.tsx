import { useCrispHistory } from '../context/CrispHistoryProvider';
import React from 'react';

interface CrispHistoryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CrispHistoryModal: React.FC<CrispHistoryModalProps> = ({ isOpen, onClose }) => {
    const { history } = useCrispHistory();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-30">
            <div className="bg-white p-5 rounded-lg shadow-lg w-80 min-h-[400px] relative flex flex-col">
                <h2 className="text-2xl font-extrabold text-center border-b pb-2 mb-4">Crisp History</h2>
                <ul className="flex-grow">
                    {history.length > 0 ? (
                        history.map((crisp: string, index: number) => (
                            <li key={index} className="py-1 border-b">{crisp}</li>
                        ))
                    ) : (
                        <p className="flex items-center justify-center h-full italic text-gray-500">No crisps spun yet.</p>
                    )}
                </ul>
                <button 
                    className="absolute bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default CrispHistoryModal;