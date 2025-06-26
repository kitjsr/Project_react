import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export const ViewProfile = () => {
  const profiles = [
        {
            "id":1,
            "businessName":"Medicine",
            "businessType":"Wholesale",
            "businessCategory":"Wholesale",
            "phoneNumber":7667017876,
            "email":"esha@gmail.com",
            "gstIN":"07ABCDE1234F2Z5",
            "state":"Jharkhand",
            "pincode":831008,
            "businessAddress":"Telco , Jamshedpur"
        },
        {
            "id":2,
            "businessName":"ShoppingMall",
            "businessType":"Others",
            "businessCategory":"Others",
            "phoneNumber":6287752535,
            "email":"anu@gmail.com",
            "gstIN":"09ABCDE1234F2Y5",
            "state":"Jharkhand",
            "pincode":831019,
            "businessAddress":"Birsanagar, Jamshedpur"
        },
        {
            "id":3,
            "businessName":"Clothing",
            "businessType":"Manufacturing",
            "businessCategory":"Manufacturing",
            "phoneNumber":9235544424,
            "email":"rita@gmail.com",
            "gstIN":"07ABCDE1234F2Z5",
            "state":"Delhi",
            "pincode":110049,
            "businessAddress":"New Delhi , India"
        },
    ]
  return (
    <Container>
      <Row>
        {/* <Col md={2}>
          <Sidebar />
        </Col> */}
        <Col>
          <Row>
            {/* <Col md={4}></Col> */}
            <Col md={12}>
              <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Business Name</th>
                <th>Business Type </th>
                <th>Business Category</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>GSTIN</th>
                <th>State</th>
                <th>Pincode</th>
                <th>Business Address</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {profiles.map((profile) => (
                <tr>
                  <td>{profile.id}</td>
                  <td>{profile.businessName}</td>
                  <td>{profile.businessType}</td>
                  <td>{profile.businessCategory}</td>
                  <td>{profile.phoneNumber}</td>
                  <td>{profile.email}</td>
                  <td>{profile.gstIN}</td>
                  <td>{profile.state}</td>
                  <td>{profile.pincode}</td>
                  <td>{profile.businessAddress}</td>
                  <td><EditOutlinedIcon style={{color:"green"}}/></td>
                  <td><DeleteOutlineOutlinedIcon style={{color:"red"}}/></td>
                </tr>
              ))}
            </tbody>
          </Table>
          </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewProfile;


