import { useState } from "react";

import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Text,
  Textarea,
  useToast,
  Wrap,
} from "@chakra-ui/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useReward } from "react-rewards";

import Dice from "./assets/dice.svg";
import { Footer } from "./components/Footer";

import { BsDice5 } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";

import { getRandomArray } from "./utils/getRandomArray";

const confettiConfig = {
  lifetime: 100,
  elementCount: 35,
  spread: 75,
};

export const App = () => {
  const toast = useToast();
  const { reward } = useReward("confettiId", "confetti", confettiConfig);

  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const isTextEmpty = text.trim() ? false : true;

  const handleClick = () => {
    const trimmedText = text.trim();
    const removedWhiteSpacesAndBlankLines = trimmedText.replace(
      /^(?=\n)$|^\s*|\s*$|\n\n+/gm,
      ""
    );

    const splittedText = removedWhiteSpacesAndBlankLines.split("\n");
    const randomtext = getRandomArray(splittedText);

    setResult((prevResult) =>
      prevResult === randomtext ? getRandomArray(splittedText) : randomtext
    );

    if (!result) {
      setTimeout(() => reward(), 1);
    } else {
      reward();
    }
  };

  const handleOnCopy = () =>
    toast({
      title: "Success",
      description: "Text coppied to clipboard.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

  return (
    <Container maxW="75em" mt="4rem">
      <Wrap gap={3} alignItems="center" mb={3}>
        <Image src={Dice} alt="Logo" boxSize={{ base: "60px", sm: "75px" }} />
        <Flex direction="column">
          <Text as="h1" fontSize={{ base: "2xl", sm: "3xl" }} fontWeight="bold">
            Random Line Picker
          </Text>
          <Text>I'll pick a random line from your text!</Text>
        </Flex>
      </Wrap>

      <Textarea
        mt="2rem"
        minH="8rem"
        mb={3}
        placeholder="Paste your text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Button
        colorScheme="messenger"
        leftIcon={<BsDice5 />}
        onClick={handleClick}
        disabled={isTextEmpty}
        mr={2}
      >
        Pick Random Line
      </Button>

      {result && (
        <Box mt="3rem">
          <Text as="h2" fontSize="2xl" fontWeight="bold" mb={3}>
            RESULT
          </Text>

          <Box
            p="1rem"
            maxW="100%"
            mb={3}
            display="inline-block"
            position="relative"
            borderRadius="md"
            style={{ border: "1.5px solid #e3e9f0" }}
          >
            <Text fontSize="3xl">{result}</Text>
            <Box
              id="confettiId"
              position="absolute"
              left="50%"
              top="55%"
              transform="translateX(-50%)"
            />
          </Box>

          <CopyToClipboard text={result} onCopy={handleOnCopy}>
            <Button
              display="flex"
              colorScheme="messenger"
              leftIcon={<FiCopy />}
            >
              Copy
            </Button>
          </CopyToClipboard>
        </Box>
      )}

      <Footer />
    </Container>
  );
};
