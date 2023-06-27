import React, { useState, useEffect } from "react";
import { useAppContext } from "./context/AppContext";
import {
  Avatar,
  Button,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const Favourites = () => {
  const { fav, addToFav, remFromFav } = useAppContext();

  const favChecker = (id) => {
    return fav.some((item) => item.id === id);
  };

  const [displayCount, setDisplayCount] = useState(17);
  const [loading, setLoading] = useState(true);

  const isMobileScreen = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleShowMore = () => {
    setDisplayCount(fav.length);
  };

  return (
    <SimpleGrid
      alignItems="center"
      justifyContent="center"
      gap={[2, 5]}
      h="fit-content"
      m={8}
      columns={[1, 1, 3]}
    >
      {!loading ? (
        fav.slice(2, displayCount).map((item) => (
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
          <Text>
            No favorites. Please click here to go <Button>BACK</Button>
          </Text>
        </div>
      )}

      {isMobileScreen && fav.length > 12 && (
        <Button onClick={handleShowMore}>Show More</Button>
      )}
    </SimpleGrid>
  );
};

export default Favourites;
