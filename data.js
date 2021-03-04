const directors = [
  {
    value: "snyder",
    label: "Zack Snyder",
  },
  {
    value: "kubrick",
    label: "Stanley Kubrick",
  },
];

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    padding: 0,
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "red",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
}))(MuiAccordionDetails);


<Accordion square>
        <AccordionSummary>Menu Item 1</AccordionSummary>
        <AccordionDetails>
          <Accordion square>
            <AccordionSummary>Menu Item 1</AccordionSummary>
            <AccordionDetails>
              <Accordion square>
                <AccordionSummary>Sub Menu Item 1</AccordionSummary>
              </Accordion>
              <Accordion square>
                <AccordionSummary>Sub Menu Item 2</AccordionSummary>
              </Accordion>
            </AccordionDetails>
          </Accordion>
          <Accordion square>
            <AccordionSummary>Sub Menu Item 2</AccordionSummary>
          </Accordion>
        </AccordionDetails>
      </Accordion>
      <Accordion square>
        <AccordionSummary>Menu Item 1</AccordionSummary>
        <AccordionDetails>
          <Accordion square>
            <AccordionSummary>Sub Menu Item 1</AccordionSummary>
          </Accordion>
          <Accordion square>
            <AccordionSummary>Sub Menu Item 2</AccordionSummary>
          </Accordion>
        </AccordionDetails>
      </Accordion>