import React from 'react';
import styled from 'styled-components';
import {useFormik} from 'formik';

export default function Youtubeform() {
    const initialValues = {
        name:"deep",
        email:"",
        channel:''
    }

    const onSubmit = (values)=>{
        console.log('submit form data',values)
    }

    const validate = (values)=>{
        let errors = {}
  
        if(!values.name){
          errors.name = 'Required'
        }
  
        if(!values.email){
          errors.email = 'Required'
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
  
        if(!values.channel){
          errors.channel = 'Required'
        }
  
        return errors
      }

   const formik = useFormik({
    initialValues,
    onSubmit,
    validate
   });

   console.log(formik.touched)
    //   console.log(formik.errors)
//    console.log('Form Values', formik.values);

  return (
    <Container>
       <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.errors.name && formik.touched.name? (<div style={{color:'red'}}>{formik.errors.name}</div>) : (null)}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email ? (<div style={{color:'red'}}>{formik.errors.email}</div>) : (null)}
      </div>
      <div>
        <label htmlFor="channel">Channel:</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.channel}
        />
        {formik.errors.channel && formik.touched.channel ? (<div style={{color:'red'}}>{formik.errors.channel}</div>) : (null)}
      </div>
      <button type="submit">Submit</button>
    </form>
    </Container>
  )
}


const Container = styled.div`
 display: flex;
 flex-direction: column;
 width: 100vw;
 height: 100vh;
 align-items: center;
 justify-content: center;
 background-color: #e6a4a4;
  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    div{
        display: flex;
        flex-direction: column;
        
        input{
            width: 20rem;
            height: 1.5rem;
            border: 1px solid black;
            border-radius: 0.4rem;
        }
    }
    button{
        border: none;
        border-radius: 0.4rem;
        width: 6rem;
        height: 2rem;
    }
  }
`;