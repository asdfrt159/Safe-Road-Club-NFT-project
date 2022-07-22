import { Box, Flex, Grid } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FC } from "react";
import TeamCard from "./TeamCard";

// @ name: 팀원 이름, position: 포지션, image: public/images에 있는 이미지 이름, color: color 이름 (모든 색상이 가능하지는 않습니다.)
const teamCardConfig = [
  {
    name: "이해창",
    position: "기획",
    nickname: "Handle",
    image: "handle.png",
    color: "blue",
    animation: "tada",
  },
  {
    name: "백승호",
    position: "기획",
    nickname: "Head Light",
    image: "headlight.png",
    color: "yellow",
    animation: "tada",
  },
  {
    name: "여민정",
    position: "마케팅 디자인",
    nickname: "Engine",
    image: "engine.png",
    color: "green",
    animation: "tada",
  },
  {
    name: "김동진",
    position: "디자인",
    nickname: "Side Mirror",
    image: "mirror.png",
    color: "red",
    animation: "tada",
  },
  {
    name: "이동훈",
    position: "개발",
    nickname: "Wiper",
    image: "wiper.png",
    color: "orange",
    animation: "tada",
  }
];

const Team: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Flex minH="100vh" alignItems="center" id="Team" flexDir="column">
      <Box fontSize="6xl" fontWeight="bold" mt={4}>
        {t("team")}
      </Box>
      <Grid
        mt={16}
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(5, 1fr)",
        ]}
      >
        {teamCardConfig.map((v, i) => {
          return (
            <TeamCard
              key={i}
              name={v.name}
              position={v.position}
              nickname={v.nickname}
              image={v.image}
              color={v.color}
              animation={v.animation}
            />
          );
        })}
      </Grid>
    </Flex>
  );
};

export default Team;
