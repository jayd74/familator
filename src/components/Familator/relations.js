export const relations = [
  "Mom",
  "Dad",
  "Son",
  "Daughter",
  "Younger Brother",
  "Younger Sister",
  "Older Sister",
  "Older Brother",
  "Wife",
  "Husband",
  "Cousin",
];

export const getChineseRelation = (input) => {
  let relation = "";
  switch (input.trimStart()) {
    case "Son":
      relation = "兒子";
      break;
    case "Daughter":
      relation = "女兒";
      break;
    case "Father":
      relation = "父親";
      break;
    case "Mother":
      relation = "母親";
      break;
    case "Older Brother":
      relation = "哥哥";
      break;
    case "Younger Brother":
      relation = "弟弟";
      break;
    case "Older Sister":
      relation = "姐姐";
      break;
    case "Younger Sister":
      relation = "妹妹";
      break;
    case "Dad's Older Brother":
      relation = "伯伯";
      break;
    case "Dad's Older Brother's Wife":
      relation = "伯母";
      break;
    case "Dad's Younger Brother":
      relation = "叔叔";
      break;
    case "Dad's Younger Brother's Wife":
      relation = "嬸";
      break;
    case "":
      relation = "Please select relations";
      break;
    default:
      relation = "Error";
      break;
  }
  return relation;
};
