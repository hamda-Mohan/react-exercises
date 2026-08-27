import React, { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: ""
    });

    const [isChecked, setIsChecked] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    // Username + Email
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };


    // Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isChecked) {
            alert("Please check the box");
            return;
        }

        console.log("Checked:", isChecked);

        if (selectedOption === "") {
            alert("Please choose an option");
            return;
        }

        console.log("You chose:", selectedOption);
        console.log("Username:", formData.username);
        console.log("Email:", formData.email);
    };

    return (
        <div>
            <h1>Controlled Form</h1>
            <form onSubmit={handleSubmit}>

                {/* Username */}
                <input
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    value={formData.username}
                    onChange={handleChange}
                />

                {/* Email */}
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                />

                {/* One Checkbox */}
                <label>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => {
        setIsChecked(e.target.checked);
    }}
                    />
                    I agree to the terms
                </label>

                {/* Select */}
                <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                >
                    <option value="">Select your role</option>
                    <option value="student">Student</option>
                    <option value="developer">Frontend Developer</option>
                    <option value="data_analyst">Data Analyst</option>
                </select>

                {/* Submit */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;