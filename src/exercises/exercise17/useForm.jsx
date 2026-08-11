import React, { useState } from 'react';

const UseForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]:value,})
    }
    return {handleChange , values}
}

export default UseForm;
