import getRandom from "./getRandom";

const genHash = () => {
  if (window.location.hash == "") {
    window.location.hash = getRandom();
  }
};

export default genHash;
