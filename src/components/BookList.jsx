import {
  Avatar,
  Button,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Spinner,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAppContext } from "./context/AppContext";
import { useNavigate } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const { fav, addToFav, remFromFav } = useAppContext();

  const navigate = useNavigate();

  const [displayCount, setDisplayCount] = useState(29);
  const [loading, setLoading] = useState(true);

  const isMobileScreen = useBreakpointValue({ base: true, md: false });

  const handleShowMore = () => {
    setDisplayCount(books.length);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get(
          "https://example-data.draftbit.com/books?_limit=50"
        );
        setBooks(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, []);

  const favChecker = (id) => {
    return fav.some((item) => item.id === id);
  };

  return (
    <VStack alignItems="center" justifyContent="center" m={8}>
      <SimpleGrid
        alignItems="center"
        justifyContent="center"
        gap={[2, 5]}
        h="fit-content"
        columns={[1, 1, 3]}
      >
        {!loading ? (
          books.slice(2, displayCount).map((item) => (
            <VStack
              key={item.id}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              p={2}
            >
              <Text fontSize={["20px", "15px", "18px"]} fontWeight="bold">
                {item.title.slice(0, 25)}
              </Text>
              <Avatar
                objectFit="cover"
                alignItems="center"
                justifyContent="center"
                src={item.image_url}
                width={["30%", "45%", "60%"]}
                height={["30%", "45%", "60%"]}
                borderRadius="none"
                _hover={{
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease",
                }}
                onClick={() => navigate(`/books/${item.id}`)}
              />
              {favChecker(item.id) ? (
                <Button
                  display="block"
                  mt={2}
                  color="white"
                  bgColor="black"
                  _hover={{
                    backgroundColor: "white",
                    color: "black",
                  }}
                  onClick={() => remFromFav(item.id)}
                >
                  Remove From Favorites
                </Button>
              ) : (
                <Button
                  display="block"
                  mt={2}
                  color="white"
                  bgColor="black"
                  _hover={{
                    backgroundColor: "white",
                    color: "black",
                  }}
                  onClick={() => addToFav(item)}
                >
                  Add to Favorites
                </Button>
              )}
            </VStack>
          ))
        ) : (
          <div>
            <VStack my={50} justifyContent="center" alignItems="center">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </VStack>
            <Text>Loading...</Text>
          </div>
        )}
      </SimpleGrid>

      {books.length > 12 && (
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Button onClick={handleShowMore}>Show More</Button>
        </Stack>
      )}
    </VStack>
  );
};

export default BookList;
