import React, { useState } from "react";
import { Heading, Box } from "@chakra-ui/react";
import AccountBlock from "../../__common/account/AccountBlock";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Appic__PageAccount({ ...props }) {
  const { data, error } = useSWR("/default_account_fields.json", fetcher);
  const { data_user, error_user } = useSWR("/data_user.json", fetcher);
  if (error) return <div>Error loading</div>;
  if (!data) return <div>loading...</div>;
  return (
    <>
      <Heading as="h1" fontSize="4xl" noOfLines={1}>
        Applicant Account for Appic
      </Heading>
      <Box>{data.email.attr_label.appic}</Box>
      <Heading as="h2" fontSize="2xl" noOfLines={1} py={5}>
        Access Credentials
      </Heading>

      <AccountBlock
        title={data.email.attr_label[props.match]}
        parameter="tester+app@natmatch.com"
        //{data_user.user.email}
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
