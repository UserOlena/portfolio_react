import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Box } from "@mui/material";

export function ContactForm() {
  const [name, setName] = useState("");
  const [isValidName, setIsValidName] = useState(true);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [message, setMessage] = useState("");
  const [isValidMessage, setIsValidMessage] = useState(true);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleSubmit(e) {
    e.preventDefault();
    // to be added when back end is implemented
  };
  
    function validateName(e) {
      if (e.target.value.trim().length < 2 ) {
        setIsValidName(false);
      } else {
        setIsValidName(true);
      }
    };

  function validateEmail(e) {
    if (emailRegex.test(e.target.value.trim().toLowerCase())) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  function validateMessage(e) {
    if (e.target.value.trim().length < 10 ) {
      setIsValidMessage(false);
    } else {
      setIsValidMessage(true);
    }
  };

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
                      src="./kindpng_1403886.png"
                      alt="Contact"
                      style={{ maxWidth: "100%" }}
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
                    error={!isValidName}
                    helperText={!isValidName ? 'Name must be of 2 or more characters.' : null}
                    onChange={(e) => setName( e.target.value.trim() )}
                    onBlur={(e) => validateName(e)}
                    onFocus={() => setIsValidName(true)}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    value={email}
                    margin="normal"
                    required
                    error={!isValidEmail}
                    helperText={!isValidEmail ? 'Kindly provide a legitimate email address.' : null}
                    onChange={(e) => setEmail( e.target.value.trim().toLowerCase() )}
                    onBlur={(e) => validateEmail(e)}
                    onFocus={() => setIsValidEmail(true)}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    value={message}
                    margin="normal"
                    required
                    multiline
                    rows={4}
                    error={!isValidMessage}
                    helperText={!isValidMessage ? 'Message must be of 10 or more characters.' : null}
                    onChange={(e) => setMessage( e.target.value.trim() )}
                    onBlur={(e) => validateMessage(e)}
                    onFocus={() => setIsValidMessage(true)}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ mt: 2 }}
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