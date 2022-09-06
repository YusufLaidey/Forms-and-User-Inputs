import useInput from "../hooks/use-input";

const isNotEmpty = value => value.trim() !== ''; 
const isEmail = value => value.includes('@');

const BasicForm = (props) => {
const { value: firstNameValue, isValid: firstNameIsValid, hasError: firstNameError, valueChangeHandler: firstNameChangeHandler, inputBlurHandler: firstNameBlurHandler, reset: resetFirstName} = useInput(isNotEmpty);
const { value: lastNameValue, isValid: lastNameIsValid, hasError: lastNameError, valueChangeHandler: lastNameChangeHandler, inputBlurHandler: lastNameBlurHandler, reset: resetLastName} = useInput(isNotEmpty);
const { value: emailValue, isValid: emailIsValid, hasError: emailError, valueChangeHandler: emailChangeHandler, inputBlurHandler: emailBlurHandler, reset: resetEmail} = useInput(isEmail);

let formIsValid = false;

if (firstNameIsValid && lastNameIsValid && emailIsValid) {
  formIsValid = true;
}

const submitHandler = event => {
  event.preventDefault();

  if (!formIsValid) {
    return;
  }
  console.log('Submitted!!!');
  console.log(firstNameValue);
  console.log(lastNameValue);
  console.log(emailValue);

  resetFirstName();
  resetLastName();
  resetEmail();
};

const firstNameClasses = firstNameError ? 'form-control invalid' : 'form-control';
const lastNameClasses = lastNameError ? 'form-control invalid' : 'form-control';
const emailClasses = emailError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={firstNameValue} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} />
          {firstNameError && <p className="error-text">Please enter a First Name.</p>}
        </div>
       <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lastNameValue} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler}/>
          {lastNameError && <p className="error-text">Please enter a Last Name.</p>}
        </div>
       </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={emailValue} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
        {emailError && <p className="error-text">Please enter a valid Email Address!</p>}
      </div> 
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
