import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Box } from "@mui/material";

export function ContactForm() {
  const [name, setName] = useState("");
  const [isEmptyName, setIsEmptyName] = useState(false);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isEmptyEmail, setIsEmptyEmail] = useState(false);
  const [message, setMessage] = useState("");
  const [isEmptyMessage, setIsEmptyMessage] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleSubmit(e) {
    e.preventDefault();
    validateEmail();
    // to be added when back end is implemented
  };

  function validateEmail() {
    if (emailRegex.test(email)) {
      console.log(email)
      setIsValidEmail(true);
    } else {
      console.log(email)
      setIsValidEmail(false);
      return;
    }
  };

  function verifyIfInputEmpty(input, setState) {
    if (input.length === 0) {
      setState(true);
    } else {
      setState(false);
    }
  }

  return (
    <Box sx={{ height: "100vh" }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        <Grid item xs={12} md={4}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h4" align="center" mb={2}>
              Contact Me
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ display: "flex", justifyContent: "center", }}>
                    <img
                      src="./contact_me.png"
                      alt="Contact"
                      style={{ maxWidth: "90%" }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    value={name}
                    margin="normal"
                    required
                    error={isEmptyName}
                    helperText={isEmptyName ? 'Name field is required' : null}
                    onChange={(e) => setName( e.target.value.trim() )}
                    onBlur={(e) => verifyIfInputEmpty( e.target.value.trim(), setIsEmptyName)}
                    onFocus={() => setIsEmptyName(false)}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    value={email}
                    margin="normal"
                    required
                    error={isEmptyEmail || !isValidEmail}
                    helperText={isEmptyEmail ? 'Email field is required' : null}
                    onChange={(e) => setEmail( e.target.value.trim().toLowerCase() )}
                    onBlur={(e) => verifyIfInputEmpty( e.target.value.trim(), setIsEmptyEmail)}
                    onFocus={() => setIsEmptyEmail(false)}
                  />
                    {
                      !isValidEmail &&
                      <p
                        className='MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained Mui-required css-1wc848c-MuiFormHelperText-root'
                      >
                        Kindly provide a legitimate email address.
                      </p>
                    }
                  <TextField
                    fullWidth
                    label="Message"
                    value={message}
                    margin="normal"
                    required
                    multiline
                    rows={4}
                    error={isEmptyMessage}
                    helperText={isEmptyMessage ? 'Message field is required' : null}
                    onChange={(e) => setMessage( e.target.value.trim() )}
                    onBlur={(e) => verifyIfInputEmpty( e.target.value.trim(), setIsEmptyMessage)}
                    onFocus={() => setIsEmptyMessage(false)}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ mt: 2 }}
                    onClick={(e) => handleSubmit(e)}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactForm;