import React, { useState } from 'react';
import '../Css/UpdateCriminalDb.css';

const UpdateCriminalDb = () => {
    const [formData, setFormData] = useState({
        criminalId: '',
        age: '',
        gender: '',
        dob: '',
        priors: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted', formData);

        setFormData({
            criminalId: '',
            age: '',
            gender: '',
            dob: '',
            priors: ''
        });
    };

    return (
        <div className="update-criminal-form">
            <h2>Update Criminal Database</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="criminalId">Criminal ID:</label>
                    <input
                        type="text"
                        id="criminalId"
                        name="criminalId"
                        value={formData.criminalId}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="gender">Gender:</label>
                    <input
                        type="text"
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="dob">Date of Birth (DOB):</label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="priors">Priors:</label>
                    <input
                        type="text"
                        id="priors"
                        name="priors"
                        value={formData.priors}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UpdateCriminalDb;
