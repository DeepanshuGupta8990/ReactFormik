import React from 'react';
import styled from 'styled-components';
import {useFormik} from 'formik';
import * as Yup from 'yup';

export default function NewYoutubeform() {
    const initialValues = {
        name:"deep",
        email:"",
        channel:''
    }

    const onSubmit = (values)=>{
        console.log('submit form data',values)
    }

    const validationSchema = Yup.object({
      name: Yup.string().required("Required name"),
      email: Yup.string().email("Ivalid email format").required("Required email"),
      channel: Yup.string().required("Required")
    })

   const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
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
         {
            ...formik.getFieldProps('name')
         }
        />
        {formik.errors.name && formik.touched.name? (<div style={{color:'red'}}>{formik.errors.name}</div>) : (null)}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
        {
            ...formik.getFieldProps("email")
        }
        />
        {formik.errors.email && formik.touched.email ? (<div style={{color:'red'}}>{formik.errors.email}</div>) : (null)}
      </div>
      <div>
        <label htmlFor="channel">Channel:</label>
        <input
          type="text"
          id="channel"
          name="channel"
        {
        ...formik.getFieldProps("channel")
        }
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