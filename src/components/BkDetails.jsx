import { Box, Button, Grid, Rating } from "@mui/material";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../scss/_bkDetails.scss";

const BkDetails = ({ show, item }) => {
  const navigate = useNavigate();
  if (!show) {
    return null;
  }

  let thumbNail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
  let tiTle = item.volumeInfo && item.volumeInfo.title;
  let autHor = item.volumeInfo && item.volumeInfo.authors;
  let paGes = item.volumeInfo && item.volumeInfo.pageCount;
  let pubLisher = item.volumeInfo && item.volumeInfo.publisher;
  let dateOfPublish = item.volumeInfo && item.volumeInfo.publishedDate;
  let avgRating = item.volumeInfo && item.volumeInfo.averageRating;
  let deScription = item.volumeInfo && item.volumeInfo.description;

  return (
    <div className="overlay">
      <div className="overlay-inner">
        <div className="inner-box">
          <Grid container spacing={6} p={6}>
            <Grid lg={5} md={5} sm={5} xs={5}>
              <img src={thumbNail} alt={tiTle} />
              <Grid>
                <Rating value={avgRating} readOnly precision={0.5} />
              </Grid>
            </Grid>

            <Grid lg={7} md={7} sm={7} xs={7}>
              <h2>{tiTle}</h2>
              {/* <h3 >{autHor}</h3> */}
              {autHor.map((author, i) => (
                <h4 key={i}>
                  {autHor.length >= 2 ? `${i + 1}.` : ""}
                  {author}
                </h4>
              ))}
              <h6>Pages: {paGes}</h6>
              <h6>
                {pubLisher} | <span>{dateOfPublish}</span>
              </h6>
              <Box pt={2} textAlign="inline">
                <Button variant="contained" color="error" href="/">
                  Back
                </Button>
                &nbsp;&nbsp;
                <Link to="/chat">
                  <Button variant="outlined" endIcon={<PhoneForwardedIcon />}>
                    CHAT
                  </Button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/payment">
                  <Button variant="outlined">Online Payment</Button>
                </Link>
              </Box>
            </Grid>
            <Grid>
              <hr />
              <hr />
              <h5>Description</h5>
              {deScription}
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default BkDetails;
