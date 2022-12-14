
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
const { value: enterdName, isValid: enteredNameIsValid, hasError: nameInputHasError, valueChangeHandler: nameChangedHandler, inputBlurHandler: nameBlurHandler, reset: resetNameInput} = useInput(value => value.trim() !=='');

const { value: enteredEmail, isValid: enteredEmailIsValid, hasError: emailInputHasError, valueChangeHandler: emailChangeHandler, inputBlurHandler: emailBlurHandler, reset: restEmailInput} = useInput(value => value.includes('@'));

  let formIsValid = false;

    if(enteredNameIsValid && enteredEmailIsValid) {
      formIsValid = true;
     };

  const formSubmissionHandler = event => {
    event.preventDefault();

    if(!enteredNameIsValid) {
      return;
    }


    console.log(enterdName);
    console.log(enteredEmail);

  
    // nameInputRef.current.value = ''; => NOt IDEAL< DON'T MANIPULSSTE THE DOM!
    resetNameInput();
    restEmailInput();
  };

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';

  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangedHandler} onBlur={nameBlurHandler} value={enterdName}/>
        {nameInputHasError && <p className="error-text">Name must not be Empty!</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input type='email' id='email' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail}/>
        {emailInputHasError && <p className="error-text">Please enter a valid Email Address</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
