import { Box, Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FC } from "react";

// @ 이미지는 public/images, 스토리 내용은 public/locales의 json 파일을 각각 수정해서 사용하시면 됩니다.
const storyImage = "story.png";
const storyConfig = [
  {
    mt: 0,
    description: "story1",
  },
  {
    mt: 8,
    description: "story2",
  },
  {
    mt: 8,
    description: "story3",
  },
  {
    mt: 8,
    description: "story4",
  },
];

const Story: FC = () => {
  const { t } = useTranslation("common");

  const { colorMode } = useColorMode();

  return (
    <Flex
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      id="Story"
      flexDir={["column", "column", "row"]}
    >
      <Flex w={["full", "full%", "40%"]}>
        <Box w={["full", "full%"]} p={8}>
          <Text textAlign="center" mb={8} fontSize="4xl" fontWeight="bold">
            {t("story")}
          </Text>
          <Image
            src={`../images/${storyImage}`}
            borderRadius="2xl"
            alt="story"
          />
        </Box>
      </Flex>
      <Flex
        w={["full", "full%", "50%"]}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          mx={8}
          bgColor={colorMode === "light" ? "gray.100" : "gray.700"}
          px={4}
          py={8}
          borderRadius="2xl"
        >
          {storyConfig.map((v, i) => {
            return (
              <Box key={i} mt={v.mt}>
                <Text mt={2}>{t(v.description)}</Text>
              </Box>
            );
          })}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Story;
