import React from "react";
import styled from "@emotion/styled";
import {
  colors,
} from "../styles";

const TrackReviews = ({ track }) => {
  const {
    reviewScore,
  } = track;

  return (
    <DetailRow>
      <ReviewsContainer>
        <h4>Reviews</h4>
        <p>Average review score: {reviewScore}/10</p>
      </ReviewsContainer>
    </DetailRow>
  );
};

export default TrackReviews;

const ReviewsContainer = styled.div({
  width: "100%",
  textAlign: "center",
});

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
