import { ArrowDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BiBuildingHouse, BiPhotoAlbum } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

function Carddisplay({
  image,
  name,
  CollegeLogo,
  Location,
  CourseFees,
  collegeDuniyaRating,
  UserRating,
  Course,
  AllOverRanked,
  TotalCollege,
}) {
  return (
    <Card w={"95%"} maxW="md" margin={'auto'}>
      <CardBody w={"88%"} margin='auto'>
        <Box
          w="95%"
          h="250px"
          bgImage={image}
          bgSize="cover"
          bgPos="50% 100%"
          pos="relative"
          bgRepeat="no-repeat"
        >
          <Box h={"30px"} display="flex" justifyContent="space-between" p={1}>
            <Box
              w={"20%"}
              color={"black"}
              display="flex"
              justifyContent="space-between"
            >
              <BiPhotoAlbum size={30} />
              <AiFillYoutube size={30} />
            </Box>
            <Box
              width="55%"
              display="flex"
              justifyContent="space-between"
              color={"black"}
            >
              <BiBuildingHouse size={30} />
              <Text>COLLEGEDUNIA RATING</Text>
              <Text>{collegeDuniyaRating}/10</Text>
            </Box>
          </Box>
          <Box display={"flex"} justifyContent="space-between">
            <Box w={"20%"} h="100px" mt={"53%"} ml="10px" >
              <Image borderRadius={5} src={CollegeLogo} alt="college logo" />
            </Box>
            <Box ml={"10px"} mt={"50%"} color="yellow">
              {name}
            </Box>
          </Box>
          <Box w="100%" ml={"25%"} marginTop="-14" display={"flex"} gap="10px">
            <GoLocation size={20} />
            <Text color={""}>{Location}</Text>
          </Box>

          <Box w="80%" mt="4" display={"flex"} justifyContent="space-between">
            <Box>
              <Text color={"orange"}>₹ {CourseFees}</Text>
              <Text>{Course}</Text>
            </Box>
            <Center height="60px" color={"gray"}>
              <Divider orientation="vertical" size={12} />
            </Center>
            <Box ml="5">
              <Text color={"orange"}>{UserRating}/10</Text>
              <Text>BASED ON USER REVIEWS</Text>
            </Box>
          </Box>
          <Divider mt={1} />
          <Box
            w="80%"
            display={"flex"}
            justifyContent="space-between"
            margin={"auto"}
            mt="4"
          >
            <Box>
              <Text>RANKED {AllOverRanked} OUT OF 300 NIRF</Text>
            </Box>
            <Box ml="5">
              <Text>RANKED 26 OUT OF 216 THE WEEK</Text>
            </Box>
          </Box>
        </Box>
      </CardBody>
      <Box
        w={"80%"}
        margin="auto"
        mt={"45%"}
        h={"20px"}
        display="flex"
        color={"gray"}
        justifyContent="space-between"
      >
        <Text>ADMISSION 22</Text>
        <Text>REVIEWS</Text>
        <Text>COURSES & FEES</Text>
      </Box>
      <Divider marginTop={2} />
      <CardFooter>
        <ButtonGroup spacing="1" width={"100%"}>
          <Button variant="solid" colorScheme="orange" w="50%">
            APPLY NOW
          </Button>
          <Button variant="ghost" width="50%" colorScheme="orange">
            <ArrowDownIcon />
            BROCHURE
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default Carddisplay;
