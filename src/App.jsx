import { useEffect, useState } from "react";

import { useRoutes, Link } from "react-router-dom";
import Home from "../../pages/Home";
import CreateCrewMate from "../../pages/CreateCrewMate";
import CrewMateGallery from "../../pages/CrewMateGallery";
import { Flex, VStack, Image, Button, Spacer } from "@chakra-ui/react";
import { supabase } from "./client";
import UpdateCrewMate from "../../pages/UpdateCrewMate";
import Info from "../../pages/Info";

function App() {
  const [crews, setCrews] = useState([]);

  const fetchCrews = async () => {
    const { data } = await supabase.from("Crews").select();
    setCrews(data);
  };

  useEffect(() => {
    fetchCrews();
  }, [setCrews]);
  let element = useRoutes([
    {
      path: "/",
      element: <Home data={crews} />,
    },
    {
      path: "/new",
      element: <CreateCrewMate />,
    },
    {
      path: "/gallery",
      element: <CrewMateGallery data={crews} />,
    },
    {
      path: "/update/:id",
      element: <UpdateCrewMate data={crews} />,
    },
    {
      path: "/info/:id",
      element: <Info data={crews} />,
    },
  ]);
  return (
    <div>
      <Flex width='100vw' height='fit-content'>
        <VStack
          p='2em'
          width='20%'
          height='100vh'
          bgColor='#5B5A5A'
          color='whiteAlpha.700'
          position={"fixed"}
          overflow-x='hidden'
        >
          <Link to='/'>
            <Button colorScheme='pink' size='lg' width='10em' m='0.5em'>
              Home
            </Button>
          </Link>

          <Link to='/new'>
            <Button colorScheme='green' size='lg' width='10em' m='0.5em'>
              Create a Crewmate!
            </Button>
          </Link>

          <Link to='/gallery'>
            <Button colorScheme='blue' size='lg' width='10em' m='0.5em'>
              Crewmate Gallery
            </Button>
          </Link>
          <Spacer />
          <Image src={"./src/assets/peeking.png"} />
        </VStack>
        <VStack
          p='2em'
          width='100%'
          height='fit-content'
          bgColor='#121212'
          color='whiteAlpha.700'
          ml={"8em"}
        >
          {element}
        </VStack>
      </Flex>
    </div>
  );
}

export default App;
