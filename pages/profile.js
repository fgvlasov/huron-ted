import { Heading, Stack } from "@chakra-ui/react";
import TrackInfoBlock from "../components/profile/TrackInfoBlock";

export default function Privacy() {
  return (
    <>
      <Heading as="h1">Profile</Heading>
      <hr />
      <Heading as="h2" fontSize={"xl"}>
        Track information
      </Heading>
      <TrackInfoBlock title="Match Code Number:" info="3441" button="none" />
      <TrackInfoBlock
        title="Track description:"
        info="PMSR/RRA"
        button="Edit"
      />
    </>
  );
}
