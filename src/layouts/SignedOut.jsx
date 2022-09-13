import React, {useState} from "react";

import { Button, Grid, Header, Icon, Modal, Segment,Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function SignedOut() {
  const [open, setOpen] = useState(false);

  const handleModal = (value) => {
    setOpen(value);
  };
  return (
    <div>
      <Menu.Item>
        <span>
          <Button
            circular
            color="orange"
            content="Log-in"
            onClick={() => handleModal(true)}
          />

          <Modal
            basic
            dimmer
            onClose={() => handleModal(false)}
            onOpen={() => handleModal(true)}
            open={open}
            size="small"
          >
            <Header icon as="h2" className="orbitron">
              <Icon name="sign-in" />
              What type of account do you want to log into ?
            </Header>

            <Modal.Actions>
              <Grid>
                <Grid.Row>
                  <Grid.Column width="7">
                    <Button
                      circular
                      fluid
                      color="teal"
                      content="Candidate"
                      as={NavLink}
                      to={"/employeeSignIn"}
                      onClick={() => setOpen(false)}
                    ></Button>
                  </Grid.Column>
                  <Grid.Column width="2">
                    <Segment basic className="or">
                      or
                    </Segment>
                  </Grid.Column>
                  <Grid.Column width="7">
                    <Button
                      circular
                      fluid
                      color="orange"
                      content="Employer"
                      as={NavLink}
                      to={"/employerSignIn"}
                      onClick={() => setOpen(false)}
                    ></Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Modal.Actions>
          </Modal>
        </span>
        <Button
          circular
          color="orange"
          as={NavLink}
          to="/signUp"
          style={{ marginLeft: "0.5em" }}
        >
          <strong>Sign up</strong>
        </Button>
      </Menu.Item>
    </div>
  );
}
