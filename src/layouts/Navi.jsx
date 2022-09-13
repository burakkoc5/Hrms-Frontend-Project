import React, { useState } from "react";
import { Dropdown, Menu, Container } from "semantic-ui-react";
import EmployeeSignedIn from "./EmployeeSignedIn";
import EmployerSignedIn from "./EmployerSignedIn";
import SignedOut from "./SignedOut";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navi() {
  const { newSignIn, user } = useSelector((state) => state.signIn);

  return (
    <div>
      <Menu inverted color="teal" secondary>
        <Container>
          <Menu.Item>
            <Link to={"/"}> Home </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={"/advertisements"}> Job Advertisements </Link>
          </Menu.Item>

          <Menu.Menu position="right">
            <Dropdown item text="Language">
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>
              {newSignIn === true ? (
                user.accountType === "Employee" ? (
                  <EmployeeSignedIn></EmployeeSignedIn>
                ) : (
                  <EmployerSignedIn></EmployerSignedIn>
                )
              ) : (
                <SignedOut></SignedOut>
              )}
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
