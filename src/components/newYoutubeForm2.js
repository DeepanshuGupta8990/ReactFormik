import React from 'react';
import styled from 'styled-components';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';

export default function NewYoutubeform2() {
    const initialValues = {
        name:"deep",
        email:"",
        channel:'',
        comments:'',
        address:'',
        social:{
          facebook:"",
          twitter:""
        },
        phoneNumber: ['','']
    }

    const onSubmit = (values)=>{
        console.log('submit form data',values)
    }

    const validationSchema = Yup.object({
      name: Yup.string().required("Required name"),
      email: Yup.string().email("Invalid email format").required("Required email"),
      channel: Yup.string().required("Required"),
      comments: Yup.string().required("Required"),
      address: Yup.string().required('Required address'),
      social: Yup.object({
        facebook:  Yup.string().required("Required fb"),
        twitter:  Yup.string().required("Required twitter"),
      }),
      phoneNumber: Yup.array().of(
        Yup.string().required("Phone number is required")
          .matches(/^\d{10}$/, "Phone number must be 10 digits")
      )
    })

  return (
    <Container>
     <Formik
     initialValues={initialValues}  
     onSubmit={onSubmit}
     validationSchema={validationSchema}
     >
     <Form>
      <div>
        <label htmlFor="name">Name:</label>
        <Field
          type="text"
          id="name"
          name="name"
        />
        <ErrorMessage name='name'>
          {
            (errorMsg)=>{
              return(
                 <TextError>{errorMsg}</TextError>
              )
            }
          }
        </ErrorMessage>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <Field
          type="email"
          id="email"
          name="email"
        />
         <ErrorMessage name='email' component={TextError}/>
      </div>
      <div>
        <label htmlFor="channel">Channel:</label>
        <Field
          type="text"
          id="channel"
          name="channel"
        />
        <ErrorMessage name='channel' component={TextError}/>
      </div>
      <div>
        <label htmlFor="fb">Facebook Profile:</label>
        <Field
          type="text"
          id="fb"
          name="social.facebook"
        />
        <ErrorMessage name='social.facebook' component={TextError}/>
      </div>
      <div>
        <label htmlFor="tw">Twitter Profile:</label>
        <Field
          type="text"
          id="tw"
          name="social.twitter"
        />
        <ErrorMessage name='social.twitter' component={TextError}/>
      </div>
      <div>
        <label htmlFor="primaryPh">Primary phone number:</label>
        <Field
          type="text"
          id="primaryPh"
          name="phoneNumber[0]"
        />
        <ErrorMessage name='phoneNumber[0]' component={TextError}/>
      </div>
      <div>
        <label htmlFor="secondryPh">Secondry phone number:</label>
        <Field
          type="text"
          id="secondryPh"
          name="phoneNumber[1]"
        />
        <ErrorMessage name='phoneNumber[1]' component={TextError}/>
      </div>
      
      <div>
        <label htmlFor="address">Address:</label>
        <Field
          name="address">
            {
              (props)=>{
                const {field,form,meta} = props
                // console.log(props)
                return(
                  <div>
                    <input type='text' id='address' {...field}/>
                    {meta.touched && meta.error ? <div className='errortxt'>{meta.error}</div> : (null)}
                  </div>
                )
              }
            }
          </Field>
      </div>
      <div>
        <label htmlFor="comments">Comments:</label>
        <Field
          as="textarea"
          id="comments"
          name="comments"
        />
        <ErrorMessage name='comments' component={TextError}/>
      </div>
      <button type="submit">Submit</button>
    </Form>
     </Formik>
    </Container>
  )
}


const Container = styled.div`
 display: flex;
 flex-direction: column;
 width: 100vw;
 height: 100vh;
 align-items: center;
 justify-content: flex-start;
 background-color: #e6a4a4;
 overflow-x: hidden;

  form{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.5rem;
    background: #f3d6d6;
    padding: 10px;
    border-radius: 10px;
    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        label{
          font-size: 20px;
        }
        input{
            width: 20rem;
            height: 1.5rem;
            border: 1px solid black;
            border-radius: 0.4rem;
            padding: 0.3rem;
        }
        textarea{
            color: red;
            width: 20rem;
            height: 4.5rem;
            border: 1px solid black;
            border-radius: 0.4rem;
            padding: 0.3rem;
        }
        .errortxt{
          color: red;
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