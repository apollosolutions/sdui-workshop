import { faker } from '@faker-js/faker';
import { humanReadableTimeFromSeconds } from './helpers.js';

const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },

    // get a single track by ID, for the track page
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },

    // get a single module by ID, for the module detail page
    module: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getModule(id);
    },

    // get a track's details via SDUI
    sduiTrackDetails: async (_, { id }, { dataSources }) => {
      const track = await dataSources.trackAPI.getTrack(id);

      return [
        { __typename: "TrackTitle", track },
        { __typename: "TrackInfo", track },
        { __typename: "TrackReviews", track },
        { __typename: "TrackModules", track },
      ];
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },

    duration: ({ length }) => {
      return humanReadableTimeFromSeconds(length);
    },

    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    },

    reviewScore: () => faker.number.float({min: 1, max: 10, precision: 0.1})
  },
  Module: {
    duration: ({ length }) => {
      return humanReadableTimeFromSeconds(length);
    },
  },
};

export default resolvers;
