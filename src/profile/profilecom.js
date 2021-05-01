import React from "react";
import PropTypes from "prop-types";
import "./profilecom.css";

export default function Profile(props) {
  const styleObject ={color:"red", textAlign:"start"}
  return (
    <div className="profile-card">
      <div className="imag">{props.children}</div>
      <div style={styleObject}>
        <h3>
          <span className="label"> Name : </span>
          {props.fullName}{" "}
        </h3>
        <p>
          {" "}
          <span className="label"> Profession : </span>
          {props.profession}{" "}
        </p>
        <p>
          {" "}
          <span className="label"> Bio : </span>
          {props.bio}{" "}
        </p>

        <button
          onClick={() => props.handleName(props.fullName)}
          className="btn btn-profile"
        >
          Click Me{" "}
        </button>
      </div>
    </div>
  );
}

Profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  handleName: PropTypes.func
};

Profile.defaultProps = {
  fullName: "No Data ",
  profession: "No Data ",
  bio: "No Data ",
  handleName: () => {
    alert("There is no Props ");
  }
};
