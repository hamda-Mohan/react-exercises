import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({ mode: "onChange" });

    const grades = [
        { value: "grade1", label: "Grade 1" },
        { value: "grade4", label: "Grade 4" },
        { value: "grade8", label: "Grade 8" },
        { value: "grade12", label: "Grade 12" }
    ];

    const subjects = [
        "Mathematics",
        "Science",
        "English",
        "Geography",
        "History",
        "Physics",
        "Biology",
        "Chemistry"
    ];

    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {

        setLoading(true);

        // console
        console.log(data);

        // 1. Data hore kasoo qaado localStorage
        const oldData = JSON.parse(
            localStorage.getItem("students")
        ) || [];

        // 2. Data cusub ku dar data-dii hore
        const updatedData = [...oldData, data];

        // 3. Data-ga cusub dib ugu kaydi localStorage
        localStorage.setItem(
            "students",
            JSON.stringify(updatedData)
        );

        // alert 
        setTimeout(() => {
            alert(
                `Submitted Successfully!\n\n${JSON.stringify(data, null, 2)}`
            );

            setLoading(false);
        }, 1500);

    };

    return (

        <div className="min-h-screen bg-purple-100 py-10 px-4 sm:px-6 lg:px-8">

            <div className="max-w-2xl bg-purple-50 mx-auto p-6 sm:p-8 ring-1 ring-blue-100 rounded-2xl shadow-2xl">

                <form
                    className="flex flex-col m-8 space-y-4"
                    onSubmit={handleSubmit(onSubmit)}
                >

                    {/* Title */}

                    <h1 className="text-3xl sm:text-4xl bg-purple-800 text-purple-100 font-mono font-bold text-center mb-8 py-3 rounded-md">
                        Student Registration
                    </h1>


                    {/* Name */}

                    <div>

                        <label className="block text-gray-900 text-sm font-semibold">
                            Name
                        </label>

                        <input
                            className="w-full mt-2 p-3 border rounded-lg outline-none transition"
                            type="text"
                            {...register('username', {
                                required: 'username is required',
                                minLength: {
                                    value: 2,
                                    message: 'Name must be at least 2 characters'
                                },
                                pattern: {
                                    value: /^[A-Za-z\s]+$/,
                                    message: "Name can only contain letters and spaces"
                                }
                            })}
                        />

                        {errors.username && (
                            <p className="text-base text-rose-600">
                                {errors.username.message}
                            </p>
                        )}

                    </div>


                    {/* Email */}

                    <div>

                        <label className="block text-gray-900 text-sm font-semibold">
                            Email
                        </label>

                        <input
                            className="w-full mt-2 p-3 border rounded-lg outline-none transition"
                            type="email"
                            {...register('email', {
                                required: "email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "invalid email address"
                                }
                            })}
                        />

                        {errors.email && (
                            <p className="text-base text-rose-600">
                                {errors.email.message}
                            </p>
                        )}

                    </div>


                    {/* Grades */}

                    <div>

                        <label className="block text-gray-900 text-sm font-semibold">
                            Grade Level
                        </label>

                        <select
                            className="w-full mt-2 p-3 border rounded-lg outline-none"
                            {...register('grade', {
                                required: 'grade is required'
                            })}
                        >

                            <option value="" >
                                Select Grade
                            </option>

                            {grades.map((grade) => (
                                <option
                                    key={grade.value}
                                    value={grade.value}
                                >
                                    {grade.label}
                                </option>
                            ))}

                        </select>

                        {errors.grade && (
                            <p className="text-base text-rose-600">
                                {errors.grade.message}
                            </p>
                        )}

                    </div>


                    {/* Subjects Interest */}

                    <div>

                        <label className="block text-gray-900 text-sm font-semibold mb-3">
                            Subjects Interest
                        </label>

                        <div className="space-y-3 grid grid-cols-2">

                            {subjects.map((subject, index) => (

                                <label
                                    key={subject}
                                    className="flex items-center gap-2"
                                >

                                    <input
                                        type="checkbox"
                                        value={subject}
                                        {...register("subjects", {
                                            validate: (value) =>
                                                value?.length > 0 ||
                                                "Select at least one subject"
                                        })}
                                    />

                                    <span className="text-base font-normal">
                                        {subject}
                                    </span>

                                </label>

                            ))}

                        </div>

                        {errors.subjects && (
                            <p className="text-base text-rose-600 mt-2">
                                {errors.subjects.message}
                            </p>
                        )}

                    </div>


                    {/* Submit and Reset*/}
                    <div className='flex gap-10'>
                        <button
                            className="w-1/2 bg-red-800 text-red-50 py-3 px-6 rounded-lg font-semibold text-2xl"
                            type="button"
                            onClick={() => reset()}
                        >
                            Reset
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-1/2 bg-purple-800 text-purple-50 py-3 px-6 rounded-lg font-semibold text-2xl"
                        >
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default Form;