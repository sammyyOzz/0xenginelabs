import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import xammColor from "@/assets/images/xamm-color.png";
import xammBlack from "@/assets/images/xamm-black.png";
import xamm2 from "@/assets/images/xamm-2.png";
import myrkleBlack from "@/assets/images/myrkle-black.png"
import myrkleColor from "@/assets/images/myrkle-color.png"
import myrkleSparkLeft from "@/assets/images/myrkle-spark-left.png"
import myrkleSparkRight from "@/assets/images/myrkle-spark-right.png"
import walkitBlack from "@/assets/images/walkit-black.png"
import walkitColor from "@/assets/images/walkit-color.png"
import walkit2 from "@/assets/images/walkit-2.png"

function ClientsDesktop() {
  return (
    <>
      <Box
        zIndex={3}
        pos="absolute"
        w="38%"
        boxShadow="0 0 20px #9c9b9b"
        bg="#ffffff"
        aspectRatio={1 / 1.7}
        transition="200ms linear all"
        overflow="hidden"
        _hover={{
          transition: "200ms linear all",
          bg: "#000000",
          borderRadius: "25px",
          "& .icon-container": {
            top: "20%",
            transition: "200ms linear all",
          },
          "& .xamm-black": {
            opacity: 0
          },
          "& .xamm-bottom": {
            bottom: 0,
            left: 0,
            transition: "200ms linear all",
          }
        }}
      >
        <Box
          className="icon-container"
          pos="absolute"
          w="100px"
          h="100px"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          transition="200ms linear all"
        >
          <Image src={xammColor} alt="" style={{ position: "absolute" }} />
          <Image
            className="xamm-black"
            src={xammBlack}
            alt=""
            style={{ position: "absolute" }}
          />
        </Box>
        <Box className="xamm-bottom" pos="absolute" bottom="-50%" left="-50%" transition="200ms linear all">
          <Image src={xamm2} alt="" />
        </Box>
      </Box>

      <Box
        zIndex={2}
        pos="absolute"
        top="200px"
        left="32%"
        boxShadow="0 0 20px #9c9b9b"
        bg="#ffffff"
        w="38%"
        aspectRatio={1 / 1.7}
        transition="200ms linear all"
        overflow="hidden"
        css={{
          "& .myrkle-color": {
            pos: "absolute",
            mt: "30px",
            opacity: 0,
            transform: "scale(3)",
            transition: "200ms linear all",
          },
          "& .myrkle-spark-left": {
            pos: "absolute",
            bottom: ["30px", null, null, "70px"],
            left: "-100%",
            transition: "200ms linear all",
          },
          "& .myrkle-spark-right": {
            pos: "absolute",
            bottom: ["30px", null, null, "70px"],
            right: "-100%",
            transition: "200ms linear all",
          },
        }}
        _hover={{
          transition: "200ms linear all",
          bg: "#000000",
          borderRadius: "25px",
          "& .xamm-bottom": {
            bottom: 0,
            left: 0,
            transition: "200ms linear all",
          },
          "& .myrkle-color": {
            transform: ["scale(1)", null, null, "scale(1.5)"],
            opacity: 1
          },
          "& .myrkle-spark-left": {
            left: ["-90px", null, null, 0],
            transition: "200ms linear all",
          },
          "& .myrkle-spark-right": {
            right: ["-90px", null, null, 0],
            transition: "200ms linear all",
          },
        }}
      >
        <Box
          pos="absolute"
          w="100px"
          h="100px"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          transition="200ms linear all"
        >
          <Image
            className="myrkle-black"
            src={myrkleBlack}
            alt=""
            style={{ position: "absolute" }}
          />
          <Image className="myrkle-color" src={myrkleColor} alt="" />
        </Box>
          <Image className="myrkle-spark-left" src={myrkleSparkLeft} alt="" />
          <Image className="myrkle-spark-right" src={myrkleSparkRight} alt="" />
      </Box>

      <Box
        zIndex={1}
        pos="absolute"
        top="100px"
        left="62%"
        boxShadow="0 0 20px #9c9b9b"
        bg="#ffffff"
        w="38%"
        aspectRatio={1 / 1.7}
        transition="200ms linear all"
        overflow="hidden"
        _hover={{
          transition: "200ms linear all",
          bg: "#000000",
          borderRadius: "25px",
          "& .icon-container": {
            top: "20%",
            transition: "200ms linear all",
          },
          "& .xamm-black": {
            opacity: 0
          },
          "& .xamm-bottom": {
            bottom: 0,
            left: 0,
            transition: "200ms linear all",
          }
        }}
      >
        <Box
          className="icon-container"
          pos="absolute"
          w="100px"
          h="100px"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          transition="200ms linear all"
        >
          <Image src={walkitColor} alt="" style={{ position: "absolute" }} />
          <Image
            className="xamm-black"
            src={walkitBlack}
            alt=""
            style={{ position: "absolute" }}
          />
        </Box>
        <Box className="xamm-bottom" pos="absolute" bottom="-50%" left="-50%" transition="200ms linear all">
          <Image src={walkit2} alt="" />
        </Box>
      </Box>
    </>
  );
}

export default ClientsDesktop;
