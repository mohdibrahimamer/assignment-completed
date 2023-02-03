import React, { useState } from "react";
import "./showdetails.css";

const ShowDetails = ({
  id,
  name,
  username,
  email,
  address,
  geo,
  phone,
  website,
  company,
}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div key={id} className="details-data">
        <p className="company-name">{company.name}</p>

        <div className="details-contacts">
          <h1>contact</h1>
          <p>{name}</p>
        </div>

        <div className="details-cities">
          <h1>city</h1>
          <p>{address.street}</p>
        </div>

        <div className="details-states">
          <h1>state</h1>
          <p>{address.city}</p>
        </div>

        <button
          type="button"
          className="btn-title"
          onClick={() => setShow(!show)}
        >
          {show ? "hide details" : "view details"}
        </button>

        {show ? (
          <div>
            <div className="show-desc">
              <h1>description</h1>
              <p>
                <span>{company.name}</span>
                <span>{company.catchPhrase}</span>
                <span>{company.bs}</span>
              </p>
            </div>

            <div className="show-contacts">
              <h1>contact person</h1>
              <p>{name}</p>
            </div>

            <div className="show-emails">
              <h1>email</h1>
              <p>{email}</p>
            </div>

            <div className="show-phones">
              <h1>phone</h1>
              <p>{phone}</p>
            </div>

            <div className="show-address">
              <h1>address</h1>
              <p>
                {address.street}
                {address.suite}
                {address.city}
                {address.zipcode}
              </p>
            </div>

            <div className="show-city">
              <h1>city</h1>
              <p>{address.city}</p>
            </div>

            <div className="show-state">
              <h1>state</h1>
              <p>{address.city}</p>
            </div>

            <div className="show-country">
              <h1>country</h1>
              <p>{address.street}</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ShowDetails;
