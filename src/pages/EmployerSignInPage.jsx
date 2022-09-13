import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import { useFormik } from "formik";
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { signIn } from "../store/actions/signInActions";
import EmployerService from "../services/employerService";



export default function EmployerSignInPage() {


    let employerService = new EmployerService();

    //const navigate = useNavigate()

    const accountType = 'Employer';

    const dispatch = useDispatch();

    const handleSignIn = (user)=>{
      dispatch(signIn(user))
      console.log("Giriş yapıldı")
    }

    const userSignInFormik = useFormik({
        initialValues: {
          mail: '',
          password: '',

        },
        onSubmit: values => {
          console.log(JSON.stringify(values, null, 2));
          employerService.checkEmployer(values.mail,values.password).then((result)=>result===null?console.log("hatali"):handleSignIn({id : result.data.data.id, accountType : accountType}))
          
        },
      });

 

  return (<div>
      <Grid
        textAlign="center"
        style={{ height: '60vh' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="black" textAlign="center">
            <Image src="https://www.digitalhrms.com/images/logo.svg" size="massive" /> Log-in to your employer account
          </Header>
          <Form size="large" onSubmit={userSignInFormik.handleSubmit}>
            <Segment stacked>
              <Form.Input
                id="mail"
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                onChange={userSignInFormik.handleChange}
                value={userSignInFormik.values.mail}
              />
              <Form.Input
                id="password"
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="current-password"
                onChange={userSignInFormik.handleChange}
                value={userSignInFormik.values.password}
              />

              <Button color="orange" fluid size="large" type="submit">
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Link  to={'/signUp'}>Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
    
  );


  
  
}
