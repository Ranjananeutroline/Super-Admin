import React, {useState, useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import Image from '../../shared/Image';
import Neutrologo from '../../assets/Neutroline_logo 3.png';
import { useDispatch } from 'react-redux';
import { setAdminUser } from '../../redux/actions/authActions';

const AdminLogin = () => {
  const dispatch=useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Simulating authentication success/failure
    if (email && password) {
      // If email and password are provided
      if (email === 'admin@example.com' && password === 'password') {
        // Dispatch action to set adminUser
        dispatch(setAdminUser({ email: 'admin@example.com' }));
        // Redirect to admin dashboard on successful login
        navigate('/admindashboard');
      } else {
        setError('Invalid email or password');
      }
    } else {
      setError('Please enter both email and password');
    }
  };

 
  return (
    // <ThemeProvider theme={theme}>
    //   <Container component="main" maxWidth="xm" className="mt-[-70px]" >
    //     <CssBaseline />
    //     <Box
    //       sx={{
    //         marginTop: 8,
    //         display: 'flex',
    //         flexDirection: 'column',
    //         alignItems: 'center',
    //       }}
    //     >
    //       <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
    //         <LockOutlinedIcon />
    //       </Avatar>
    //       <Typography component="h1" variant="h5">
    //         Sign in
    //       </Typography>
    //       <Box component="form" 
    //     //   onSubmit={handleSubmit} 
    //       noValidate sx={{ mt: 1 }}>
    //         <TextField
    //           margin="normal"
    //           required
    //           fullWidth
    //           id="email"
    //           label="Email Address"
    //           name="email"
    //           autoComplete="email"
    //           autoFocus
    //         />
    //         <TextField
    //           margin="normal"
    //           required
    //           fullWidth
    //           name="password"
    //           label="Password"
    //           type="password"
    //           id="password"
    //           autoComplete="current-password"
    //         />
    //         <FormControlLabel
    //           control={<Checkbox value="remember" color="primary" />}
    //           label="Remember me"
    //         />
    //         <Button
    //       onClick={handleSignIn}
    //           variant="contained"
    //           sx={{ mt: 3, mb: 2 }}
         
    //         >
           

    //           Sign In
             
    //         </Button>
    //         {/* <Grid container>
    //           <Grid item xs>
    //             <Link href="#" variant="body2">
    //               Forgot password?
    //             </Link>
    //           </Grid>
    //           <Grid item>
    //             <Link href="#" variant="body2">
    //               {"Don't have an account? Sign Up"}
    //             </Link>
    //           </Grid>
    //         </Grid> */}
    //       </Box>
    //     </Box>
      
    //   </Container>
    // </ThemeProvider>
    <div style={{ background: "rgba(220, 234, 255, 0.30)", paddingBottom:"4.3rem", paddingLeft:"100px", paddingRight:"100px"}}>
    <div className="text-center   flex justify-center items-center mb-4 pt-2 ">
      <img
        className="w-[100px] h-[70px]"
        src={Neutrologo}
        alt="neutrosys"
      ></img>
      <h1 className="text-[22px] font-[600]">Neutroline Pvt. Ltd.</h1>
    </div>

    <div className=" flex flex-col justify-center items-center text-center gap-5 md:flex-row md:justify-center md:gap-8 md:items-start login-main">
      <Image />
   <div>
    <div
    className="m-5"
    >
      <label>Email:</label>
      <input
      className=" border border-blue-400 hover:border-black "
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div
    className="m-5"
    >
      <label>Password:</label>
      <input
      className=" border border-blue-400  hover:border-black"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /> </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button onClick={handleSignIn}
      className="border  border-blue-600 bg-[#8bb7de]  p-1 rounded-md"
      >Sign In</button>
      {/* <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p> */}
    </div>
    </div>
    </div>
  )
}

export default AdminLogin
