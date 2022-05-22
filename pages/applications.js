import React, { useState, useEffect } from "react";
import { Heading, Stack } from "@chakra-ui/react";

export default function Applicants() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("/default_000__preset_value_array.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Stack spacing={6}>
      {data &&
        data.length > 0 &&
        data.map((item) => (
          <p key={item.id}>{item.attribute_template_header.appic}</p>
        ))}
    </Stack>
  );
}