import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack spacing={4} alignItems="center" p={4} backgroundColor="white" borderRadius="md">
      <Image src={imageSrc} alt={title} boxSize="100px" objectFit="cover" borderRadius="md" />
      <VStack alignItems="flex-start">
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
      </VStack>
      <FontAwesomeIcon icon={faArrowRight} size="1x" />
    </HStack>
  );
};

export default Card;
