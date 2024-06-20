import { Box, GridItem, SimpleGrid, VStack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import path from "path";
import dotenv from "dotenv";
import Navbar from "../components/navbar/Navbar";
import CarCard from "../components/ui/car-card";
import Footer from "../components/footer";
import LoadingSpinner from "../components/ui/loading-spinner";
import SearchInput from "../components/search";
import AvatarMenu from "../components/navbar/avatar-menu";
import HomeSidebarContent from "../components/home/home-sidebar-content";
import NavbarLinks from "../components/navbar/NavbarLinks";
import SearchContext from "../SearchContext";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

function BookCars() {
  const { searchResults } = useContext(SearchContext);
  const [cars, setCars] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(`${process.env.BACKEND_URL}/api/cars`);
        setCars(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cars:", error);
        setLoading(false); 
      }
    };

    fetchCars();
  }, []);

  if (isLoading) return <LoadingSpinner />;

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Box flexGrow={1}>
        <Navbar
          sidebarContent={<HomeSidebarContent />}
          links={<NavbarLinks />}
          buttons={
            <>
              <SearchInput type={"cars"} />
              <AvatarMenu />
            </>
          }
        />

        <VStack>
          <SimpleGrid columns={[1, 1, 2, 2, 3]} rowGap={6} columnGap={8} py={10}>
            {(searchResults && searchResults.length > 0 ? searchResults : cars).map((car) => (
              <GridItem key={car.id} colSpan={1}>
                <CarCard props={car} />
              </GridItem>
            ))}
          </SimpleGrid>
        </VStack>
      </Box>
      <Footer />
    </Box>
  );
}

export default BookCars;
