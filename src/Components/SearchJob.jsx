import React from "react";
import styled from "styled-components";
import "./SearchJob.css";
const ContentSection = styled.div`
  width: 100%;
  height: 70vh;
  padding: 20px 0px;
  background-color: rgb(249, 249, 249);
`;
const InnerContentSection = styled.div`
  width: 70%;
  margin: auto;
  text-align: center;
  // background-color: rgb(249, 249, 249);
`;

export const SearchJob = () => {
  let textArray = [
    "Architecture",
    "Interior",
    "Urban Planning",
    "Commercial Architecture",
    "Interior Design",
    "Vernacular Architecture",
    "Computational Deign",
    "Landscape Architecture",
    "Parametic Architecture",
    "Green Architecture",
    "Sustainable Architecture",
    "Residential Architecture",
    "Urban Desian",
  ];
  const [isToggle, setIsToggle] = React.useState(false);
  return (
    <ContentSection>
      <InnerContentSection>
        <h5>What types of jobs interest you?</h5>
        <div id="ToggleDiv">
          <h3 style={isToggle ? { color: "red" } : { color: "blue" }}>
            Full-Time
          </h3>
          <div
            className="checkbox-wrapper-6"
            onClick={() => setIsToggle(!isToggle)}
          >
            <input className="tgl tgl-light" id="cb1-6" type="checkbox" />
            <label className="tgl-btn" for="cb1-6" />
          </div>
          <h3 style={isToggle ? { color: "red" } : { color: "blue" }}>
            Freelance
          </h3>
        </div>
      </InnerContentSection>
      {/* {textArray.map((ele) => {
        return <li>ele</li>;
      })} */}
    </ContentSection>
  );
};
