import React, { useState, useEffect, Component } from 'react';
import { API, graphqlOperation } from "aws-amplify";
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/storage';
import PageHeader from '../page-header/PageHeader';
import { initializeApp } from '@firebase/app';
import profileStyle from '../Profile.module.css';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { createReport } from '../../graphql/mutations';

const firebaseConfig = {
  apiKey: "AIzaSyDgxKxiGZv8nLVb-w6bYIHTlGy6aQDJp9g",
  authDomain: "telemedicine-report.firebaseapp.com",
  projectId: "telemedicine-report",
  storageBucket: "telemedicine-report.appspot.com",
  messagingSenderId: "725043276876",
  appId: "1:725043276876:web:0623c4d48dacf249aa58e9",
  measurementId: "G-9JBVMYYDV3"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
else {
  firebase.app();
}

var storage = firebase.storage();

const listUsers = `query listUsers {
  listUsers{
      items{
          id
          username
          email
          given_name
          family_name
      }
  }
}`;

const listReports = `query listReports {
  listReports {
    items {
      reportLink
      userReportsId
    }
  }
}`

const NewReports = (props) => {
  // const [Url, setUrl] = useState('');
  const [URL, setURLArray] = useState([]);
  const [data, setData] = useState([]);
  const [image, setImage] = useState('');
  const [users, setUsers] = useState([]);


  // const [userForm, setUserForm] = useState({
  //   username: "",
  //   email: "",
  //   given_name: "",
  //   family_name: ""
  // });

  useEffect(() => {
    fetchUsers();
    fetchReports();
  }, []);


  

  const upload = () => {
    if (image == null)
      return;
    // setURLArray("Click to Download Report");

    //this is what sends files to Firebase Storage
    storage.ref(`/images/${image.name}`).put(image)
      .on("state_changed", alert("Report has been successfully uploaded"), alert, () => {

        // Getting Download Link
        storage.ref("images").child(image.name).getDownloadURL()
          .then((url) => {
            setURLArray(url);
            console.log('url');
          })
      });
  }

  // //DOWNLOAD URLS
  // useEffect(() => {
  //   storage.ref().child('images/').listAll()
  //     .then(res => {
  //       res.items.forEach(item => {
  //         item.getDownloadURL()
  //           .then(url => {
  //             setURLArray(URL => [...URL, url]);
  //           })
  //       })
  //     })
  // }, [])





  async function fetchUsers() {
    try {
      const userData = await API.graphql(graphqlOperation(listUsers));
      const users = userData.data.listUsers.items;

      console.log(users);
      setUsers(users);
    } catch (err) {
      console.log('error fetching users');
    }
  }

  async function fetchReports() {
    try {
      const reportData = await API.graphql(graphqlOperation(listReports));
      const reports = reportData.data.listReports.items;

      console.log(reports);
      setReports(reports);
    } catch (err) {
      console.log('error fetching user reports');
    }
  }


  const [reports, setReports] = useState([]);


  const [reportForm, setReportForm] = useState({
    userReportsId: listUsers.id,
    reportLink: ""
  });




  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Report has been successfully created");

    API.graphql(graphqlOperation(createReport, { input: reportForm })).then(e => {
      setReportForm({
        userReportsId: "",
        reportLink: ""
      });
      return fetchReports();
    }).catch(err => {
      console.error(err);
    });
  }

  const handleChange = (key) => {
    return (e) => {
      setReportForm({
        ...reportForm,
        [key]: e.target.value
      });
    }
  }

 


  return (
    <div className="App">
      <PageHeader currentUser={props.currentUser}></PageHeader>

      <h1 style={{ marginTop: '30px', marginBottom: '30px' }} className={profileStyle.h1}>
        Upload Patient Reports
      </h1>

      <div style={{ height: '1100px' }} className={`${profileStyle['profile-box']} ${profileStyle['primary-color']}${profileStyle['profile-box2']} ${profileStyle['primary-color']}`} >
        <div style={{ height: '1000px' }} className={`${profileStyle['profile-textbox']} ${profileStyle['profile-textbox2']}`}>
          <div className={profileStyle['profile-innertext']}>
            <center>

              <div style={{ border: '2px solid gray', height: '300px' }}>
                <div style={{ fontWeight: '500', fontSize: '30px', textAlign: 'center', fontFamily: 'monospace', marginTop: '30px', fontWeight: '550' }}>
                  Step 1: Upload a Report and Copy Link
                </div>
                <div style={{ marginTop: '40px' }}>
                  <input type="file" onChange={(e) => { setImage(e.target.files[0]) }} />
                </div>
                <button style={{ marginTop: '30px', height: '40px', width: '550px', fontSize: '20px', backgroundColor: '#7ec4e8', border: '1px solid gray', fontWeight: 'bold' }}
                  onClick={upload}>
                  Click to Upload a Report</button>
                  <br/><br/>

                  <a href={URL}>{URL}</a>
              </div>
            </center>

            <div style={{ border: '2px solid gray', height: '400px', marginTop: '50px' }}>
              <div style={{ fontWeight: '500', fontSize: '30px', textAlign: 'center', fontFamily: 'monospace', marginTop: '30px', fontWeight: '550' }}>
                Step 2: Upload Report to Patient 
              </div>


              <form onSubmit={handleSubmit}>
                <div style={{ fontSize: "25px" }}>Select Patient: 
                <select onChange={handleChange("userReportsId")}
                  style={{ height: '40px', width: '800px', display: 'inline', margin: '30px', fontSize: '20px', textAlign: 'center', backgroundColor:'white',   border: '1px solid gray' }} >
                  {
                    users.map((listUsers) => (
                      <option  style={{fontSize:'20px'}} value={listUsers.id}>{(listUsers.id).toUpperCase()}</option>
                    ))
                  }
                </select> 
                </div>

                <div style={{ fontSize: "25px" }}>Paste URL: 
                <input style={{ height: '40px', width: '800px', display: 'inline', margin: '30px', fontSize: '20px', textAlign: 'center',   border: '1px solid gray' }}
                 type="text" onChange={handleChange("reportLink")}  placeholder="Copy and paste URL from step 1" /> 
                </div>
                <button style={{ marginTop: '30px', height: '40px', width: '550px', fontSize: '20px', backgroundColor: '#7ec4e8', border: '1px solid gray', fontWeight: 'bold' }}
                 type="submit">Upload Report to Patient</button>
              </form>

             



            </div>
            <a href="/newReports">
              <button style={{ marginTop: '50px', height: '40px', width: '550px', fontSize: '20px', backgroundColor: '#7ec4e8', border: '1px solid gray', fontWeight: 'bold' }}
              >Upload new report</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}



export {
  storage, firebase, NewReports as default
}