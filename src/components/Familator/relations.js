export const relations = [
  "Mother",
  "Father",
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
    // Dad's side
    case "Father's Father":
      relation = "爺爺";
      break;
    case "Father's Mother":
      relation = "嫲嫲 / 奶奶";
      break;
    case "Father's Older Brother":
      relation = "伯伯";
      break;
    case "Father's Older Brother's Wife":
      relation = "伯母";
      break;
    case "Father's Younger Brother":
      relation = "叔叔";
      break;
    case "Father's Younger Brother's Wife":
      relation = "嬸嬸";
      break;
    case "Father's Older Sister":
      relation = "姑妈";
      break;
    case "Father's Older Sister's Husband":
    case "Father's Younger Sister's Husband":
      relation = "姑夫";
      break;
    case "Father's Younger Sister":
      relation = "姑姐 / 姑姑";
      break;
    // Mom's side
    case "Mother's Father":
      relation = "公公";
      break;
    case "Mother's Mother":
      relation = "婆婆";
      break;
    case "Mother's Older Brother":
    case "Mother's Younger Brother":
      relation = "舅夫";
      break;
    case "Mother's Older Brother's Wife":
      relation = "舅母";
      break;
    case "Mother's Younger Brother's Wife":
      relation = "嬸嬸";
      break;
    case "Mother's Older Sister":
      relation = "姑妈";
      break;
    case "Mother's Older Sister's Husband":
    case "Mother's Younger Sister's Husband":
      relation = "姑夫";
      break;
    case "Mother's Younger Sister":
      relation = "姑姐 / 姑姑";
      break;
    // Error and Empty state
    case "":
      relation = "Please select relations";
      break;

    default:
      relation = "Error";
      break;
  }
  return relation;
};
