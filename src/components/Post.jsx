import React, { useState } from "react";
import swal from "sweetalert";
import { getPostOffices } from "../services/api";

const Post = () => {
  const [pincode, setPincode] = useState("");
  const [postOffices, setPostOffices] = useState([]);

  const handleClick = async () => {
    if (pincode.length > 4) {
      setPostOffices("");
      let po = await getPostOffices(pincode);
      if (po.length > 0) {
        setPostOffices(po);
      }
    } else {
      swal("Oops!", "Please Enter A Valid Pincode!", "error");
    }
  };

  const handleChange = (event) => {
    setPincode(event.target.value);
  };

  return (
    <>
      <div>
        <div className="card text-center">
          <div className="headDesign">Search Post Offices By Pincodes</div>

          <div className="mt-3 mb-3">
            <input
              className="input-field"
              type="text"
              placeholder="Enter your Pincode"
              onChange={handleChange}
            />
          </div>

          <button className="button" onClick={handleClick}>
            {" "}
            Search{" "}
          </button>
        </div>
        {postOffices.length > 0 && (
          <div className="card card_width_cstm text-center">
            <h2>
              {postOffices.length} Post Offices in {postOffices[0].district} District
            </h2>

            <hr />
            <div className="scrollable">
              {postOffices.map((gyanve, i) => {
                return (
                  <div key={gyanve.pin} className="post_office_card mt-3">
                    <div className="rltv_counting">{`#${i + 1}`}</div>
                    <div className="rltv_pin">PIN: {gyanve.pin}</div>
                    <div className="rltv_phone">
                      <b>phone: </b>
                      {gyanve.phone}
                    </div>
                    <div className="top">
                      <div>
                        <lable className="text_bold">Office Name: </lable>
                        <span>{gyanve.office}</span>
                      </div>
                      <div className="ml-3">
                        <lable className="text_bold">Office Type: </lable>
                        <span>{gyanve.office_type}</span>
                      </div>
                    </div>
                    <div className="bottom">
                      <div>
                        <lable className="text_bold">Circle: </lable>
                        <span>{gyanve.circle}</span>
                      </div>
                      <div className="ml-3">
                        <lable className="text_bold">District: </lable>
                        <span>{gyanve.district}</span>
                      </div>
                      <div className="ml-3">
                        <lable className="text_bold">Division: </lable>
                        <span>{gyanve.division}</span>
                      </div>
                      <div className="ml-3">
                        <lable className="text_bold">Region: </lable>
                        <span>{gyanve.region}</span>
                      </div>
                      <div className="ml-3">
                        <lable className="text_bold">Taluk: </lable>
                        <span>{gyanve.taluk}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Post;
