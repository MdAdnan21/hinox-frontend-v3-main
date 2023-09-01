import React, {useState} from 'react'
import styles from './TableData.module.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import TableData from './TableData';


const Accordions = ({title, content, data}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [filterData, setFilterData] = useState([]);

  // const toggleAccordion = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
    {/* <div className={styles.accord}>
      <div className={styles.header} onClick={toggleAccordion}>
          <h2>{title}</h2>
          <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9660;</span>
          <span className={isOpen ? styles.arrow : ''}>&#9660;</span>

      </div>
        {isOpen && <div className={styles.accordion-content}>{content}</div>}
    </div> */}
    {/* ----------------------------------- */}
      <Accordion className={styles.accord}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={styles.textAccord}>Claim</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableData item={data} />
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default Accordions
