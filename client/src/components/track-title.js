import React from "react";
import styled from "@emotion/styled";
import {
  colors,
} from "../styles";

const TrackTitle = ({ track }) => {
  const {
    title,
  } = track;

  return (
    <DetailRow>
      <h1>{title}</h1>
    </DetailRow>
  );
};

export default TrackTitle;

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
