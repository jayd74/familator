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

export const memberList = [
  { input: "Son", relation: "兒子" },
  { input: "Daughter", relation: "女兒" },
  { input: "Father", relation: "父親" },
  { input: "Mother", relation: "母親" },
  { input: "Older Brother", relation: "哥哥" },
  { input: "Younger Brother", relation: "弟弟" },
  { input: "Older Sister", relation: "姐姐" },
  { input: "Younger Sister", relation: "妹妹" },
  { input: "Wife", relation: "老婆 / 妻子" },
  { input: "Husband", relation: "老公 / 丈夫" },
  // Dad's side
  { input: "Father's Father", relation: "爺爺" },
  { input: "Father's Mother", relation: "嫲嫲 / 奶奶" },
  { input: "Father's Older Brother", relation: "伯伯" },
  { input: "Father's Older Brother's Wife", relation: "伯母" },
  { input: "Father's Younger Brother", relation: "叔叔" },
  { input: "Father's Younger Brother's Wife", relation: "嬸嬸" },
  { input: "Father's Older Sister", relation: "姑媽" },
  { input: "Father's Older Sister's Husband", relation: "姑夫" },
  { input: "Father's Younger Sister's Husband", relation: "姑夫" },
  { input: "Father's Younger Sister", relation: "姑姐 / 姑姑" },
  // Mother's side
  { input: "Mother's Father", relation: "公公 / 外公" },
  { input: "Mother's Mother", relation: "婆婆" },
  { input: "Mother's Older Brother", relation: "舅夫" },
  { input: "Mother's Younger Brother", relation: "舅夫" },
  { input: "Mother's Older Brother's Wife", relation: "舅母" },
  { input: "Mother's Younger Brother's Wife", relation: "嬸嬸" },
  { input: "Mother's Older Sister's Husband", relation: "姑夫" },
  { input: "Mother's Younger Sister's Husband", relation: "姑夫" },
  { input: "Mother's Older Sister", relation: "姨妈" },
  { input: "Mother's Younger Sister", relation: "阿姨" },
  // Cousins
  { input: "Father's Older Brother's Son", relation: "堂兄 / 堂弟" },
  { input: "Father's Younger Brother's Son", relation: "堂兄 / 堂弟" },
  { input: "Father's Older Sister's Son", relation: "堂兄 / 堂弟" },
  { input: "Father's Younger Sister's Son", relation: "堂兄 / 堂弟" },
  { input: "Father's Older Brother's Daughter", relation: "堂姐 / 堂妹" },
  { input: "Father's Younger Brother's Daughter", relation: "堂姐 / 堂妹" },
  { input: "Father's Older Sister's Daughter", relation: "堂姐 / 堂妹" },
  { input: "Father's Younger Sister's Daughter", relation: "堂姐 / 堂妹" },
  { input: "Mother's Older Brother's Son", relation: "表哥 / 表弟" },
  { input: "Mother's Younger Brother's Son", relation: "表哥 / 表弟" },
  { input: "Mother's Older Sister's Son", relation: "表哥 / 表弟" },
  { input: "Mother's Younger Sister's Son", relation: "表哥 / 表弟" },
  { input: "Mother's Older Brother's Daughter", relation: "表姐 / 表妹" },
  { input: "Mother's Younger Brother's Daughter", relation: "表姐 / 表妹" },
  { input: "Mother's Older Sister's Daughter", relation: "表姐 / 表妹" },
  { input: "Mother's Younger Sister's Daughter", relation: "表姐 / 表妹" },
  // Spouse's side
  { input: "Wife's Father", relation: "外父 / 岳父" },
  { input: "Wife's Mother", relation: "外母 / 岳母" },
  { input: "Husband's Father", relation: "老爺 / 岳父" },
  { input: "Husband's Mother", relation: "奶奶 / 岳母" },
  { input: "Husband's Old Sister", relation: "大姑" },
  { input: "Husband's Young Sister", relation: "小姑" },
  { input: "", relation: "Please select relations" },
];

export const getChineseName = (input) => {
  let fam = memberList.find((member) => member.input === input.trimStart());
  return fam ? fam?.relation : "Error: Clear and try again";
};

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
    case "Wife":
      relation = "老婆 / 妻子";
      break;
    case "Husband":
      relation = "老公 / 丈夫";
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
      relation = "姑媽";
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
      relation = "公公 / 外公";
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
    case "Mother's Older Sister's Husband":
    case "Mother's Younger Sister's Husband":
      relation = "姑夫";
      break;
    case "Mother's Older Sister":
      relation = "姨妈";
      break;
    case "Mother's Younger Sister":
      relation = "阿姨";
      break;
    // Cousins
    case "Father's Older Brother's Son":
    case "Father's Younger Brother's Son":
    case "Father's Older Sister's Son":
    case "Father's Younger Sister's Son":
      relation = "堂兄 / 堂弟";
      break;
    case "Father's Older Brother's Daughter":
    case "Father's Younger Brother's Daughter":
    case "Father's Older Sister's Daughter":
    case "Father's Younger Sister's Daughter":
      relation = "堂姐 / 堂妹";
      break;
    case "Mother's Older Brother's Son":
    case "Mother's Younger Brother's Son":
    case "Mother's Older Sister's Son":
    case "Mother's Younger Sister's Son":
      relation = "表哥 / 表弟";
      break;
    case "Mother's Older Brother's Daughter":
    case "Mother's Younger Brother's Daughter":
    case "Mother's Older Sister's Daughter":
    case "Mother's Younger Sister's Daughter":
      relation = "表姐 / 表妹";
      break;
    // Spouse's side
    case "Wife's Father":
      relation = "外父 / 岳父";
      break;
    case "Wife's Mother":
      relation = "外母 / 岳母";
      break;
    case "Husband's Father":
      relation = "老爺 / 岳父";
      break;
    case "Husband's Mother":
      relation = "奶奶 / 岳母";
      break;
    case "Husband's Old Sister":
      relation = "大姑";
      break;
    case "Husband's Young Sister":
      relation = "小姑";
      break;
    // Cousins

    // Error and Empty state
    case "":
      relation = "Please select relations";
      break;
    default:
      relation = "Error. Clear and Try again";
      break;
  }
  return relation;
};
