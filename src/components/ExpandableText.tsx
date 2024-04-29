import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const LIMIT = 300;

  if (!children) return null;
  if (children.length <= LIMIT) return <Text>{children}</Text>;

  return (
    <Text>
      {!isExpanded ? children.slice(0, LIMIT) + "..." : children}{" "}
      <Button colorScheme="yellow" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Show less" : "Show more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
