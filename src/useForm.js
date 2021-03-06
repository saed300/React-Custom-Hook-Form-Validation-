
import {useState, useEffect} from 'react'

const useForm = (validate, submitForm) => {
  
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  })

  const [errors, setErrors] = useState({})
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values))
    setIsSubmitting(true)
  }

  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting === true) {
      submitForm()
    }
  }, [errors])

  return {values, handleChange, handleSubmit, errors}
}

export default useForm

