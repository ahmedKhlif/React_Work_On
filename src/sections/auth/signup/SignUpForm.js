import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Iconify from '../../../components/iconify';

export default function SignUpForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    // Add your signup logic here
    // For demonstration purposes, console.log the form data
    const formData = {
      name: document.getElementById('name').value,
      prename: document.getElementById('prename').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      profilePicture: document.getElementById('profilePicture').value,
      profilePictureFrame: document.getElementById('profilePictureFrame').value,
      bio: document.getElementById('bio').value,
      remember: document.getElementById('remember').checked,
    };
    console.log(formData);

    navigate('/dashboard', { replace: true });
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField id="name" name="name" label="Name" />
        <TextField id="prename" name="prename" label="Prename" />
        <TextField id="email" name="email" label="Email address" />

        <TextField
          id="password"
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField id="profilePicture" name="profilePicture" label="Profile Picture" />
        <TextField id="profilePictureFrame" name="profilePictureFrame" label="Profile Picture Frame" />
        <TextField id="bio" name="bio" label="Bio" />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox id="remember" name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot refqsdfqsdfpassword?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Sign Up
      </LoadingButton>
    </>
  );
}
