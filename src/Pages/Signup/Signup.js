


import React from 'react'

import TextField from '@mui/material/TextField';
import "./Signup.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useNavigate} from "react-router-dom";
import { InputAdornment } from '@mui/material';
// import Api from "../../Api.js"
// import Api from "../../App.js"
import {useFormik} from "formik"
import * as yup from "yup"




  const Api= "https://flightbooking-applicaton.herokuapp.com"

export default function Signup() {

    const navigate = useNavigate()



    const formvalidate = yup.object({

      Name:yup.string().required("plz fill this"),
      phone:yup.string().required("plz fill this"),
      password:yup.string().required("plz fill this"),
      ConfirmPassword:yup.string().required("plz fill this"),

    })


    const {handleChange,handleSubmit,values,errors,handleBlur,touched}=useFormik({
      initialValues:{
        Name:"",
        phone:"",
        password:"",
        confirmPassword:"",

      },
      validationSchema: formvalidate,
      onSubmit:(values)=>{
        Signupsuccess(values)
      }
    })

      const Signupsuccess = async (e)=>{
        try{
          // const fet = await fetch(`http://localhost:5000/signup`,{
          const fet = await fetch(`${Api}/signup`,{
            method:"POST",
            body:JSON.stringify({
              Name:values.Name,
              phone:values.phone,
              password:values.password,
              confirmPassword:values.confirmPassword
            }),
            headers:{
              "Content-type":"application/json",
            },
          });
        
          {fet.status === 400 || !fet || fet.status === 404 ? window.alert("Try New UserName") : navigate("/Dashboard")}
           
        }catch(err){
          console.log(err)
        }
      }


  return (
    <div className='Signup'>
    

      <div className='container'>
            {/* <h3>
                SIGNUP 
              </h3> */}
              {/* <div className='Aline'> */}

              
              <Card sx={{ minWidth: "20rem" ,backgroundColor:"transparent" ,border:"2px solid rgb(184, 177, 171)"}} >
      <CardContent>
          <form className='loginform' onSubmit={handleSubmit}>
          <h3>
                SIGNUP 
              </h3>
         
          <TextField
          required
        id="outlined-name"
        label= "Name"
        name='Name'
        value={values.Name}
        error={errors.Name && touched.Name}
        helperText={errors.Name && touched.Name ? errors.Name : ""}
        onChange={handleChange}
        onBlur={handleBlur}
  //       InputProps={{
  //         startAdornment:(
  //           <InputAdornment position="start">
  //             <AccountCircleIcon />
  //           </InputAdornment>
  // )
  //       }}
        // onChange={handleChange}
        sx={{ backgroundColor:"white" , borderColor:"red",borderRadius:".3rem"}}

      />
          <TextField
        id="outlined-name"
        label= "Phone Number"
        name='phone'
        value={values.phone}
        error={errors.phone && touched.phone}
        helperText={errors.phone && touched.phone ? errors.phone : ""}
        onChange={handleChange}
        onBlur={handleBlur}
        // onChange={handleChange}
        sx={{ backgroundColor:"white" , borderColor:"red",borderRadius:".3rem"}}
      />
          <TextField
          required
        id="outlined-name"
        label="Password"
        name='password'
        value={values.password}
        error={errors.password && touched.password}
        helperText={errors.password && touched.password ? errors.password : ""}
        onChange={handleChange}
        onBlur={handleBlur}
        // value={name}
        // onChange={handleChange}
        sx={{ backgroundColor:"white" , borderColor:"red",borderRadius:".3rem"}}
      />
          <TextField
          required
        id="outlined-name"
        name='confirmPassword'
        label="Confirm Password"
        value={values.confirmPassword}
        error={errors.confirmPassword && touched.confirmPassword}
        helperText={errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : ""}
        onChange={handleChange}
        onBlur={handleBlur}
        // value={name}
        // onChange={handleChange}
        sx={{ backgroundColor:"white" , borderColor:"red",borderRadius:".3rem"}}
      />
      <Button size="small" variant='contained' onClick={()=>{Signupsuccess()}} type='submit'>SignUp</Button>
     
          </form>
          </CardContent>
    </Card>

              {/* </div> */}
    <Button variant='contained' sx={{width:"15rem",marginTop:"1rem"}} onClick={()=>navigate("/")}>Already have an account?  Login Here</Button>
  
            </div>

    </div>
  )
}
