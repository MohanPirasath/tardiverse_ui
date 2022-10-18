import TextField from '@mui/material/TextField';
import "./Login.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useNavigate} from "react-router-dom";
import { InputAdornment } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {useFormik} from "formik"
import * as yup from "yup"


function Login(){
  const navigate = useNavigate()
  const Api= "http://localhost:5000"




  const formvalidate = yup.object({

    Name:yup.string().required("plz fill this"),
    password:yup.string().required("plz fill this"),
    

  })


  const {handleChange,handleSubmit,values,errors,handleBlur,touched}=useFormik({
    initialValues:{
      Name:"",
      password:"",
      

    },
    validationSchema: formvalidate,
    onSubmit:(values)=>{
      Loginsuccess(values)
    }
  })

    const Loginsuccess = async (e)=>{
      try{
        // const fet = await fetch(`http://localhost:5000/signup`,{
        const fet = await fetch(`${Api}/login`,{
          method:"POST",
          body:JSON.stringify({
            userName:values.Name,
            
            password:values.password,
           
          }),
          headers:{
            "Content-type":"application/json",
          },
        });
      
        {fet.status === 400 || !fet || fet.status === 404 ? window.alert("invalid credentials") :
           navigate("/Dashboard")
            localStorage.setItem("TraName",values.Name)
      }
         
      }catch(err){
        console.log(err)
      }
    }




    return (
        <div className="Login">
          
            <div className='container'>
           
              <div className='Aline'>

              
              <Card sx={{ minWidth: "20rem" ,backgroundColor:"transparent" ,border:"2px solid rgb(184, 177, 171)"}} >
      <CardContent>
          <form className='loginform' onSubmit={handleSubmit}>
          <h3 >
                LOGIN
              </h3>
         
          <TextField
          required

        id="outlined-name"
        label= "Name"
        name='Name'
        // onChange={handleChange}
        value={values.Name}
        error={errors.Name && touched.Name}
        helperText={errors.Name && touched.Name ? errors.Name : ""}
        onChange={handleChange}
        onBlur={handleBlur}

        
        sx={{ backgroundColor:"white" , borderColor:"red",borderRadius:".3rem",color:"black" }}
        // value="d"
        InputProps={{
          startAdornment:(
            <InputAdornment position="start">
              <AccountCircleIcon />
            </InputAdornment>
  )
        }}
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
       
        sx={{ backgroundColor:"white" , borderColor:"red",borderRadius:".3rem"}}
        InputProps={{
          startAdornment:(
            <InputAdornment position="start">
              <LockOpenIcon />
            </InputAdornment>
  )
        }}
      />
      <Button size="small" onClick={()=>Loginsuccess()} variant='contained'>Log in</Button>
     
          </form>
          </CardContent>
    </Card>

              </div>
    <Button variant='contained' sx={{width:"15rem",marginTop:"1rem"}} onClick={()=>navigate("/signup")}>Don't have an account ?  Signup Here</Button>
  
            </div>
        </div>
      );
}

export default Login;