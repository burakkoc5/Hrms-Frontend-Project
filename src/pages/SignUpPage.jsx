import React from "react";
import { useFormik } from "formik";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Divider,
} from "semantic-ui-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import EmployeeService from "../services/employeeService";





export default function SignUpPage() {

    let employeeService = new EmployeeService();

    const navigate = useNavigate()

    const employeeFormik = useFormik({
        initialValues: {
          name: '',
          surname: '',
          mail: '',
          birthDate: '',
          nationalityId: '',
          password: '',

        },
        onSubmit: values => {
          console.log(JSON.stringify(values, null, 2));
          employeeService.addEmployee(values.birthDate,values.mail,values.name,values.surname,values.password,values.nationalityId).catch((err)=>{
            if (err && err.response) {
              console.log("error :" + err)
            }
          }).then(navigate("/", { replace: true }))
          
        },
      });
  return (
    <div>
      <Grid
        textAlign="center"
        style={{ height: "60vh" }}
        verticalAlign="middle"
      >
        <Grid.Column width={6} floated="left">
          <Header as="h2" color="black" textAlign="center">
            <Image
              src="https://www.digitalhrms.com/images/logo.svg"
              size="massive"
            />{" "}
            {`Are you looking for a new job ? 
            \nCreate a new employee account!                       
            `}
          </Header>
          <Form size="large" onSubmit={employeeFormik.handleSubmit}>
            <Segment stacked>
              <Form.Input
                id='name'
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Name"
                onChange={employeeFormik.handleChange}
                value={employeeFormik.values.name}
              />
              <Form.Input
                id='surname'
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Surname"
                onChange={employeeFormik.handleChange}
                value={employeeFormik.values.surname}
              />
              <Form.Input
              id='mail'
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="Mail "
                type="email"
                onChange={employeeFormik.handleChange}
                value={employeeFormik.values.mail}
              />
              <Form.Input
              id='birthDate'
                fluid
                icon="calendar"
                iconPosition="left"
                placeholder="Birth Date"
                type="text"
                onChange={employeeFormik.handleChange}
                value={employeeFormik.values.birthDate}
              />

              <Form.Input
              id='nationalityId'
                fluid
                icon="world"
                iconPosition="left"
                placeholder="Nationality Id"
                onChange={employeeFormik.handleChange}
                value={employeeFormik.values.nationalityId}
              />
              <Form.Input
              id='password'
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={employeeFormik.handleChange}
                value={employeeFormik.values.password}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password again"
                type="password"
                
              />

              <Button type="submit" color="orange" fluid size="large" >
                Sign Up
              </Button>
            </Segment>
          </Form>
          <Message>
            You already have an account? <Link to="/signIn">Sign In</Link>
          </Message>
        </Grid.Column>

        <Grid.Column floated="right" width={6}>
          <Header as="h2" color="black" textAlign="center">
            <Image
              src="https://www.digitalhrms.com/images/logo.svg"
              size="massive"
            />{" "}
            {`Are you looking for new employees? 
            \nCreate a new employer account!`}
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Company Name"
              />
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="Mail "
                type="email"
              />
              <Form.Input
                fluid
                icon="world"
                iconPosition="left"
                placeholder="Web Address of Company"
                type="url"
              />
              <Form.Input
                fluid
                icon="phone"
                iconPosition="left"
                placeholder="Phone Number"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password again"
                type="password"
              />

              <Button color="orange" fluid size="large">
                Sign Up
              </Button>
            </Segment>
          </Form>
          <Message>
            You already have an account? <Link to="/signIn">Sign In</Link>
          </Message>
        </Grid.Column>
        <Divider vertical> Or </Divider>
      </Grid>
    </div>
  );
}
