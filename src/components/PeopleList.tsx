import {
  Image,
  Heading,
  SimpleGrid,
  Card,
  Link,
  CardBody,
} from "@chakra-ui/react";

import usePeople from "../hooks/usePeople";
import { useParams } from "react-router-dom";

const PeopleList = () => {
  const { role_code } = useParams();
  let { peoples } = usePeople({ role_code, dependency: [role_code] });

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 4, xl: 6 }}
      padding="10px"
      spacing={10}
    >
      {Object.keys(peoples).map((peopleId, index) => {
        let people = peoples[peopleId];
        return (
          <Card key={index}>
            <Link href={`/people/detail/${peopleId}`}>
              <Image src={people.imageUrl} alt={people.name} fit="cover" />
              <CardBody>
                <Heading fontSize="sm"> {people.name}</Heading>
              </CardBody>
            </Link>
          </Card>
        );
      })}
    </SimpleGrid>
  );
};
export default PeopleList;
