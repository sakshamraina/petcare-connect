import React from "react";
import "./Price.css";

import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import dogWalk from "../../assets/dogWalk.svg";
import DropIn from "../../assets/DropIn.svg";
import HouseSitting from "../../assets/HouseSitting.svg";

const Price = () => {
  return (
    <div className="wrapper wrapper-Price">
      <div style={{ marginLeft: "3rem", marginRight: "2rem" }}>
        <Card style={{ textAlign: "center" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <img src={dogWalk} alt="dog"></img>
            </Typography>
            <Typography variant="h5" component="div">
              Dog walk
            </Typography>
            {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography> */}
            <Typography variant="body1">
              We’ll take your pup for a 30 minute walk and make sure he or she
              has fresh food and water.
              <br />
              {""}
            </Typography>
            <div
              style={{
                backgroundColor: "#F0F1F7",
                marginTop: "1rem",
                padding: "0.5rem",
                paddingBottom: "2rem"
              }}
            >
              <h1>₹250</h1> <small>PER 30 MIN WALK</small>
              <br></br>
            </div>
          </CardContent>
          {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
      </div>
      <div style={{ marginLeft: "4.5rem", marginRight: "2rem" }}>
        <Card style={{ textAlign: "center" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <img src={DropIn} alt="dog"></img>
            </Typography>
            <Typography variant="h5" component="div">
              Drop-in visit
            </Typography>
            {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography> */}
            <Typography variant="body1">
              We’ll stop by to snuggle, feed, and play with your pets in the
              comfort of their own home.
              <br />
              {""}
            </Typography>
            <div
              style={{
                backgroundColor: "#F0F1F7",
                marginTop: "1rem",
                padding: "0.5rem",
                paddingBottom: "2rem"
              }}
            >
              <h1>₹350</h1> <small>PER 30 MIN WALK</small>
              <br></br>
            </div>
          </CardContent>
          {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
      </div>
      <div style={{ marginLeft: "5rem", marginRight: "3rem" }}>
        <Card style={{ textAlign: "center" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <img src={HouseSitting} alt="dog"></img>
            </Typography>
            <Typography variant="h5" component="div">
              House sitting
            </Typography>
            {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography> */}
            <Typography variant="body1">
              We’ll stay overnight with your pets to make sure they have
              round-the-clock love.
              <br />
              {""}
            </Typography>
            <div
              style={{
                backgroundColor: "#F0F1F7",
                marginTop: "1rem",
                padding: "0.5rem",
                paddingBottom: "2rem"
              }}
            >
              <h1>₹1000</h1> <small>PER NIGHT</small>
              <br></br>
            </div>
          </CardContent>
          {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
      </div>
    </div>
  );
};

export default Price;
