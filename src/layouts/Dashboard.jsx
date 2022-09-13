import React from "react";
import { Routes, Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import AdvertisementDetail from "../pages/AdvertisementDetail";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import EmployerSignInPage from "../pages/EmployerSignInPage";
import EmployeeSignInPage from "../pages/EmployeeSignInPage";
import SignUpPage from "../pages/SignUpPage";
import FilterMenu from "./FilterMenu";
import AddJobAdvertisementPage from "../pages/AddJobAdvertisementPage";
import CurrentJobAdvertisements from "../pages/CurrentJobAdvertisements";

export default function Dashboard() {
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Grid>
              <Grid.Row>
                <Grid.Column width={4}>
                  <FilterMenu></FilterMenu>
                </Grid.Column>
                <Grid.Column width={12}>
                  <JobAdvertisementList />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          }
        />

        <Route
          exact
          path="/advertisements"
          element={
            <Grid>
              <Grid.Row>
                <Grid.Column width={4}>
                  <FilterMenu></FilterMenu>
                </Grid.Column>
                <Grid.Column width={12}>
                  <JobAdvertisementList />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          }
        />

        <Route exact path="/employeeSignIn" element={<EmployeeSignInPage />} />
        <Route exact path="/employerSignIn" element={<EmployerSignInPage />} />
        <Route exact path="/signUp" element={<SignUpPage />} />
        <Route exact path="/employer/addJobAdv" element={<AddJobAdvertisementPage />} />
        <Route exact path="/employer/myAdvertisements" element={<CurrentJobAdvertisements />} />
        

        
        <Route
          exact
          path="/advertisements/:id"
          element={<AdvertisementDetail />}
        />
      </Routes>
    </div>
  );
}
