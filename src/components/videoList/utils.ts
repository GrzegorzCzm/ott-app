export const getImageUrl = (Images: any) => {
  const image = Images.find((image: any) => image.ImageTypeCode === "FRAME");
  if (image && image.Url) return image.Url;
  return "/noimage.png";
};
