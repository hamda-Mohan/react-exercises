import React, { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        role: "",
        experience: "",
        skills: [],
        agreement: false,
        notification: false
    });

    const [errors, setErrors] = useState({})

    const skills = [
        "React",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Python",
        "Java",
        "UI Design",
        "API Development"
    ]
    const roles = [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "UI/UX Designer",
        "Product Manager"
    ];

    const validateForm = (name, value) => {
        let error = ''
        // fullname valiation
        if (name === "fullName") {
            if (!value.trim()) {
                error = 'fullname is required'
            } else if (!/^[a-zA-Z\s]{2,30}$/.test(value)) {
                error = "Please enter a valid name (2-30 characters, letters only)";
            }
        }
        // email vailadtion 
        if (name === 'email') {
            if (!value) {
                error = 'email is required'
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                error = "Please enter valid email address";
            }
        }
        //  role validation
        if (name == 'role') {
            if (!value) {
                error = 'please select role '
            }
        }
        //  experience validation
        if (name == 'experience') {
            if (value === '') {
                error = 'experience is required '
            } else if (isNaN(value) || value < 0 || value > 50) {
                error = 'Experience must be between 0 and 50'
            }
        }
        // skills validation
        if (name === 'skills') {
            if (!value || value.length === 0) {
                error = 'please select one skill or > '
            }
        }
        // agreement validation 
        if (name === 'agreement') {
            if (!value) {
                error = 'you must agree terms and conditions'
            }
        }

        return error;
    }

    // Username + Email + checboxs + roles
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value
        }))

        const error = validateForm(
            name,
            type === "checkbox" ? checked : value
        );
        setErrors(prev => ({
            ...prev, [name]: error
        }))

    };
    // skills
    const handleSkillChange = (event) => {
        const { value, checked } = event.target;

        setFormData((prevData) => {
            const updatedSkills = checked
                ? [...prevData.skills, value]
                : prevData.skills.filter((skill) => skill !== value);

            const error = validateForm("skills", updatedSkills);

            setErrors((prev) => ({
                ...prev,
                skills: error
            }));

            return {
                ...prevData,
                skills: updatedSkills
            };
        });
    };
    // Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        const formErrors = {};
        Object.keys(formData).forEach(key => {
            const error = validateForm(key, formData[key]);
            if (error) {
                formErrors[key] = error;
            }
        });

        if (Object.keys(formErrors).length === 0) {
            console.log('Form submitted:', formData);

            alert(" form submitted successfully ")

            setFormData({
                fullName: "",
                email: "",
                role: "",
                experience: "",
                skills: [],
                agreement: false,
                notification: false
            });
        } else {
            setErrors(formErrors);
        }


    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">

            <div className="max-w-2xl bg-white mx-auto p-6 sm:p-8 ring-1 ring-blue-100 rounded-2xl shadow-2xl">

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl text-blue-600 font-mono font-bold text-center mb-8">
                    Developer Application Form
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Full Name */}
                    <div>
                        <label className="block text-gray-900 text-sm font-semibold">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className={`w-full mt-2 p-3 border rounded-lg outline-none transition
                        ${errors.fullName
                                    ? "border-red-500 focus:ring-2 focus:ring-red-300 focus:border-red-500"
                                    : "border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
                                }`}
                        />

                        {errors.fullName && (
                            <p className="text-rose-600 text-sm mt-1">
                                {errors.fullName}
                            </p>
                        )}
                    </div>


                    {/* Email */}
                    <div>
                        <label className="block text-gray-900 text-sm font-semibold">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className={`w-full mt-2 p-3 border rounded-lg outline-none transition
                        ${errors.email
                                    ? "border-red-500 focus:ring-2 focus:ring-red-300 focus:border-red-500"
                                    : "border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
                                }`}
                        />

                        {errors.email && (
                            <p className="text-rose-600 text-sm mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>


                    {/* Role */}
                    <div>
                        <label className="block text-gray-900 text-sm font-semibold">
                            Role
                        </label>

                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className={`w-full mt-2 p-3 border rounded-lg outline-none transition
                        ${errors.role
                                    ? "border-red-500 focus:ring-2 focus:ring-red-300 focus:border-red-500"
                                    : "border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
                                }`}
                        >
                            <option value="">
                                Select your role
                            </option>

                            {roles.map((role) => (
                                <option key={role} value={role}>
                                    {role}
                                </option>
                            ))}
                        </select>

                        {errors.role && (
                            <p className="text-rose-600 text-sm mt-1">
                                {errors.role}
                            </p>
                        )}
                    </div>


                    {/* Years of Experience */}
                    <div>
                        <label className="block text-gray-900 text-sm font-semibold">
                            Years of Experience
                        </label>

                        <input
                            type="number"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            min="0"
                            max="50"
                            placeholder="Enter years of experience"
                            className={`w-full mt-2 p-3 border rounded-lg outline-none transition
                        ${errors.experience
                                    ? "border-red-500 focus:ring-2 focus:ring-red-300 focus:border-red-500"
                                    : "border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
                                }`}
                        />

                        {errors.experience && (
                            <p className="text-rose-600 text-sm mt-1">
                                {errors.experience}
                            </p>
                        )}
                    </div>


                    {/* Skills */}
                    <div>
                        <label className="block text-gray-900 text-sm font-semibold mb-3">
                            Skills
                        </label>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                            {skills.map((skill) => (
                                <label
                                    key={skill}
                                    className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition"
                                >
                                    <input
                                        type="checkbox"
                                        name="skills"
                                        value={skill}
                                        checked={formData.skills.includes(skill)}
                                        onChange={handleSkillChange}
                                        className="w-4 h-4 accent-blue-600"
                                    />

                                    <span className="text-gray-700 text-sm">
                                        {skill}
                                    </span>
                                </label>
                            ))}

                        </div>

                        {errors.skills && (
                            <p className="text-rose-600 text-sm mt-1">
                                {errors.skills}
                            </p>
                        )}
                    </div>


                    {/* Terms & Conditions */}
                    <div className="p-3 rounded-lg bg-gray-50">

                        <label className="flex items-start gap-2 cursor-pointer">

                            <input
                                type="checkbox"
                                name="agreement"
                                checked={formData.agreement}
                                onChange={handleChange}
                                className="w-4 h-4 mt-1 accent-blue-600"
                            />

                            <span className="text-gray-700 text-sm font-medium">
                                I agree to the terms and conditions
                            </span>

                        </label>

                        {errors.agreement && (
                            <p className="text-rose-600 text-sm mt-1">
                                {errors.agreement}
                            </p>
                        )}

                    </div>


                    {/* Notifications */}
                    <div className="p-3 rounded-lg bg-gray-50">

                        <label className="flex items-start gap-2 cursor-pointer">

                            <input
                                type="checkbox"
                                name="notification"
                                checked={formData.notification}
                                onChange={handleChange}
                                className="w-4 h-4 mt-1 accent-blue-600"
                            />

                            <span className="text-gray-700 text-sm font-medium">
                                Receive notifications about new opportunities
                            </span>

                        </label>

                    </div>


                    {/* Submit */}
                    <div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold
                    hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200
                    active:scale-[0.98] transition duration-200"
                        >
                            Submit Application
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default Form;