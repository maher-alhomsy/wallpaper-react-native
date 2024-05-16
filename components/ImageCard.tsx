import { Pressable, StyleSheet } from "react-native";

import { Image } from "expo-image";

import { Hit } from "@/types";
import { theme } from "@/constants/theme";
import { getImageSize, wp } from "@/helpers/common";

type Props = { item: Hit; index: number; columns: number };

const ImageCard = ({ item, index, columns }: Props) => {
  const isLastInRow = () => {
    return (index + 1) % columns === 0;
  };

  const getImageHeight = () => {
    const { imageWidth: width, imageHeight: height } = item;
    return { height: getImageSize(height, width) };
  };

  return (
    <Pressable style={[styles.imageWrapper, !isLastInRow() && styles.spacing]}>
      <Image
        transition={100}
        source={{ uri: item.webformatURL }}
        style={[styles.image, getImageHeight()]}
      />
    </Pressable>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },

  imageWrapper: {
    backgroundColor: theme.colors.grayBG,
    borderRadius: theme.radius.xl,
    borderCurve: "continuous",
    overflow: "hidden",
    marginBottom: wp(2),
    marginRight: wp(2),
  },

  spacing: {
    marginRight: wp(2),
  },
});
