import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { useState } from "react";
import { Container } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Test() {
  //Tage errechnen sich aus Tag der Rückgabe der spätesten Buchung - heutiges Datum (in Tagen)
  //--> vorausgesetzt man kann nicht in die Vergangenheit scrollen
  //diese Zahl wird dann als Spaltenzahl verwendet
  const days = 60;
  const [data, setData] = useState([
    {
      //Niklas fragen, ob das bei ihm 15 ode 16 Tage sind? --> es sind zwar 16 Tage aber 15 Übernachtungen
      dayStart: 3,
      dayEnd: 18,
    },
    {
      dayStart: 15,
      dayEnd: 45,
    },
    {
      //Niklas fragen, ob das bei ihm 15 ode 16 Tage sind? --> es sind zwar 16 Tage aber 15 Übernachtungen
      dayStart: 3,
      dayEnd: 18,
    },
    {
      dayStart: 15,
      dayEnd: 45,
    },
    {
      //Niklas fragen, ob das bei ihm 15 ode 16 Tage sind? --> es sind zwar 16 Tage aber 15 Übernachtungen
      dayStart: 3,
      dayEnd: 18,
    },
    {
      dayStart: 15,
      dayEnd: 45,
    },
    {
      //Niklas fragen, ob das bei ihm 15 ode 16 Tage sind? --> es sind zwar 16 Tage aber 15 Übernachtungen
      dayStart: 3,
      dayEnd: 18,
    },
    {
      dayStart: 15,
      dayEnd: 45,
    },
    {
      //Niklas fragen, ob das bei ihm 15 ode 16 Tage sind? --> es sind zwar 16 Tage aber 15 Übernachtungen
      dayStart: 3,
      dayEnd: 18,
    },
    {
      dayStart: 15,
      dayEnd: 45,
    },
    {
      //Niklas fragen, ob das bei ihm 15 ode 16 Tage sind? --> es sind zwar 16 Tage aber 15 Übernachtungen
      dayStart: 3,
      dayEnd: 18,
    },
    {
      dayStart: 15,
      dayEnd: 45,
    },
    {
      //Niklas fragen, ob das bei ihm 15 ode 16 Tage sind? --> es sind zwar 16 Tage aber 15 Übernachtungen
      dayStart: 3,
      dayEnd: 18,
    },
    {
      dayStart: 15,
      dayEnd: 45,
    },
    {
      //Niklas fragen, ob das bei ihm 15 ode 16 Tage sind? --> es sind zwar 16 Tage aber 15 Übernachtungen
      dayStart: 3,
      dayEnd: 18,
    },
    {
      dayStart: 15,
      dayEnd: 45,
    },
    {
      //Niklas fragen, ob das bei ihm 15 ode 16 Tage sind? --> es sind zwar 16 Tage aber 15 Übernachtungen
      dayStart: 3,
      dayEnd: 18,
    },
    {
      dayStart: 15,
      dayEnd: 45,
    },
    {
      //Niklas fragen, ob das bei ihm 15 ode 16 Tage sind? --> es sind zwar 16 Tage aber 15 Übernachtungen
      dayStart: 3,
      dayEnd: 18,
    },
    {
      dayStart: 15,
      dayEnd: 45,
    },
    {
      //Niklas fragen, ob das bei ihm 15 ode 16 Tage sind? --> es sind zwar 16 Tage aber 15 Übernachtungen
      dayStart: 3,
      dayEnd: 18,
    },
    {
      dayStart: 15,
      dayEnd: 45,
    },
    {
      //Niklas fragen, ob das bei ihm 15 ode 16 Tage sind? --> es sind zwar 16 Tage aber 15 Übernachtungen
      dayStart: 3,
      dayEnd: 18,
    },
    {
      dayStart: 15,
      dayEnd: 45,
    },
    {
      //Niklas fragen, ob das bei ihm 15 ode 16 Tage sind? --> es sind zwar 16 Tage aber 15 Übernachtungen
      dayStart: 3,
      dayEnd: 18,
    },
    {
      dayStart: 15,
      dayEnd: 45,
    },
    {
      //Niklas fragen, ob das bei ihm 15 ode 16 Tage sind? --> es sind zwar 16 Tage aber 15 Übernachtungen
      dayStart: 3,
      dayEnd: 18,
    },
    {
      dayStart: 15,
      dayEnd: 45,
    },
  ]);

  return (
    //width in % muss verwendet werden, um den zoom Faktoranzuzeigen (100% = ContainerBreite)
    //also 30 Tage auf 100% ist eine Monatsansicht und einem Monat an Daten.
    //Wenn man Buchungen für 2 Monate hat und man will aber nur einen Monat sehen, dann verwendet man 60 Tage bei 200%
    //Der container muss dann aber auf overflow-x:auto gesetzt werden

    //Für die Erzeugung des Grids ist es wichtig ein leeres grid vor den Balken zu legen,
    //dann ein grid für den Balken selbst
    //und wieder ein leeres grid für den kompletten Bereich hinter dem Balken bis zum Ende des charts. Nur so ist sicher gestellt, dass eine keine ungewollten Umbrüche gibt
    <Box sx={{ flexGrow: 1, width: "200%" }}>
      <Grid container spacing={1} columns={days}>
        {data.map((d, i) => (
          <React.Fragment key={i}>
            <Grid item xs={d.dayStart}></Grid>
            <Grid item xs={d.dayEnd - d.dayStart}>
              <Item>{d.dayEnd - d.dayStart}</Item>
            </Grid>
            <Grid item xs={days - d.dayEnd}></Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
}
