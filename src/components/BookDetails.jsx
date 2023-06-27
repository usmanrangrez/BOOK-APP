import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Avatar,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
const BookDetails = () => {
  const [book, setBook] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://example-data.draftbit.com/books/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Stack direction={["column", "column", "row"]} m={20} gap={10}>
      <VStack
        alignItems="center"
        justifyContent="center"
        width={["100%", "60%"]}
        mr={5}
      >
        <Heading>{book.title}</Heading>
        <Avatar
          width={["80%", "90%", "100%"]}
          height={["80%", "90%", "100%"]}
          borderRadius="none"
          src={book.image_url}
        />
      </VStack>

      <VStack alignItems="flex-start" justifyContent="flex-start">
        <VStack alignItems="flex-start" justifyContent="flex-start">
          <Heading>Description</Heading>
          <Text fontSize="2xl" whiteSpace="wrap">
            {book.description}
          </Text>
        </VStack>

        <VStack alignItems="flex-start" justifyContent="flex-start">
          <Heading>Authors</Heading>
          <Text fontSize="2xl">{book.authors}</Text>
        </VStack>

        <VStack alignItems="flex-start" justifyContent="flex-start">
          <Heading>Genres</Heading>
          <Text fontSize="2xl">{book.genres}</Text>
        </VStack>
      </VStack>
    </Stack>
  );
};

export default BookDetails;
