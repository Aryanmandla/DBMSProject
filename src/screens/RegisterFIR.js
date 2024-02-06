import { useState } from 'react';
import '../Css/RegisterFIR.css';


const RegisterFIR = () => {
    const [formData, setFormData] = useState({
        caseName: '',
        caseId: '',
        crime: '',
        investigatingOfficer: ''
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
            caseName: '',
            caseId: '',
            crime: '',
            investigatingOfficer: ''
        });
    };
    return (
        <div className="register-fir-form">
            <h2>Register FIR</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="caseName">Case Name:</label>
                    <input
                        type="text"
                        id="caseName"
                        name="caseName"
                        value={formData.caseName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label for="caseId">Case ID:</label>
                    <input
                        type="text"
                        id="caseId"
                        name="caseId"
                        value={formData.caseId}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label for="crime">Crime:</label>
                    <input
                        type="text"
                        id="crime"
                        name="crime"
                        value={formData.crime}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label for="investigatingOfficer">Investigating Officer:</label>
                    <input
                        type="text"
                        id="investigatingOfficer"
                        name="investigatingOfficer"
                        value={formData.investigatingOfficer}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}

export default RegisterFIR