import { atomFamily } from "recoil";

const getImage = async (id) => {
  return new Promise((resolve) => {
    const url = `http://someplace.com/${id}.png`;
    let image = new Image();
    image.onload = () =>
      resolve({
        id,
        name: `Image ${id}`,
        url,
        metadata: {
          width: `${image.width}px`,
          height: `${image.height}px`,
        },
      });
    image.src = url;
  });
};

export const imageState = atomFamily({
  key: "imageState",
  default: async (id) => await getImage(id),
});
