import {React, useState , useEffect} from "react";
import { useParams } from "react-router";
import { Card, Icon, Image, Grid, GridColumn, GridRow, Button } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function AdvertisementDetail() {
  let { id } = useParams();

  const [jobAdvertisement, setjobAdvertisement] = useState({})

  

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.getJobAdvertisementById(id).then(result=>setjobAdvertisement(result.data.data))
  },[])
  

  return (
    <div>
      <Grid
      
        textAlign="center"
        style={{ height: "60vh", marginTop:'0.5em' }}
        verticalAlign="middle"
      >
        <GridRow
        >
        <Card fluid>

          <Card.Content textAlign="left">
            <Card.Header>Advertiser : {jobAdvertisement.employer!=null ? jobAdvertisement.employer.companyName : ""}</Card.Header>
            <Card.Meta>
              <span className="date">Created in {jobAdvertisement.postingDate}</span>
            </Card.Meta>
            <Card.Description>
            {jobAdvertisement.employer!=null ? jobAdvertisement.employer.companyName : ""}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          <Button icon labelPosition='left'>
            <Icon name='hand pointer' />
              Apply
              </Button>
          </Card.Content>
        </Card>
        </GridRow>
      </Grid>
    </div>
  );
}
