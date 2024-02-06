import React, { useState } from 'react';
import '../Css/RetrieveCriminalRecord.css';
const RetrieveCriminalRecord = () => {
    const [criminalId, setCriminalId] = useState('');
    const [criminalRecord, setCriminalRecord] = useState(null);

    const handleRetrieve = () => {
        const hardcodedCriminalRecord = {
            criminalId: 'CR123',
            name: 'John Doe',
            age: 30,
            gender: 'Male',
            priors: ['Theft', 'Assault']
        };
        if (criminalId === hardcodedCriminalRecord.criminalId) {
            setCriminalRecord(hardcodedCriminalRecord);
        } else {
            setCriminalRecord(null);
            alert('Wrong CustomerID');
        }
    };

    return (
        <div className='retrieve-criminal-record-container'>
            <div className="retrieve-criminal-record">
                <h2>Retrieve Criminal Record</h2>
                <div>
                    <label for="criminalId">Criminal ID:</label>
                    <input
                        type="text"
                        id="criminalId"
                        value={criminalId}
                        onChange={(e) => setCriminalId(e.target.value)}
                    />
                </div>
                <button onClick={handleRetrieve}>Retrieve</button>
                {(criminalId && criminalRecord) && (
                    <div className="criminal-record">
                        <h3>Criminal Record</h3>
                        <p><strong>Criminal ID:</strong> {criminalRecord.criminalId}</p>
                        <p><strong>Name:</strong> {criminalRecord.name}</p>
                        <p><strong>Age:</strong> {criminalRecord.age}</p>
                        <p><strong>Gender:</strong> {criminalRecord.gender}</p>
                        <p><strong>Priors:</strong> {criminalRecord.priors.join(', ')}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RetrieveCriminalRecord;
