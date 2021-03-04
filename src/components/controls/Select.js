import React from "react";

//import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

// const useStyles = makeStyles((theme) => ({
//   root: {},
// }));

export default function Select(props) {
  //const classes = useStyles();
  const [currency, setCurrency] = React.useState("EUR");
  const attr = {
    name: "" || props.name,
    label: "" || props.label,
    items: props.items || currencies,
  };

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <TextField
      id="outlined-select-currency"
      select
      label="Select"
      value={currency}
      onChange={handleChange}
      helperText="Please select your currency"
      variant="outlined"
    >
      {attr.items.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
