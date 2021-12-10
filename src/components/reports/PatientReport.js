// import React, { useState, useEffect, Component } from 'react';
// import PropTypes from 'prop-types';
// import firebase from 'firebase/app';
// import 'firebase/storage';
// import PageHeader from '../page-header/PageHeader';
// import { initializeApp } from '@firebase/app';
// import style from './Reports.module.css';
// import styles from '../dynamic-table/dynamic-table.module.css';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import { API, graphqlOperation } from "aws-amplify";
// //  import { getUser } from '../../graphql/queries';


// const firebaseConfig = {
//     apiKey: "AIzaSyDgxKxiGZv8nLVb-w6bYIHTlGy6aQDJp9g",
//     authDomain: "telemedicine-report.firebaseapp.com",
//     projectId: "telemedicine-report",
//     storageBucket: "telemedicine-report.appspot.com",
//     messagingSenderId: "725043276876",
//     appId: "1:725043276876:web:0623c4d48dacf249aa58e9",
//     measurementId: "G-9JBVMYYDV3"
// }

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }
// else {
//     firebase.app();
// }

// var storage = firebase.storage();

// const listReports = `query listReports {
//     listReports {
//       items {
//         reportLink
//       }
//     }
//   }`

// const getUser = `query GetUser(id: ID!) {
//     etUser(id: $id) {
//        username
//        reports {
//            items {
//                reportLink
           
//            }
//        }
//     }
//    } `

// //   query MyQuery2 {
// //     getUser(id: "38cdf8b4-a318-422d-bc88-fe452fd37fbf") {
// //       email
// //       reports {
// //         items {
// //           reportLink
// //         }
// //       }
// //     }
// //   }

// const PatientReport = (props) => {
//     // const [URL2, setURL2] = useState("");
//     const [URL, setURLArray] = useState([]); //declare URL array
//     const [reports, setReports] = useState([]);


//     useEffect(() => {
//         fetchUserReport();
//     }, []);

//     //   async function fetchReports() {
//     //     try {
//     //       const reportData = await API.graphql(graphqlOperation(listReports));
//     //       const reports = reportData.data.listReports.items;

//     //       console.log(reports);
//     //       setReports(reports);
//     //     } catch (err) {
//     //       console.log('error fetching user reports');
//     //     }
//     //   }


//     async function fetchUserReport() {
//         try {
//             const userReport = await API.graphql(graphqlOperation(getUser, { id: '0ff109bb-b3d3-42e3-a053-364be4dfeb06' }));
//             const reports = userReport.data.getUser.items;
//             console.log(reports);
//             setReports(reports);



//         } catch (err) {
//             console.log('Error fetching reports');
//         }
//     }

//     // async function fetchReports() {
//     //     try {
//     //         const reportData = await API.graphql(graphqlOperation(listReports));
//     //         const reports = reportData.data.listReports.items;

//     //         console.log(reports);
//     //         setReports(reports);
//     //       } catch (err) {
//     //         console.log('error fetching user reports');
//     //       }

//     // }


//     const fullName = props.patientData.given_name + " " + (props.patientData.middle_name ? props.patientData.middle_name + " " : " ") + props.patientData.family_name;
//     const age = calculate_age(props.patientData.birthdate);
//     const id = props.patientData.sub;


//     return (
//         <div>

//             <PageHeader currentUser={props.currentUser}></PageHeader>
//             <div className={style['name2']}>
//                 Reports
//             </div>

//             <TableContainer component={Paper}>
//                 <Table style={{ marginTop: '30px' }} aria-label="simple table">
//                     <TableHead className="tbHead">
//                         <TableRow  >
//                             <TableCell style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }} className={style['tablecell1']} >Patient Name</TableCell>
//                             <TableCell style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }} className={style['tablecell1']} >Date of Birth</TableCell>
//                             <TableCell style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }} className={style['tablecell1']} >Age</TableCell>
//                             <TableCell style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }} className={style['tablecell1']}>Sex</TableCell>
//                             <TableCell style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }} className={style['tablecell1']} >Ethnicity</TableCell>
//                             <TableCell style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }} className={style['tablecell1']}>Marital Status</TableCell>
//                             <TableCell style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }} className={style['tablecell1']}>Phone Number</TableCell>
//                             <TableCell style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }} className={style['tablecell1']}>Provider</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody className="tBody">
//                         <TableRow >
//                             <TableCell style={{ textAlign: 'center' }} >{fullName}</TableCell>
//                             <TableCell style={{ textAlign: 'center' }} component="th" scope="row">
//                                 {props.patientData.birthdate}
//                             </TableCell>
//                             <TableCell style={{ textAlign: 'center' }} component="th" scope="row">
//                                 {age}
//                             </TableCell>
//                             <TableCell style={{ textAlign: 'center' }} component="th" scope="row">
//                                 {props.patientData.gender}
//                             </TableCell>
//                             <TableCell style={{ textAlign: 'center' }} component="th" scope="row">
//                                 {props.patientData["custom:ethnicity"]}
//                             </TableCell>
//                             <TableCell style={{ textAlign: 'center' }} component="th" scope="row">
//                                 {props.patientData["custom:marital-status"]}
//                             </TableCell>
//                             <TableCell style={{ textAlign: 'center' }} component="th" scope="row">
//                                 {props.patientData.phone_number}
//                             </TableCell>
//                             <TableCell style={{ textAlign: 'center' }} component="th" scope="row">
//                                 {props.patientData["custom:provider"]}
//                             </TableCell>

//                         </TableRow>
//                     </TableBody>

//                 </Table>
//             </TableContainer>
//             <br />



//             <div style={{ marginLeft: '170px', marginRight: '170px', marginTop: '30px', marginBottom: '30px' }} className="home__table">
//                 <div className={styles['columnsMain1']}>
//                     <TableContainer style={{ boxShadow: 'none', }} component={Paper}>

//                         <TableHead className="tbHead">
//                             <TableRow >
//                                 <TableCell style={{ fontSize: '35px', textAlign: 'center', fontWeight: 'bold' }} className="tablecell1" >
//                                     <div className={styles['columns1']}>{fullName}'s Reports</div></TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody className="tBody">
//                             {reports.map((listReports) => (
//                                 <TableRow key={getUser.reportLink}>
//                                     <TableCell ><div className={styles['rows1']}>{getUser.reportLink}</div></TableCell>
//                                 </TableRow>
//                             ))}

//                         </TableBody>
//                     </TableContainer>
//                 </div>
//             </div>

//         </div>

//     );
// }

// function calculate_age(dateofBirth) {
//     var birthYear = dateofBirth.substring(dateofBirth.length - 4),
//         currentYear = new Date().getFullYear(),
//         age = currentYear - birthYear;

//     return age;
// }

// PatientReport.propTypes = {};

// PatientReport.defaultProps = {};

// export default PatientReport;