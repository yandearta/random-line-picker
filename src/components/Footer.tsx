import { Box, Text, Link } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";

export const Footer = () => {
  return (
    <Box mt="5rem">
      <Text>
        Made with ❤ by{" "}
        <Link
          href="https://github.com/yandearta"
          display="inline-flex"
          alignItems="center"
          color="messenger.500"
          fontWeight="bold"
          isExternal
        >
          Yande Arta{" "}
          <FiExternalLink style={{ color: "#0078FF", margin: "0 3px" }} />
        </Link>
      </Text>
    </Box>
  );
};
