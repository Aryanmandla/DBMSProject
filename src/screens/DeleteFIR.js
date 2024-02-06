import { useState } from "react";
import '../Css/DeleteFIR.css';

const DeleteFIR = () => {
    const [selectedFIR, setSelectedFIR] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleDeleteFIR = () => {
        console.log(`Deleting FIR: ${selectedFIR}`);

        setSelectedFIR('');
        setShowConfirmation(false);
    };

    return (
        <div className="delete-fir-container">
            <h1>Delete FIR</h1>
            <p>Selected FIR: {selectedFIR}</p>
            <button onClick={handleDeleteFIR}>Delete</button>
        </div>
    );
};

export default DeleteFIR;