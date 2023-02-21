import React, { useEffect, useState } from "react";
import Carddisplay from "./Carddisplay";
import axios from "axios";
import { Box, Button, color, Grid, Input, Select } from "@chakra-ui/react";
import { BASEURL } from "../App";
const Home = () => {
  const [CollegeData, setCollegeData] = useState([]);
  const [copyData, setCopyData] = useState([]);
  const [SearchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);
  const [page, setpage] = useState(1);

  const fetchdata = () => {
    setIsLoading(true);
    // ${BASEURL}/CollegeData
    axios
      .get(`${BASEURL}/CollegeData`)
      .then(({ data }) => {
        // let slice = data.slice(0, 5)
        setCollegeData(data);
        setCopyData(data)
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchdata();
    // window.addEventListener("scroll", handleScroll);
  }, []);

  // infinity
  // const handleScroll = () => {
  //   if (
  //     Math.ceil(window.innerHeight + window.scrollY) >=
  //     document.documentElement.offsetHeight
  //   ) {
  //     setCollegeData([CollegeData,...CollegeData])
  //     setCopyData([copyData,...copyData])
  //   }
  // };

  // Sort By  College Duniya Rating
  const handlecollegeduniyarating = (e) => {
    if (e === "l2h") {
      let sortbycollegeduniya = CollegeData.sort(
        (a, b) => a.collegeDuniyaRating - b.collegeDuniyaRating
      );
      setCollegeData([...sortbycollegeduniya]);
    } else {
      let sortbycollegeduniya = CollegeData.sort(
        (a, b) => b.collegeDuniyaRating - a.collegeDuniyaRating
      );
      setCollegeData([...sortbycollegeduniya]);
    }
  };

  // sort BY Fees
  const handlefees = (e) => {
    if (e === "l2h") {
      let sortbyfee = CollegeData.sort((a, b) => a.CourseFees - b.CourseFees);
      setCollegeData([...sortbyfee]);
    } else {
      let sortbyfee = CollegeData.sort((a, b) => b.CourseFees - a.CourseFees);
      setCollegeData([...sortbyfee]);
    }
  };

  // sort by user review rating
  const UserReviewRating = (e) => {
    if (e === "l2h") {
      let sortbyfee = CollegeData.sort((a, b) => a.UserRating - b.UserRating);
      setCollegeData([...sortbyfee]);
    } else {
      let sortbyfee = CollegeData.sort((a, b) => b.UserRating - a.UserRating);
      setCollegeData([...sortbyfee]);
    }
  };

  // Serch by name
  const handleSearch = () => {
    let search = SearchText.toLowerCase();
    let searchbyname = copyData.filter((elem) =>
      elem.name.toLowerCase().includes(search)
    );
    setCollegeData([...searchbyname]);
  };

  return (
    <Box>
      <Box display={"flex"} w="40%" margin={"auto"} p="5">
        <Input
          placeholder="Search By college name"
          value={SearchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          w={"30%"}
          variant="solid"
          colorScheme={"blue"}
          ml="2"
          onClick={handleSearch}
        >
          Serach
        </Button>
      </Box>
      <Box
        w={"70%"}
        margin="auto"
        display={"flex"}
        justifyContent="space-between"
        gap={3}
      >
        <Select
          placeholder="SORT BY COLLEGEDUNIYA RATING"
          onChange={(e) => handlecollegeduniyarating(e.target.value)}
        >
          <option value="l2h">Ascending</option>
          <option value="h2l">Descending</option>
        </Select>
        <Select
          placeholder="SORT BY FEES"
          onChange={(e) => handlefees(e.target.value)}
        >
          <option value="l2h">Ascending</option>
          <option value="h2l">Descending</option>
        </Select>
        <Select
          placeholder="SORT BY USER REVIEW RATING"
          onChange={(e) => UserReviewRating(e.target.value)}
        >
          <option value="l2h">Ascending</option>
          <option value="h2l">Descending</option>
        </Select>
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={3}>
        {isLoading ? (
          <h1>Loading....</h1>
        ) : isError ? (
          <h1>Error...</h1>
        ) : (
          CollegeData.map((elem) => {
            return <Carddisplay key={elem.id} {...elem} />;
          })
        )}
      </Grid>
    </Box>
  );
};

export default Home;
