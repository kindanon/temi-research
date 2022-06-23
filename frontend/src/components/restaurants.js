import React, { useState, useEffect } from "react";
import RestaurantDataService from "../services/restaurant";
import { Link } from "react-router-dom";

const Restaurant = (props) => {
  const initialRestaurantState = {
    id: null,
    name: "",
    address: {},
    cuisine: "",
    reviews: [],
  };
  const [restaurant, setRestaurant] = useState(initialRestaurantState);

  const getRestaurant = (id) => {
    RestaurantDataService.get(id)
      .then((response) => {
        setRestaurant(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getRestaurant(props.match.params.id);
  }, [props.match.params.id]);

  const deleteReview = (reviewId, index) => {
    RestaurantDataService.deleteReview(reviewId, props.user.id)
      .then((response) => {
        setRestaurant((prevState) => {
          prevState.reviews.splice(index, 1);
          return {
            ...prevState,
          };
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {restaurant ? (
        <div>
          <h5>{restaurant.name}</h5>
          <p>
            <strong>Model: </strong>
            {restaurant.cuisine}
            <br />
            <strong>Address: </strong>
            {restaurant.address.building} {restaurant.address.street},{" "}
            {restaurant.address.zipcode}
            <br />
            <strong>Cost: </strong>
            {restaurant.address.zipcode}
          </p>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <img
                  className="img-fluid"
                  src={
                    "https://build.ford.com/dig/Ford/Bronco%20Sport/2022/HD-TILE-ACC%5BEXTBCK%5D/Image%5B%7CFord%7CBronco%20Sport%7C2022%7C1%7C1.%7C200A.R9B..PM7..88Q.89H.64T.T7R.4WD.996.SXM.58E.SY3.448.BBD.UCM.%5D/EXT/1/vehicle.png" /*findImages(restaurant._id)*/
                  }
                />
              </div>
              <div className="col-sm">
                <img
                  className="img-fluid"
                  src={
                    "https://build.ford.com/dig/Ford/EcoSport/2022/HD-TILE/Image%5B%7CFord%7CEcoSport%7C2022%7C1%7C1.%7C100A.S3F..PTY..88M.89M.~3JM00_ABFAA.648.T7F.DR--E.99L.58N.SYN.446.VS-AE.CLO.%5D/EXT/1/vehicle.png" /*findImages(restaurant._id)*/
                  }
                />
              </div>
              <div className="col-sm">
                <img
                  className="img-fluid"
                  src={
                    "https://build.ford.com/dig/Ford/Mustang/2022/HD-TILE/Image%5B%7CFord%7CMustang%7C2022%7C1%7C1.%7C300A.P8C..PFA..882.891.~2WW00_BCMAB.SIA.13R.COU.59C.PDS.LRS.LTS.646.T31.RWD.455.99F.50B.77R.58A.SYN.44X.GT.LESS.CLO.%5D/EXT/1/vehicle.png" /*findImages(restaurant._id)*/
                  }
                />
              </div>
            </div>
          </div>

          <h4> Features </h4>
          <div className="row">
            {restaurant.reviews.length > 0 ? (
              restaurant.reviews.map((review, index) => {
                return (
                  <div className="col-lg-4 pb-1" key={index}>
                    <div className="card">
                      <div className="card-body">
                        <p className="card-text">
                          {review.text}
                          <br />
                          <strong>User: </strong>
                          {review.name}
                          <br />
                          <strong>Date: </strong>
                          {review.date}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-sm-4">
                <p>NO DATA LOADED</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <br />
          <p>No restaurant selected.</p>
        </div>
      )}
    </div>
  );
};

export default Restaurant;
