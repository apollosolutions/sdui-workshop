import React from "react";
import styled from "@emotion/styled";
import { colors } from "../styles";

const TrackModules = ({ track }) => {
  const { modules } = track;

  return (
    <DetailRow>
      <ModuleListContainer>
        <DetailItem>
          <h4>Modules</h4>
          <ul>
            {modules.map((module) => (
              <li key={module.title}>
                <div>{module.title}</div>
                <ModuleLength>{module.duration}</ModuleLength>
              </li>
            ))}
          </ul>
        </DetailItem>
      </ModuleListContainer>
    </DetailRow>
  );
};

export default TrackModules;

const DetailRow = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  paddingBottom: 20,
  marginBottom: 20,
  borderBottom: `solid 1px ${colors.silver.dark}`,
});

const DetailItem = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  color: colors.textSecondary,
  alignSelf: "center",
});

const ModuleListContainer = styled.div({
  width: "100%",
  ul: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    marginTop: 5,
    li: {
      fontSize: "1em",
      display: "flex",
      justifyContent: "space-between",
      paddingBottom: 2,
    },
  },
});

const ModuleLength = styled.div({
  marginLeft: 30,
  color: colors.grey.light,
});
