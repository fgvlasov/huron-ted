import React, { useState } from "react";
import { Heading, Box } from "@chakra-ui/react";
import AccountBlock from "../../__common/account/AccountBlock";

export default function Appic__PageAccount({ ...props }) {
  return (
    <>
      <Heading as="h1" fontSize="4xl" noOfLines={1}>
        Applicant Account for Appic
      </Heading>
      <Heading as="h2" fontSize="2xl" noOfLines={1} py={5}>
        Access Credentials
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
        title="Password"
        parameter="*******"
        name="Password"
        type="password"
        buttonHide="false"
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
      <Heading as="h2" fontSize="2xl" noOfLines={1} py={5}>
        Personal Information
      </Heading>

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
