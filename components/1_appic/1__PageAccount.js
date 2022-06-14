import React, { useState } from "react";
import { Heading, Box } from "@chakra-ui/react";
import AccountBlock from "../__common/AccountBlock";

export default function Appic__PageAccount({ ...props }) {
  return (
    <>
      <Heading as="h1" fontSize="4xl" noOfLines={1}>
        Account for Appic
      </Heading>
      <AccountBlock
        title="Email"
        parameter="tester+app@natmatch.com"
        name="Humboldt Park Health"
        type="email"
        rightButton="Edit"
        isEditable
        hidePassword
      />

      <AccountBlock
        title="Country"
        parameter="*******"
        name="Humboldt Park Health"
        type="password"
        buttonHide="true"
        rightButton="Edit"
      />

      <AccountBlock
        title="Sequrity
		Questions"
        parameter="tester+app@natmatch.com"
        type="questions"
        name="Humboldt Park Health"
        rightButton="Edit"
      />

      <AccountBlock
        title="Timezone"
        parameter="America/Eastern Time (US & Canada)"
        name="Humboldt Park Health"
        type="address"
        rightButton="Edit"
      />
    </>
  );
}
