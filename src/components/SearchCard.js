import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";
import "../App.css";
import { Checkbox } from "@mui/material";

const SearchCard = () => {
  return (
    <div className="search-bar-container">
        <div>
     <FormControl component="fieldset">
            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="One way"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Return"
              />
              <FormControlLabel
                value="multiCity"
                control={<Radio />}
                label="Multi City"
              />
            </RadioGroup>
          </FormControl>
          </div>
      <Card sx={{ maxWidth: 1005 }}>
        <CardContent>
        </CardContent>
        <CardContent>
            <div className="input-outer-container">
        <div className="input-container">
        <h4>From</h4>
        <input type="text" />
        </div>
        <div className="input-container">
        <h4>To</h4>
        <input type="text" />
        </div>
        <div className="input-container">
        <h4>Departure</h4>
        <input type="text" />
        </div>
       <div className="input-container">
       <h4>Departure</h4>
        <input type="text" />
       </div>
        <div className="input-container">
        <h4>Travellers & Class</h4>
        <input type="text" />
        </div>
        </div>
        </CardContent>
        <CardActions>
        <div className="input-outer-container">
        <FormControlLabel control={<Checkbox  />} label="Non-Stop Flights" />
        <FormControlLabel control={<Checkbox  />} label="Student-fare" />
        </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default SearchCard;
