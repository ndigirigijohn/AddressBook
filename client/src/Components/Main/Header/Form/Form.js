import React from 'react'
import './add.css'
import { useState } from 'react'
import axios from 'axios'




function Form() {
  const [form, setForm]=useState({
    firstName:'',
    secondName:'',
    phone1:'',
    phone2:'',
    email:'',
    company:'',
});
const [errors, setErrors] = useState({
  firstName:'',
  secondName:'',
  phone1:'',
  phone2:'',
  email:'',
  company:'',
})

const validateForm = (fieldName, value) => {
  let err;
  const formErrors=errors;
  switch(fieldName) {
      case 'firstName':
          err= value.length<3?'Name must be atleast 3 characters':''
          formErrors.name=err;
          setErrors(formErrors)
         break;
         case 'secondName':
          err= value.length<3?'Name must be atleast 3 characters':''
          formErrors.name=err;
          setErrors(formErrors)
         break;
         case 'email':
          //validate email
          const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
          err= valid?'':'Email is not valid'
          formErrors.email=err;
          setErrors(formErrors) 
         break;
         case 'phone1':
          err= value.length<9?'Phone number must be atleast 9 characters':''
          formErrors.phone1=err;
          setErrors(formErrors)


      
         break;
          case 'phone2':
          err= value.length<9?'Phone number must be atleast 9 characters':''
          formErrors.phone2=err;
          setErrors(formErrors)
          break;

          case 'company':
          err= value.length<3?'Company name must be atleast 3 characters':''
          formErrors.company=err;
          setErrors(formErrors)
          break;

      default:   

}
}


const onUpdateField = e => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };
  const onSubmitForm = e => {
    e.preventDefault();
    if(Object.values(errors).some(err=>err!=='')){
      alert("Error, invalid input");
  
      return;
  }
      axios.post('http://localhost:8080/add', form).then(
        (res)=>{
          }
      )
      .catch((err)=>{
      })
  
  };
  




  return (
    <div className='add'>
        <form onSubmit={onSubmitForm}>
            <input onChange={(e)=>{
                onUpdateField(e);
                validateForm(e.target.name,e.target.value)
            } } name="firstName" type="text" placeholder="Name"/>
            <div style={{color:"red"}} className="error">{errors.firstName}</div>
            <input onChange={(e)=>{
                onUpdateField(e);
                validateForm(e.target.name,e.target.value)
            }
            } name="secondName" type="text" placeholder="Surname"/>
            <div style={{color:"red"}} className="error">{errors.secondName}</div>

            <input onChange={(e)=>{
                onUpdateField(e);
                validateForm(e.target.name,e.target.value)
            }
            } name="phone1" type="text" placeholder="Phone number"/>
            <div style={{color:"red"}} className="error">{errors.phone1}</div>

            <input onChange={(e)=>{
                onUpdateField(e); 
                validateForm(e.target.name,e.target.value)
            }
            } name="phone2" type="text" placeholder="Phone number"/>
            <div style={{color:"red"}} className="error">{errors.phone2}</div>

            <input onChange={(e)=>{
                onUpdateField(e);
                validateForm(e.target.name,e.target.value)
            }
            } name="email" type="text" placeholder="Email"/>
            <div style={{color:"red"}} className="error">{errors.email}</div>

            <input onChange={(e)=>{
                onUpdateField(e);
                validateForm(e.target.name,e.target.value)
            }
            } name="company" type="text" placeholder="Company"/>
            <div style={{color:"red"}} className="error">{errors.company}</div>
            
        </form>


        </div>

    
  )
}

export default Form