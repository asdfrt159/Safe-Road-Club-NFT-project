import { Flex, Text, useColorMode } from "@chakra-ui/react";
import { FC } from "react";

// @ 팀 주소 및 카피라이트에 관한 정보를 입력합니다.
const contactInfo =
  "Team ProjectLion NFT | E-Mail lhcsnelm@gmail.com";
const copyRight = "COPYRIGHT © Team Safe Road Club NFT Project. ALL RIGHT RESERVED";

const Footer: FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      p={[4, 4, 2]}
      bgColor={colorMode === "light" ? "gray.100" : "gray.900"}
    >
      <Text fontSize={["xs", "xs", "sm"]}>{contactInfo}</Text>
      <Text fontSize="xs" mt={1}>
        {copyRight}
      </Text>
    </Flex>
  );
};

export default Footer;
