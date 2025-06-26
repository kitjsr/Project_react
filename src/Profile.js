import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import "./Profile.css";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Button from 'react-bootstrap/Button';


import * as formik from "formik";
import * as yup from "yup";

export const Profile = () => {
    const { Formik } = formik;
    
      const schema = yup.object().shape({
        businessName: yup.string().required(),
        businessType: yup.string().required(),
        businessCategory: yup.string().required(),
        mobile: yup.number().required(),
        email: yup.mixed().required(),
        gst: yup.mixed().required(),
        state: yup.string().required(),
        pincode: yup.number().required(),
        address: yup.mixed().required(),
      });
  return (
    <Container className='heading'>
        <Row style={{padding:'0 10px'}}>
            <Col>
                <Row>
            <Col>
                <h3>Create Profile</h3>
            </Col>
        </Row>
        <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
              businessName: "",
              businessType:"",
              businessCategory:"",
              mobile: "",
              email: "",
              gst: "",
              pincode: "",
              address: "",
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
            <Row>
                <Col md={4}>
                    {/* <p className='add'>Add <br/>logo<EditOutlinedIcon /></p> */}
                    <Form.Group className="mb-3" 
                  controlId="validationFormik04">
                        <Form.Label>Add logo</Form.Label>
        <Form.Control type="file"/>
      </Form.Group>
                </Col>
            </Row>
            <Row className='heading1'>
                <Col md={4}>
                    <p>Business Details</p>
                </Col>
                <Col md={4}>
                    <p>More Details</p>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Form.Group className="mb-3" 
                  controlId="validationFormik04">
                        <Form.Label>Business name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Business Name" 
                                                name="businessName"
                                                value={values.businessName}
                                                onChange={handleChange}
                                                isValid={touched.businessName && !errors.businessName}
                        
                                                isInvalid={!!errors.businessName}
                                              />
                        
                                              <Form.Control.Feedback type="invalid">
                                                {errors.businessName}
                                              </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group className="mb-3" controlId="validationFormik04">
                        <Form.Label>Business type</Form.Label>
                        <Form.Select aria-label="Default select example" 
                                                name="businessType"
                                                value={values.businessType}
                                                onChange={handleChange}
                                                isValid={touched.businessType && !errors.businessType}
                        
                                                isInvalid={!!errors.businessType}>
                        
                                              
                            <option>Select Business Type</option>
                            <option value="1">Retail</option>
                            <option value="2">Wholesale</option>
                            <option value="3">Distributor</option>
                            <option value="4">Manufacturing</option>
                            <option value="5">Service</option>
                            <option value="6">Others</option>
                            <Form.Control.Feedback type="invalid">
                                                {errors.businessType}
                                              </Form.Control.Feedback>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={4} rowspan={2}>
                    <Form.Group className="mb-3" controlId="validationFormik04">
                        <Form.Label>Business Category</Form.Label>
                        <Form.Select aria-label="Default select example" 
                                                name="businessCategory"
                                                value={values.businessCategory}
                                                onChange={handleChange}
                                                isValid={touched.businessCategory && !errors.businessCategory}
                        
                                                isInvalid={!!errors.businessCategory}>
                        
                                              
                            <option>Select Business Category</option>
                            <option value="1">Retail</option>
                            <option value="2">Wholesale</option>
                            <option value="3">Distributor</option>
                            <option value="4">Manufacturing</option>
                            <option value="5">Service</option>
                            <option value="6">Others</option>
                            <Form.Control.Feedback type="invalid">
                                                {errors.businessCategory}
                                              </Form.Control.Feedback>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Form.Group className="mb-3" controlId="validationFormik04">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="digit" placeholder="Enter Phone Number" 
                                                name="mobile"
                                                value={values.mobile}
                                                onChange={handleChange}
                                                isValid={touched.mobile && !errors.mobile}
                        
                                                isInvalid={!!errors.mobile}
                                              />
                        
                                              <Form.Control.Feedback type="invalid">
                                                {errors.mobile}
                                              </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group className="mb-3" controlId="validationFormik04">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" 
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                isValid={touched.email && !errors.email}
                        
                                                isInvalid={!!errors.email}
                                              />
                        
                                              <Form.Control.Feedback type="invalid">
                                                {errors.email}
                                              </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group className="mb-3" controlId="validationFormik04">
                        <Form.Label>GSTIN</Form.Label>
                        <Form.Control type="number" placeholder="Enter GSTIN" 
                                                name="gst"
                                                value={values.gst}
                                                onChange={handleChange}
                                                isValid={touched.gst && !errors.gst}
                        
                                                isInvalid={!!errors.gst}
                                              />
                        
                                              <Form.Control.Feedback type="invalid">
                                                {errors.gst}
                                              </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Form.Group className="mb-3" controlId="validationFormik04">
                        <Form.Label>State</Form.Label><Form.Select aria-label="Default select example" 
                                                name="state"
                                                value={values.state}
                                                onChange={handleChange}
                                                isValid={touched.state && !errors.state}
                        
                                                isInvalid={!!errors.state}>
                        
                                              
                            <option>Select state</option>
                            <option value="1">Retail</option>
                            <option value="2">Wholesale</option>
                            <option value="3">Distributor</option>
                            <option value="4">Manufacturing</option>
                            <option value="5">Service</option>
                            <option value="6">Others</option>
                            <Form.Control.Feedback type="invalid">
                                                {errors.state}
                                              </Form.Control.Feedback>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group className="mb-3" controlId="validationFormik04">
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control type="number" placeholder="Enter pincode" 
                                                name="pincode"
                                                value={values.pincode}
                                                onChange={handleChange}
                                                isValid={touched.pincode && !errors.pincode}
                        
                                                isInvalid={!!errors.pincode}
                                              />
                        
                                              <Form.Control.Feedback type="invalid">
                                                {errors.pincode}
                                              </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group className="mb-3" controlId="validationFormik04">
                        <Form.Label>Business Address</Form.Label>
                        <Form.Control as="textarea" placeholder='Enter Business Address' rows={3} 
                                                name="address"
                                                value={values.address}
                                                onChange={handleChange}
                                                isValid={touched.address && !errors.address}
                        
                                                isInvalid={!!errors.address}
                                              />
                        
                                              <Form.Control.Feedback type="invalid">
                                                {errors.address}
                                              </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col className='but'>
                    <Button variant="danger" type='submit'>Save</Button>
                </Col>
            </Row>
        </Form>
            )}
          </Formik>
            </Col>
        </Row>
    </Container>
  )
}

export default Profile
