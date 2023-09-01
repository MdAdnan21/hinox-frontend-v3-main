import React, {useState} from 'react'
import styles from './TableData.module.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const TableData = (element) => {

    // console.log(element.item)
    const claimedData = element.item;
    const [buttonStates, setButtonStates] = useState(claimedData.map(() => false));
    const [claim, setClaim] = useState(element.item.buy)
    const [close, setClose] = useState(null);
    // const createData = (name, calories, fat, carbs, protein) => {
    //     return { name, calories, fat, carbs, protein };
    // }
    
    const rows = [
        // createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        // createData('Eclair', 262, 16.0, 24, 6.0),
        // createData('Cupcake', 305, 3.7, 67, 4.3),
        // createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    const handleClaim = (idx) => {
        const updatedButtonStates = [...buttonStates];
        updatedButtonStates[idx] = !updatedButtonStates[idx];
        setButtonStates(updatedButtonStates);
        // setClaim( pre => !pre)
    }

    const closeTable = () => {
        setClose(pre => !pre)
    }

  return (
   <>
     <TableContainer component={Paper} className={close ? styles.displayTable : ""}>
        <div id={styles.up}>
            <i className="fa-solid fa-chevron-up" onClick={closeTable}></i>
        </div>
      <Table sx={{ minWidth: 650, backgroundColor: '#242B33' }} aria-label="simple table" className={styles.tableBody}>
        <TableHead className={styles.tableHead}>
          <TableRow >
            <TableCell className={styles.tableCell}>Schedule</TableCell>
            <TableCell className={styles.tableCell}>Token unlock</TableCell>
            <TableCell className={styles.tableCell}>Amount unlock</TableCell>
            <TableCell className={styles.tableCell}>Unloack at</TableCell>
            <TableCell className={styles.tableCell}>
            <button>Claim all Available</button></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {claimedData.map((item, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }} 
            >
              <TableCell component="th" scope="row" className={styles.tableL}>
                {index+1}
              </TableCell>
              <TableCell className={styles.tableL} >{item.tokenUnlock}</TableCell>
              <TableCell className={styles.tableL} >{item.amountUnlock} &nbsp;<span style={{fontWeight: 'bolder'}}>BNB</span> ≈$10,000</TableCell>
              <TableCell className={styles.tableL} >{item.time}</TableCell>
              <TableCell className={[styles.tableLists, styles.tableL]}>
                <button className={buttonStates[index] ? styles.claimed :  styles.claimUnActive} onClick={() => handleClaim(index)}>{buttonStates[index] ? 'Claimed' : 'Claim'}</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </>
  )
}

export default TableData
