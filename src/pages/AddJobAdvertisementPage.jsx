import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import JobAdvertisementService from "../services/jobAdvertisementService";
import JobService from "../services/jobService";
import CityService from "../services/cityService";
import {
  Container,
  Grid,
  Form,
  Button,
  Modal,
  Header,
  Icon,
} from "semantic-ui-react";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function AddJobAdvertisementPage({ id }) {
  const { user } = useSelector((state) => state.signIn);

  const [jobTitles, setJobTitles] = useState([]);
  const [cities, setCities] = useState([]);
  const [open, setOpen] = useState(false);

  let jobAdvertisementService = new JobAdvertisementService();
  let jobTitleService = new JobService();
  let cityService = new CityService();

  useEffect(() => {
    jobTitleService.getJobs().then((result) => setJobTitles(result.data.data));
    cityService.getCities().then((result) => setCities(result.data.data));
  }, []);

  const jobTitleOptions = jobTitles.map((jobTitle) => ({
    key: jobTitle.id,
    text: jobTitle.name,
    value: jobTitle,
  }));

  const cityOptions = cities.map((city) => ({
    key: city.id,
    text: city.name,
    value: city,
  }));

  const initialValues = {
    employer: { id: user.id },
    job: {},
    city: {},
    expectations: "",
    openPositions: "",
    minSalary: "",
    maxSalary: "",
    dueDate: "",
  };

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    jobAdvertisementService.addJobAdvertisement(
      values.employer.id,
      values.city.id,
      values.dueDate,
      values.expectations,
      values.job.id,
      values.minSalary,
      values.maxSalary,
      values.openPositions
    );
    handleModal(true);
    setTimeout(() => {
      resetForm();
    }, 100);
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
  });

  const handleModal = (value) => {
    setOpen(value);
  };

  const handleChange = (fieldName, value) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div>
      <Container className="content">
        <h2>Post a job</h2>

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Select
                    id="jobName"
                    name="jobName"
                    label="Job Title"
                    options={jobTitleOptions}
                    onChange={(event, data) => handleChange("job", data.value)}
                    value={formik.values.job}
                  />

                  <Form.Select
                    id="cityName"
                    name="cityName"
                    label="City"
                    options={cityOptions}
                    onChange={(event, data) => handleChange("city", data.value)}
                    value={formik.values.city}
                  />

                  <Form.Group widths="equal"></Form.Group>

                  <Form.TextArea
                    id="expectations"
                    name="expectations"
                    label="Job Description and Expectations"
                    placeholder=". . ."
                    onChange={formik.handleChange}
                    value={formik.values.expectations}
                  />

                  <Form.Group widths="equal">
                    <Form.Input
                      id="openPositions"
                      name="openPositions"
                      label="Number of Open Positions"
                      placeholder="1"
                      onChange={formik.handleChange}
                      value={formik.values.openPositions}
                    />
                    <Form.Input
                      id="dueDate"
                      name="dueDate"
                      label="Closing Date"
                      placeholder="YYYY-MM-DD"
                      onChange={formik.handleChange}
                      value={formik.values.dueDate}
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Input
                      id="minSalary"
                      name="minSalary"
                      label="Salary Min (Optional)"
                      placeholder="5000 ₺"
                      onChange={formik.handleChange}
                      value={formik.values.minSalary}
                    />
                    <Form.Input
                      id="maxSalary"
                      name="maxSalary"
                      label="Salary Max (Optional)"
                      placeholder="10000 ₺"
                      onChange={formik.handleChange}
                      value={formik.values.maxSalary}
                    />
                  </Form.Group>

                  <br />

                  <Button
                    circular
                    fluid
                    type="submit"
                    color="orange"
                    content="Post"
                  />
                </Form>
              </Formik>
            </Grid.Column>
            <Grid.Column width="3" />
          </Grid.Row>
        </Grid>

        <Modal
          dimmer
          onClose={() => handleModal(false)}
          onOpen={() => handleModal(true)}
          open={open}
          size="small"
        >
          <Header icon as="h2" className="orbitron">
            <Icon name="thumbs up" />
            Thank you posting a new job.
          </Header>

          <Modal.Actions>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Button
                    circular
                    fluid
                    color="teal"
                    content="Close"
                    onClick={() => setOpen(false)}
                  ></Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Actions>
        </Modal>
      </Container>
    </div>
  );
}
