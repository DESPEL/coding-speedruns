import React from 'react'
import { 
  Accordion, 
  makeStyles, 
  AccordionSummary, 
  FormControlLabel, 
  AccordionDetails,
  Checkbox,
  Typography,
  FormLabel
} from '@material-ui/core'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: '8px',
  }
})

export default function QuestionCard(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormLabel>{props.question}</FormLabel>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            {props.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}