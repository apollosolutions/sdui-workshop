## Step-by-step Guide

## Setup

If you do not have the local git branches `sdui-localization` and `sdui-components`, make sure you pull and sync from GitHub so you can quickly jump to the completed code sections

```shell
git checkout -b sdui-localization origin/sdui-localization
git checkout -b sdui-component origin/sdui-components
```

Then start the workshop using the `main` branch

## Schema Localization

- Deprecate the Length field in Module & Track
    - @deprecated(reason: "Use duration instead")
    - Create Duration field
- Move the helpers files to the server
- Create duration resolver for Module & Track
    - Use helper within duration field
- Update queries to use duration
    - `GET_MODULE_AND_PARENT_TRACK`
    - `GET_TRACK`
    - `TRACKS`
- Find all instances of "humanReadableTimeFromSeconds"
    - Replace with use of duration field

## Dynamic Content/Components

- Component Registry
    - Setup Registry Provider - index
    - Setup initalRegistry
- Decompose Track Details - use git checkout
    - `TrackTitle`
    - `TrackInfo`
    - `TrackModules`
    - `TrackReviews`
- Update the Component Registry
- Replace TrackDetails contents with GQLComponent
    - Create SDUI client query
- Create SDUI Schema
    - Track Details Query
    - Track Details Constrained Union
- Create SDUI Resolver
- Showcase the functionality, delete & reorder
