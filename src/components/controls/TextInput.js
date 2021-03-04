import React from "react";
import { TextField } from "@material-ui/core";

export default function TextInput(props) {
  const attr = {
    name: "" || props.name,
    label: "" || props.label,
    value: "" || props.value,
    onChange: "" || props.onChange,
  };
  return (
    <TextField
      variant="outlined"
      color="secondary"
      name={attr.name}
      label={attr.label}
      onChange={attr.onChange}
      value={attr.value}
    />
  );
}
