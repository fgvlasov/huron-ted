import React, { useState } from "react";
import { Heading, Box, useColorModeValue } from "@chakra-ui/react";
import AccountBlock from "../../__common/account/AccountBlock";
import data from "../../../data/default_account_fields.json";
import data_user from "../../../data/data_user.json";

export default function Appic__PageAccount({ ...props }) {
  return (
    <>
      <Heading as="h1" fontSize="4xl" noOfLines={1}>
        Applicant Account for Appic
      </Heading>

      <Heading as="h2" fontSize="2xl" noOfLines={1} py={5}>
        Access Credentials
      </Heading>

      <Box
        as="form"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
        borderRadius="lg"
        {...props}
      >
        <AccountBlock
          type={data._000_020_email.attr_type}
          title={data._000_020_email.attr_label[props.match]}
          parameter={data_user.user.email}
          //
          labelEmailNew={data._000_021_email_new.attr_label[props.match]}
          label_email_confirm={
            data._000_022_email_confirm.attr_label[props.match]
          }
          placeholder_email_new={
            data._000_021_email_new.attr_placeholder[props.match]
          }
          placeholder_email_confirm={
            data._000_022_email_confirm.attr_placeholder[props.match]
          }
          rightButton="Edit"
          isEditable
        />

        <AccountBlock
          title="Password"
          parameter={data_user.user.password}
          name="Password"
          type="password"
          buttonHide="false"
          rightButton="Edit"
        />

        <AccountBlock
          title="Sequrity
		Questions"
          type="questions"
          sequrity_question_1={data.user.sequrity_question_1}
          sequrity_answer_1={data.user.sequrity_answer_1}
          sequrity_question_2={data.user.sequrity_question_2}
          sequrity_answer_2={data.user.sequrity_answer_2}
          rightButton="Edit"
        />
      </Box>
      <Heading as="h2" fontSize="2xl" noOfLines={1} py={5}>
        Personal Information
      </Heading>

      <AccountBlock
        title={data._000_010_text.attr_title}
        type={data._000_010_text.attr_type}
        parameter={data.user.first_name}
        attr_title={data._000_010_text.attr_title[props.match]}
        attr_label={data._000_010_text.attr_label[props.match]}
        attr_placeholder={data.user.first_name}
        rightButton="Edit"
      />
      <AccountBlock
        title={data._000_011_text.attr_title}
        type={data._000_011_text.attr_type}
        parameter={data.user.last_name}
        attr_title={data._000_011_text.attr_title[props.match]}
        attr_label={data._000_011_text.attr_label[props.match]}
        attr_placeholder={data.user.last_name}
        rightButton="Edit"
      />
    </>
  );
}
