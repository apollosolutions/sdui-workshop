import React from "react";
import styled from "@emotion/styled";
import {
  colors,
} from "../styles";
import ContentSection from "./content-section";
import MarkDown from "./md-content";
import { GQLComponent } from "./registry";
import { gql, useQuery } from "@apollo/client";

/**
 * Track Detail component renders the main content of a given track:
 * author, length, number of views, modules list, among other things.
 * It provides access to the first module of the track.
 */
const TrackDetail = ({ track }) => {
  const GET_TRACK_SDUI = gql`
    query GET_TRACK_SDUI($track: ID!) {
      sduiTrackDetails(id: $track) {
        ... on TrackTitle {
          track {
            id
            title
          }
        }
        ... on TrackInfo {
          track {
            id
            author {
              id
              name
              photo
            }
            length
            modulesCount
            modules {
              id
              title
              length
            }
            numberOfViews
          }
        }
        ... on TrackModules {
          track {
            id
            modules {
              id
              title
              length
            }
          }
        }
        ... on TrackReviews {
          track {
            id
            reviewScore
          }
        }
      }
    }
  `;

  const SDUIQuery = useQuery(GET_TRACK_SDUI, {
    variables: { track: track.id },
  });

  const {
    description,
    thumbnail,
  } = track;

  return (
    <ContentSection>
      <CoverImage src={thumbnail} alt="" />
      <TrackDetails>
        <GQLComponent
          componentQuery={SDUIQuery}
          componentRoot={"sduiTrackDetails"}
        />
      </TrackDetails>
      <MarkDown content={description} />
    </ContentSection>
  );
};

export default TrackDetail;

/** Track detail styled components */
const CoverImage = styled.img({
  objectFit: "cover",
  maxHeight: 400,
  borderRadius: 4,
  marginBottom: 30,
});

const TrackDetails = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 20,
  borderRadius: 4,
  marginBottom: 30,
  border: `solid 1px ${colors.silver.dark}`,
  backgroundColor: colors.silver.lighter,
  h1: {
    width: "100%",
    textAlign: "center",
    marginBottom: 5,
  },
  h4: {
    fontSize: "1.2em",
    marginBottom: 5,
    color: colors.text,
  },
});
