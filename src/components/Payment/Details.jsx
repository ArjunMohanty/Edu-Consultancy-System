import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    margin: "20px",
  },
  title: {
    fontSize: 14,
  },
  text: {
    width: 350,
    margin: "10px",
  },
});

export default function Details({ formData, handleInputChange }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          variant="h5"
          gutterBottom
        >
          User Details
        </Typography>

        {/* Username Field */}
        <TextField
          id="username"
          label="Username"
          variant="filled"
          className={classes.text}
          name="username" // Match the name key in formData
          value={formData.username} // Bind to formData
          onChange={handleInputChange} // Use handler from props
        />
        <br />

        {/* Email Field */}
        <TextField
          id="email"
          label="Email"
          variant="filled"
          className={classes.text}
          name="email" // Match the name key in formData
          value={formData.email} // Bind to formData
          onChange={handleInputChange} // Use handler from props
        />
        <br />

        {/* Phone Field */}
        <TextField
          id="phoneNumber"
          label="Phone"
          variant="filled"
          className={classes.text}
          name="phoneNumber" // Match the name key in formData
          value={formData.phoneNumber} // Bind to formData
          onChange={handleInputChange} // Use handler from props
        />
        <br />
      </CardContent>
    </Card>
  );
}
