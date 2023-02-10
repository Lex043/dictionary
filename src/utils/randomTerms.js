const randomTerm = () => {
  const words = [
    "Malaria",
    "aorta",
    "veins",
    "blood",
    "heart",
    "kidney",
    "cancer",
    "colon",
    "esophagus",
    "arteries",
    "skull",
    "eardrum",
  ];

  return words[Math.floor(Math.random() * words.length)];
};

export default randomTerm;
