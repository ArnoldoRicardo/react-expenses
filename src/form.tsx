import React, { useCallback, useState } from "react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Button from "@mui/material/Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Grid from "@mui/material/Grid";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";

const FormComponent: React.FC = () => {
  const [total, setTotal] = useState<number | "">("");
  const [date, setDate] = useState<Date | null>(new Date());
  const [note, setNote] = useState<string>("");

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log({ total, date, note });
    },
    [total, date, note]
  );

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <TextField
            fullWidth
            label="Total"
            type="number"
            value={total}
            onChange={(e) =>
              setTotal(e.target.value ? parseFloat(e.target.value) : "")
            }
          />
        </Grid>
        <Grid item>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date"
              value={date}
              onChange={(newDate) => setDate(newDate)}
              closeOnSelect
            />
          </LocalizationProvider>
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            label="Note"
            multiline
            rows={4}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" type="submit">
            Guardar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormComponent;
