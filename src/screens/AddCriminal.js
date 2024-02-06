import React, { useState } from 'react';
import '../Css/AddCriminal.css';

const AddCriminal = () => {
    const [criminalInfo, setCriminalInfo] = useState({
        criminalId: '',
        age: '',
        gender: '',
        dob: '',
        crimeCommit: '',
        location: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCriminalInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Adding Criminal:', criminalInfo);
        setCriminalInfo({
            criminalId: '',
            age: '',
            gender: '',
            dob: '',
            crimeCommit: '',
            location: ''
        });
    };

    return (
        <div className="add-criminal-container">
            <div className="add-criminal-form">
                <h2>Add Criminal</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label for="criminalId">Criminal ID:</label>
                        <input
                            type="text"
                            id="criminalId"
                            name="criminalId"
                            value={criminalInfo.criminalId}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label for="age">Age:</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={criminalInfo.age}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label for="gender">Gender:</label>
                        <input
                            type="text"
                            id="gender"
                            name="gender"
                            value={criminalInfo.gender}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label for="dob">Date of Birth:</label>
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                            value={criminalInfo.dob}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label for="crimeCommit">Crime Comitted:</label>
                        <textarea
                            id="crimeCommit"
                            name="crimeCommit"
                            value={criminalInfo.priors}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label for="location">Location where Crime Comitted:</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={criminalInfo.location}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddCriminal;
