import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import MovieIcon from "@material-ui/icons/Movie";
import TheatersIcon from "@material-ui/icons/Theaters";

const submenu = [
  {
    id: 1,
    name: "Films",
    isParent: true,
    icon: <MovieIcon />,
    items: [
      {
        id: 11,
        name: "Blockbuster",
        isParent: true,
        items: [
          {
            id: 111,
            name: "Man of Steel",
            isParent: true,
            items: [{ id: 12, name: "Zack Snyder", isParent: false }],
          },
          {
            id: 112,
            name: "Batman v Superman",
            isParent: true,
            items: [{ id: 12, name: "Nolan", isParent: false }],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Drama",
    icon: <TheatersIcon />,
    isParent: true,
    items: [
      { id: 12, name: "Eternal Sunshine of a Spotless Mind", isParent: false },
    ],
  },
];

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    minWidth: "320px",
    boxShadow: "none",

    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "0px",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginLeft: "0px",
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
    padding: theme.spacing(0.75),
    display: "flex",
    flexDirection: "column",
  },
}))(MuiAccordionDetails);

export default function AccordianList() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const list = (items) => {
    return (
      <>
        {items.map((item, index) => (
          <Accordion square>
            <AccordionSummary>
              {item.icon}
              {item.name}
            </AccordionSummary>
            {item.isParent ? (
              <AccordionDetails>{list(item.items)}</AccordionDetails>
            ) : (
              <></>
            )}
          </Accordion>
        ))}
      </>
    );
  };

  return <>{list(submenu)}</>;
}
