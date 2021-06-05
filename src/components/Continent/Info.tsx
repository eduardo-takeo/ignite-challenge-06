import { InfoIcon } from "@chakra-ui/icons";
import { Box, Heading, Tooltip } from "@chakra-ui/react";

interface InfoProps {
  number: number;
  label: string;
  tooltip?: string;
}

export function Info({ number, label, tooltip = null }) {
  return (
    <Box textAlign="center">
      <Heading fontSize="48" color="yellow.800">
        {number}
      </Heading>
      <Heading fontSize="24">
        {label}
        {tooltip && (
          <Tooltip label={tooltip}>
            <InfoIcon w={4} ml="2" color="gray.400" />
          </Tooltip>
        )}
      </Heading>
    </Box>
  );
}
