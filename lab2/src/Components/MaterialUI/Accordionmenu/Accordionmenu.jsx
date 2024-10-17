import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionExpandDefault() {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography> Is it possible to pick up the ordered goods?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Departments that have a justified need to pick
            up ordered goods must have a departmental procedure
            to ensure the university is protected against possible
            fraudulent activity.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>How to calculate shipping costs?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Shipping Cost to Sales Ratio = Shipping Cost ÷ Total Sales
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>How is delivery to the regions carried out?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Regional parcel carriers vary widely in size, location,
            and capability. As such, it’s crucial to vet a local
            parcel carrier carefully before entrusting that company
            with your customers’ orders. When interviewing regional
            carriers, ask the following questions:
            How long have you been in business?
            How many parcels have you delivered?
            How does your pricing compare to national carriers? Other regional options?
            Can you provide actual package data to show how many shipments you’ve made?
            What is your on-time delivery rate?
            How do you handle guaranteed delivery times?
            What value-added services do you provide?
            What is your average time in transit?
            What are your reporting functions and capabilities?
            What type of data can you provide to us about shipments and deliveries?
            Do you have any surcharges, and if so, what are they?
            How do you accommodate for rising fuel costs?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography>Will the goods arrive intact?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No matter if you're sending small packages
            or oversized items, using an experienced
            cargo shipping company ensures
            that your goods will arrive intact at final destination.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}