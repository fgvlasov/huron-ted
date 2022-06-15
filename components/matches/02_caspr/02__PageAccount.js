import React, { useState } from "react";
import { Heading, Box } from "@chakra-ui/react";
import AccountBlock from "../../__common/account/AccountBlock";

export default function Caspr__PageAccount({ ...props }) {
  return (
    <>
      <Heading as="h1" fontSize="4xl" noOfLines={1}>
        Applicant Account for Caspr
      </Heading>
      <AccountBlock
        title="Email"
        parameter="tester+app@natmatch.com"
        name="Humboldt Park Health"
        rightButton="Edit"
        isEditable
        buttonHide="true"
        hidePassword
      />

      <AccountBlock
        title="Sequrity
		Questions"
        match="caspr"
        parameter="tester+app@natmatch.com"
        name="Humboldt Park Health"
        rightButton="Edit"
      />
    </>
  );
}
