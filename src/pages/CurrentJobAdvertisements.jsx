import React, { useEffect, useState } from "react";
import { Button, Card } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";


export default function CurrentJobAdvertisements() {
  const [jobAdvertisements, setjobAdvertisements] = useState([]);

  const { user } = useSelector((state) => state.signIn);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisementByEmployerId(user.id)
      .then((result) => setjobAdvertisements(result.data.data));
  });

  return (
    <div>
      <Card.Group itemsPerRow={"1"}>
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
                <Button color="orange" >
                 Edit
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
