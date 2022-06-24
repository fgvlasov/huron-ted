import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  FormHelperText,
} from "@chakra-ui/react";
import { InputIcon } from "./InputIcon";

// https://chakra-ui.com/docs/components/form/input
export const InputText = ({
  id = "",
  label = "",
  labelPosition = "left",
  helperText = "",
  isInvalid = "",
  isReadOnly = "",
  isRequired = "",
  isDisabled = "",
  defaultValue,
  ...props
}) => (
  <FormControl id={id}>
    {label && (
      <FormLabel justifyContent={labelPosition} display="flex">
        {label}
      </FormLabel>
    )}
    <Select
      {...(defaultValue && defaultValue)}
      errorBorderColor={props.errorBorderColor}
      focusBorderColor={props.focusBorderColor}
      htmlSize={props.htmlSize}
      {...(isDisabled && isDisabled)}
      {...(isInvalid && isInvalid)}
      {...(isReadOnly && isReadOnly)}
      {...(isRequired && isRequired)}
      //isDisabled={props.isDisabled}
      //isReadOnly={props.isReadOnly}
      //isRequired={props.isRequired}
      size={props.size}
      variant={props.variant}
      placeholder={props.placeholder}
    ></Select>

    {helperText && <FormHelperText>{helperText}</FormHelperText>}
  </FormControl>
);
