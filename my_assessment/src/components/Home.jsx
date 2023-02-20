import React, { useEffect, useState } from "react";
import Carddisplay from "./Carddisplay";
import axios from "axios";
import { Box, Button, Grid, grid, Input, Select } from "@chakra-ui/react";
const Home = () => {
  const [CollegeData, setCollegeData] = useState([]);
  const [copyData, setCopyData] = useState([]);
  const [SearchText, setSearchText] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8080/CollegeData")
      .then(({ data }) => {
        console.log(data);
        setCollegeData(data);
        setCopyData(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
      <Box display={"flex"}>
        <Input
          placeholder="Search By college name"
          value={SearchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button onClick={handleSearch}>Serach</Button>
      </Box>
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
      <Grid templateColumns="repeat(3, 1fr)" gap={3}>
        {CollegeData.map((elem) => {
          return <Carddisplay key={elem.id} {...elem} />;
        })}
      </Grid>
    </Box>
  );
};

export default Home;
