import React, {useReducer} from 'react';

const initialState = {
    step: 1, firstname: '', lastname: '', email: '', phone: ''
}

const formReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return { ...state, [action.field]: action.value }
        case 'NEXT_STEP':
            return {
                ...state,
                step: state.step + 1
            }
        case 'PREV_STEP':
            return {
                ...state,
                step: state.step - 1
            }
        case 'RESET_FORM':
            return initialState;
        default:
            return state;
    }
}

const MultiStepForm = () => {
    const [state, dispatch] = useReducer(formReducer, initialState)

    const nextStep = () => dispatch({ type: 'NEXT_STEP' });
    const prevStep = () => dispatch({ type: 'PREV_STEP' });
    const resetStep = () => dispatch({ type: 'RESET_FORM' });

    const handleChange = (e) => dispatch({ type: 'UPDATE_FIELD', field: e.target.name, value: e.target.value })


    const handleSubmit = () => {
        alert('submitted successfully ');
        resetStep();
    };

    return (
        <div>
            <h1>Multi-Step Registration</h1>
            {state.step === 1 && (
            <div>
                <h3>Step 1: Profile</h3>
                <label>First Name:</label>
                <input type="text" name="firstname" value={state.firstname} onChange={handleChange} required /> <br />
                <label>Last Name:</label>
                <input type="text" name="lastname" value={state.lastname} onChange={handleChange} required /><br />
                <button onClick={nextStep}>Next</button>
            </div>
            )}

            {state.step === 2 && (
            <div>
                <h3>Step : Contact</h3>
                <label>Email:</label>
                <input type="email" name="email" value={state.email} onChange={handleChange} required /><br />
                <label>Phone:</label>
                <input type="text" name="phone" value={state.phone} onChange={handleChange} required /> <br />
                <button onClick={prevStep}>Back</button>
                <button onClick={nextStep}>Next</button>
            </div>
            )}

            {state.step === 3 && (
        <div>
          <h3>Step 3: Review</h3>
          <p>
            <b>First Name:</b> {state.firstname}
          </p>
          <p>
            <b>Last Name:</b> {state.lastname}
          </p>
          <p>
            <b>Email:</b> {state.email}
          </p>
          <p>
            <b>Phone:</b> {state.phone}
          </p>
          <button onClick={prevStep}>Back</button>
          <button onClick={handleSubmit}>Confirm</button>
        </div>
      )}
        </div>
    );
}

export default MultiStepForm;
