import { Heading } from "@chakra-ui/react";
import AccountBlock from "../components/account/AccountBlock";

export default function Account() {
  return (
    <>
      <Heading as="h1" fontSize="4xl" noOfLines={1}>
        Account
      </Heading>

      <AccountBlock
        title="Email"
        parameter="tester+app@natmatch.com"
        name="Humboldt Park Health"
        rightButton="Edit"
        isEditable
      />
      <AccountBlock
        title="Password"
        parameter="*******"
        name="Humboldt Park Health"
        rightButton="Edit"
      />
      <AccountBlock
        title="Sequrity
		Questions"
        parameter="tester+app@natmatch.com"
        name="Humboldt Park Health"
        rightButton="Edit"
      />
      <AccountBlock
        title="Timezone"
        parameter="America/Eastern Time (US & Canada)"
        name="Humboldt Park Health"
        rightButton="Edit"
      />
    </>
  );
}
