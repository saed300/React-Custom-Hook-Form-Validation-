
import React from 'react'
import './Form.css';
import useForm from './useForm'
import validate from './ValidateForm'

const FormSignup = ({submitForm}) => {

  const {values, errors, handleChange, handleSubmit} = useForm(validate, submitForm);

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Get started with us today! Create your account by filling out the
          information below.</h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input 
          type="text"
          name="username"
          id="username"
          className="form-input"
          placeholder="Enter username"
          value={values.username}
          onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input 
          type="email"
          name="email"
          id="email"
          className="form-input"
          placeholder="Enter email"
          value={values.email}
          onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
  
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input 
          type="password"
          name="password"
          id="password"
          className="form-input"
          placeholder="Enter password"
          value={values.password}
          onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm password
          </label>
          <input 
          type="password"
          name="password2"
          id="password2"
          className="form-input"
          placeholder="Confirm password"
          value={values.password2}
          onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>

      </form>
      
    </div>
  )
}

export default FormSignup
