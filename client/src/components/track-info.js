import React from "react";
import styled from "@emotion/styled";
import {
  colors,
  Button,
  IconRun,
  IconView,
  IconTime,
  IconBook,
} from "../styles";
import { Link } from "react-router-dom";

const TrackInfo = ({ track }) => {
  const {
    author,
    duration,
    modulesCount,
    modules,
    numberOfViews,
  } = track;

  return (
    <DetailRow>
      <DetailItem>
        <h4>Track details</h4>
        <IconAndLabel>
          <IconView width="16px" />
          <div id="viewCount">{numberOfViews} view(s)</div>
        </IconAndLabel>
        <IconAndLabel>
          <IconBook width="14px" height="14px" />
          <div>{modulesCount} modules</div>
        </IconAndLabel>
        <IconAndLabel>
          <IconTime width="14px" />
          <div>{duration}</div>
        </IconAndLabel>
      </DetailItem>
      <DetailItem style={{ paddingLeft: "50px" }}>
        <h4>Author</h4>
        <AuthorImage src={author.photo} />
        <AuthorName>{author.name}</AuthorName>
      </DetailItem>
      <div>
        <StyledLink to={`./module/${modules[0]["id"]}`}>
          <Button
            icon={<IconRun width="20px" />}
            color={colors.pink.base}
            size="large"
          >
            Start Track
          </Button>
        </StyledLink>
      </div>
    </DetailRow>
  );
};

export default TrackInfo;

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "white",
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

const DetailItem = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  color: colors.textSecondary,
  alignSelf: "center",
});

const AuthorImage = styled.img({
  height: 30,
  width: 30,
  marginBottom: 8,
  borderRadius: "50%",
  objectFit: "cover",
});

const AuthorName = styled.div({
  lineHeight: "1em",
  fontSize: "1em",
});

const IconAndLabel = styled.div({
  display: "flex",
  flex: "row",
  alignItems: "center",
  maxHeight: 20,
  width: "100%",
  div: {
    marginLeft: 8,
  },
  svg: {
    maxHeight: 16,
  },
  "#viewCount": {
    color: colors.pink.base,
  },
});
