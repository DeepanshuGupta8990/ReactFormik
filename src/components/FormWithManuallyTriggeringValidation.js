import React from 'react';
import styled from 'styled-components';
import {Formik,Form,Field,ErrorMessage,FieldArray,FastField} from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormWithManuallyTriggeringValidation() {
  const toastOptions = {
    position: `${window.innerWidth > 1200 ? "top-right" : "top-center"}`,
    autoClose: "8000",
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
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
        phoneNumber: ['',''],
        phNumbers: ['']
    }

    const onSubmit = (values)=>{
        console.log('submit form data',values)
    }

    const validationSchema = Yup.object({
      name: Yup.string().required("Required name"),
      email: Yup.string().email("Invalid email format").required("Required email"),
      channel: Yup.string().required("Required"),
      // comments: Yup.string().required("Required"),
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

    const validateComments = (value)=>{
      let error
      if(!value){
        error = 'Required comment field'
      }
      return error
    }

  return (
      <>
    <Container>
     <Formik
     initialValues={initialValues}  
     onSubmit={onSubmit}
     validationSchema={validationSchema}
    //  validateOnMount
    //  validateOnChange={false}
    //  validateOnBlur={false}
     >
     {
        (formik)=>{
            console.log('formik', formik)
            return(
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
        <label htmlFor="">List of phone numbers</label>
        <FieldArray name='phNumbers'>
           {
            (fieldArrayProps)=>{
              // console.log('fieldArrayProps',fieldArrayProps);
              const {push,remove,form} = fieldArrayProps
              const {values} = form;
              const {phNumbers} = values
              return (<div>
                  {
                    phNumbers.map((phNumber,index)=>{
                       return(
                        <div key={index} className='fieldProps'>
                            <Field id='fieldProp' name={`phNumbers[${index}]`}/>
                         {
                          index > 0 &&    <button type='button' onClick={()=>{remove(index)}}>-</button>
                         }
                            <button type='button' onClick={()=>{
                              push("")
                            }}>+</button>
                        </div>
                       )
                    })
                  }               
              </div>)
            }
           }
        </FieldArray>
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <FastField
          name="address">
            {
              (props)=>{
                const {field,form,meta} = props
                // console.log(props)
                // console.log('Field render')
                return(
                  <div>
                    <input type='text' id='address' {...field}/>
                    {meta.touched && meta.error ? <div className='errortxt'>{meta.error}</div> : (null)}
                  </div>
                )
              }
            }
          </FastField>
      </div>
      <div>
        <label htmlFor="comments">Comments:</label>
        <Field
          as="textarea"
          id="comments"
          name="comments"
          validate={validateComments}
        />
        <ErrorMessage name='comments' component={TextError}/>
      </div>
      <button type='button' className='btnclass' onClick={()=>{formik.validateField("comments")}}>Validate Comments</button>
      <button type='button' className='btnclass' onClick={()=>{formik.validateForm()}}>Validate all</button>
      <button type='button' className='btnclass' onClick={()=>{formik.setFieldTouched("comments")}}>Visit Comments</button>
      <button type='button' className='btnclass' onClick={()=>{formik.setTouched({
        name:true,email:true,channel:true,comments:true
      })}}>Visit fields</button>
      <button type="submit" className={`${(formik.dirty && formik.isValid)?'btnclass':"btndisabled"}`}disabled={!(formik.dirty && formik.isValid)}>Submit</button>
    </Form>
            )
        }
     }
     </Formik>
    </Container>
    <ToastContainer />
    </>
  )
}


const Container = styled.div`
 display: flex;
 flex-direction: column;
 // width: 100vw;
 // height: 100vh;
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
        .fieldProps{
          display: flex;
          flex-direction: row;
          input{
            width: 12rem;
          }
          button{
            width: max-content;
            padding: 0 1rem;
          }
        }
    }
    .btnclass{
        border: none;
        border-radius: 0.4rem;
        width: 6rem;
        height: 2rem;
        cursor: pointer;
        transition: 0.3s ease;
        &:hover{
          background-color:#f7b98a ;
        }
        &:active{
          transform : scale(0.9);
        }
    }
    .btndisabled{
      border: none;
        border-radius: 0.4rem;
        width: 6rem;
        height: 2rem;
        cursor: pointer;
    }
  }
`;
