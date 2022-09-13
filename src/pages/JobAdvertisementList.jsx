import React, { useEffect, useState } from "react";
import { Button, Card } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { NavLink } from "react-router-dom";


export default function JobAdvertisementList() {
  const [jobAdvertisements, setjobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((result) => setjobAdvertisements(result.data.data));
  });

  return (
    <div>
      <Card.Group itemsPerRow={"3"}>
        {jobAdvertisements.map((jobAdvertisement) => (
          <Card key={jobAdvertisement.id}>
            <Card.Content>
              <Card.Header>{jobAdvertisement.job.name}</Card.Header>
              <Card.Meta>{jobAdvertisement.employer.companyName}</Card.Meta>
              <Card.Description>
                <strong>{jobAdvertisement.expectations}</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button color="orange" as={NavLink} to={`/advertisements/${jobAdvertisement.id}`}>
                 Job Details
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
