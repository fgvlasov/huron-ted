import {
  Heading,
  Stack,
  HStack,
  VStack,
  Icon,
  Box,
  Wrap,
  Button,
} from "@chakra-ui/react";
import { FiHome, FiCheckCircle, FiUsers } from "react-icons/fi";
import DashbordBlock from "../components/dashbord/block";

export default function Dashbord() {
  return (
    <>
      <Heading as="h1" fontSize="4xl" noOfLines={1}>
        Dashbord
      </Heading>
      <hr />
      <DashbordBlock
        icon={FiHome}
        title="Track"
        name="Humboldt Park Health"
        address="3441 - PMSR/RPA"
        director="Lewis M. Santangelo DPM"
        rightButtonName="Switch"
      />
      <hr />
      <DashbordBlock
        icon={FiCheckCircle}
        title="Status"
        text="The track is currently Active in the March"
        rightButtonName="Edit"
      />
      <hr />
      <DashbordBlock
        icon={FiUsers}
        title="Positions"
        text="This track is offering 1 Position in the March"
        rightButtonName="Edit"
      />
    </>
  );
}
