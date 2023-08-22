import React, {useState} from 'react'
import * as yup from "yup"
import {useFormik} from 'formik'


const SignupFormik = () => {
    
    const formik = useFormik({
        initialValues:{
            name: "",
            email: "",
            password: "",
        },
        validationSchema:yup.object({
            name: yup.string()
            .min(2, "Atleast 2 characters")
            .required(),
            
            email: yup.string()
            .email().required(),

            password: yup.string()
            .min(6, "Password too short")
            .required() ,
        }),

        onSubmit: (values, {resetForm})=>{
            console.log(values);
            resetForm({values: ""})
        }})
  
    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    // const handleNameChange = (e) =>{
    //     setName(e.target.value)
    // }

    // const handleEmailChange = (e) =>{
    //     setEmail(e.target.value)
    // }

    // const handlePasswordChange = (e) =>{
    //     setPassword(e.target.value)
    // }

    // const handleSubmit = (e)=>{
    //     e.preventDefault();
    //     const newUser = {
    //         name, email, password
    //     }
    //     console.log(newUser)
    // }

  return (
    <div style={{textAlign:'center', padding:'1rem'}}>
     <h3>Signup</h3>
     <form onSubmit={formik.handleSubmit}>
        <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" 
            onChange={formik.handleChange} 
            value={formik.values.name}/>

            {formik.touched.name && formik.errors.name && <span>{
            formik.errors.name}</span>}
        </div>
         
        <div>
            <label htmlFor='email'>Email: </label>
            <input type='email' id='email' name='email' 
            onChange={formik.handleChange} 
            value={formik.values.email}/>
            
            {formik.touched.email && formik.errors.email && <span>{
            formik.errors.email}</span>}
        </div>       
        
        <div>
            <label htmlFor='password'>Password: </label>
            <input type='password' id='password' name='password' 
            onChange={formik.handleChange} 
            value={formik.values.password}/>

            {formik.touched.password && formik.errors.password && <span>{
            formik.errors.password}</span>}
        </div>

           <button type='submit'  style={{ margin:'1rem'}} >Signup</button>
     </form>
    </div>
  )
}

export default SignupFormik
