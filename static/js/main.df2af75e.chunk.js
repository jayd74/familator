(this.webpackJsonpfamilator=this.webpackJsonpfamilator||[]).push([[0],{19:function(e,r,t){},20:function(e,r,t){},39:function(e,r,t){"use strict";t.r(r);var l,s,i,a,n,o,h,v,Y,g,u=t(0),F=t.n(u),d=t(10),X=t.n(d),M=(t(19),t(20),t(2)),p=t(4),c=t(3),m=t(11),T=t.n(m),S=t(1),b=Object(c.a)((function(e){var r=e.className,t=e.copy,l=e.setRelation;return Object(S.jsx)("button",{className:r,onClick:function(){l(t)},children:t})}))(l||(l=Object(M.a)(["\n  border: 1px solid lightgrey;\n  border-radius: 5px;\n  padding: 15px;\n\n  &:hover {\n    background: grey;\n    color: white;\n    cursor: pointer;\n  }\n"]))),O=["Mother","Father","Son","Daughter","Younger Brother","Older Brother","Younger Sister","Older Sister","Wife","Husband"],f=[{relationship:"",title:"Please select relations"},{relationship:"Son",title:"\u5152\u5b50",engTitle:"Son",reverseMale:"\u7236\u89aa / \u7238\u7238",reverseFemale:"\u6bcd\u89aa / \u5abd\u5abd"},{relationship:"Daughter",title:"\u5973\u5152",engTitle:"Daughter",reverseMale:"\u7236\u89aa / \u7238\u7238",reverseFemale:"\u6bcd\u89aa / \u5abd\u5abd"},{relationship:"Father",title:"\u7236\u89aa / \u7238\u7238",engTitle:"Father",reverseMale:"\u5152\u5b50",reverseFemale:"\u5973\u5152"},{relationship:"Mother",title:"\u6bcd\u89aa / \u5abd\u5abd",engTitle:"Mother",reverseMale:"\u5152\u5b50",reverseFemale:"\u5973\u5152"},{relationship:"Older Brother",title:"\u54e5\u54e5",engTitle:"Older Brother",reverseMale:"\u5f1f\u5f1f",reverseFemale:"\u59b9\u59b9"},{relationship:"Younger Brother",title:"\u5f1f\u5f1f",engTitle:"Younger Brother",reverseMale:"\u54e5\u54e5",reverseFemale:"\u59d0\u59d0"},{relationship:"Older Sister",title:"\u59d0\u59d0",engTitle:"Older Sister",reverseMale:"\u5f1f\u5f1f",reverseFemale:"\u59d0\u59d0"},{relationship:"Younger Sister",title:"\u59b9\u59b9",engTitle:"Younger Sister",reverseMale:"\u54e5\u54e5",reverseFemale:"\u59d0\u59d0"},{relationship:"Wife",title:"\u8001\u5a46 / \u59bb\u5b50",engTitle:"Wife",reverseMale:"\u8001\u516c / \u4e08\u592b",reverseFemale:"\u8001\u5a46 / \u59bb\u5b50"},{relationship:"Husband",title:"\u8001\u516c / \u4e08\u592b",engTitle:"Husband",reverseMale:"\u8001\u516c / \u4e08\u592b",reverseFemale:"\u8001\u5a46 / \u59bb\u5b50"},{relationship:"Father's Father",title:"\u723a\u723a",engTitle:"Paternal Grandfather",reverseMale:"\u5b6b\u5b50",reverseFemale:"\u5b6b\u5973"},{relationship:"Father's Mother",title:"\u5af2\u5af2 / \u5976\u5976",engTitle:"Paternal Grandmother",reverseMale:"\u5b6b\u5b50",reverseFemale:"\u5b6b\u5973"},{relationship:"Father's Older Brother",title:"\u4f2f\u4f2f",engTitle:"Uncle",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Older Brother's Wife",title:"\u4f2f\u6bcd",engTitle:"Aunt",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Younger Brother",title:"\u53d4\u53d4",engTitle:"Uncle",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Younger Brother's Wife",title:"\u5b38\u5b38",engTitle:"Aunt",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Older Sister",title:"\u59d1\u5abd",engTitle:"Aunt",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Older Sister's Husband",title:"\u59d1\u592b",engTitle:"Uncle",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Younger Sister's Husband",title:"\u59d1\u592b",engTitle:"Uncle",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Younger Sister",title:"\u59d1\u59d0 / \u59d1\u59d1",engTitle:"Aunt",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mother's Father",title:"\u516c\u516c / \u5916\u516c",engTitle:"Maternal Grandfather",reverseMale:"\u5b6b\u5b50",reverseFemale:"\u5b6b\u5973"},{relationship:"Mother's Mother",title:"\u5a46\u5a46 / \u59e5\u59e5 / \u5916\u7956\u6bcd",engTitle:"Maternal Grandmother",reverseMale:"\u5b6b\u5b50",reverseFemale:"\u5b6b\u5973"},{relationship:"Mother's Older Brother",title:"\u8205\u592b",engTitle:"Uncle",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mother's Younger Brother",title:"\u8205\u592b",engTitle:"Uncle",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mother's Older Brother's Wife",title:"\u8205\u6bcd",engTitle:"Aunt",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mother's Younger Brother's Wife",title:"\u5b38\u5b38",engTitle:"Aunt",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mother's Older Sister",title:"\u59e8\u5988",engTitle:"Aunt",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mother's Younger Sister",title:"\u963f\u59e8",engTitle:"Aunt",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mother's Older Sister's Husband",title:"\u59d1\u592b",engTitle:"Uncle",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mother's Younger Sister's Husband",title:"\u59d1\u592b",engTitle:"Uncle",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Older Brother's Son",title:"\u5802\u5144 / \u5802\u5f1f",engTitle:"First Cousin",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Younger Brother's Son",title:"\u5802\u5144 / \u5802\u5f1f",engTitle:"First Cousin",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Older Sister's Son",title:"\u5802\u5144 / \u5802\u5f1f",engTitle:"First Cousin",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Younger Sister's Son",title:"\u5802\u5144 / \u5802\u5f1f",engTitle:"First Cousin",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Older Brother's Daughter",title:"\u5802\u59d0 / \u5802\u59b9",engTitle:"First Cousin",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Younger Brother's Daughter",title:"\u5802\u59d0 / \u5802\u59b9",engTitle:"First Cousin",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Older Sister's Daughter",title:"\u5802\u59d0 / \u5802\u59b9",engTitle:"First Cousin",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Younger Sister's Daughter",title:"\u5802\u59d0 / \u5802\u59b9",engTitle:"First Cousin",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mother's Older Brother's Son",title:"\u8868\u54e5 / \u8868\u5f1f",engTitle:"First Cousin",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mother's Younger Brother's Son",title:"\u8868\u54e5 / \u8868\u5f1f",engTitle:"First Cousin",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mother's Older Sister's Son",title:"\u8868\u54e5 / \u8868\u5f1f",engTitle:"First Cousin",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mother's Younger Sister's Son",title:"\u8868\u54e5 / \u8868\u5f1f",engTitle:"First Cousin",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mother's Older Brother's Daughter",title:"\u8868\u59d0 / \u8868\u59b9",engTitle:"First Cousin",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mother's Younger Brother's Daughter",title:"\u8868\u59d0 / \u8868\u59b9",engTitle:"First Cousin",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mother's Older Sister's Daughter",title:"\u8868\u59d0 / \u8868\u59b9",engTitle:"First Cousin",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mother's Younger Sister's Daughter",title:"\u8868\u59d0 / \u8868\u59b9",engTitle:"First Cousin",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Wife's Father",title:"\u5916\u7236 / \u5cb3\u7236",engTitle:"Father-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Wife's Mother",title:"\u5916\u6bcd / \u5cb3\u6bcd",engTitle:"Mother-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Wife's Older Sister",title:"\u5927\u59e8\u5b50",engTitle:"Sister-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Wife's Older Sister's Husband",title:"\u5927\u59d1\u5b50",engTitle:"Sister-in-law's Husband",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Wife's Younger Sister",title:"\u5c0f\u59e8\u5b50",engTitle:"Sister-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Wife's Younger Sister's Husband",title:"\u5c0f\u59d1\u5b50",engTitle:"Sister-in-law's Husband",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Wife's Older Brother",title:"\u5927\u8205\u5b50",engTitle:"Brother-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Wife's Older Brother's Wife",title:"\u5927\u8205\u5ac2 / \u5927\u5997\u5b50",engTitle:"Brother-in-law's Wife",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Wife's Younger Brother",title:"\u5c0f\u53d4\u5b50",engTitle:"Brother-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Wife's Younger Brother's Wife",title:"\u5c0f\u5a76\u5b50",engTitle:"Brother-in-law's Wife",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Husband's Father",title:"\u8001\u723a / \u5cb3\u7236",engTitle:"Father-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Husband's Mother",title:"\u5976\u5976 / \u5cb3\u6bcd",engTitle:"Mother-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Husband's Older Sister",title:"\u5927\u59d1",engTitle:"Sister-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Husband's Older Sister's Husband",title:"\u5927\u59d1\u5b50",engTitle:"Sister-in-law's Husband",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Husband's Younger Sister",title:"\u5c0f\u59d1",engTitle:"Sister-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Husband's Younger Sister's Husband",title:"\u5c0f\u59d1\u5b50",engTitle:"Sister-in-law's Husband",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Husband's Older Brother",title:"\u5927\u4f2f\u5b50",engTitle:"Brother-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Husband's Older Brother's Wife",title:"\u5927\u4f2f\u5ac2",engTitle:"Brother-in-law's Wife",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Husband's Younger Brother",title:"\u5c0f\u53d4\u5b50",engTitle:"Brother-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Husband's Younger Brother's Wife",title:"\u5c0f\u5a76\u5b50",engTitle:"Brother-in-law's Wife",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Older Brother's Wife",title:"\u5ac2\u5b50",engTitle:"Sister-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Younger Brother's Wife",title:"\u5f1f\u59b9",engTitle:"Sister-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Older Sisters's Wife",title:"\u59d0\u592b",engTitle:"Sister-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Younger Sisters's Wife",title:"\u59b9\u592b",engTitle:"Sister-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Older Brother's Son",title:"\u4f84\u5b50",engTitle:"Nephew",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Younger Brother's Son",title:"\u4f84\u5b50",engTitle:"Nephew",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Older Brother's Daugher",title:"\u4f84\u5973",engTitle:"Niece",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Younger Brother's Daughter",title:"\u4f84\u5973",engTitle:"Niece",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Older Sister's Son",title:"\u5916\u7525",engTitle:"Nephew",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Younger Sister's Son",title:"\u5916\u7525",engTitle:"Nephew",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Older Sister's Daughter",title:"\u5916\u7525\u5973",engTitle:"Niece",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Younger Sister's Daughter",title:"\u5916\u7525\u5973",engTitle:"Niece",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Father's Older Sister",title:"\u59d1\u5976\u5976",engTitle:"Grandaunt",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Father's Older Sister's Husband",title:"\u59d1\u723a",engTitle:"Granduncle-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Father's Older Brother",title:"\u5927\u723a / \u4e8c\u723a ...",engTitle:"Granduncle",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Father's Older Brother's Wife",title:"\u5927\u5976\u5976 / \u4e8c\u5976\u5976...",engTitle:"Grandaunt-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Father's Younger Sister",title:"\u59d1\u5976\u5976",engTitle:"Grandaunt",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Father's Younger Sister's Husband",title:"\u59d1\u723a",engTitle:"Granduncle-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Father's Younger Brother",title:"\u5927\u723a / \u4e8c\u723a ...",engTitle:"Granduncle",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Father's Younger Brother's Wife",title:"\u5927\u5976\u5976 / \u4e8c\u5976\u5976...",engTitle:"Grandaunt-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Mother's Older Sister",title:"\u59e8\u5976\u5976",engTitle:"Grandaunt",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Mother's Older Sister's Husband",title:"\u59e8\u723a",engTitle:"Granduncle-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Mother's Older Brother",title:"\u8205\u7237",engTitle:"Granduncle",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Mother's Older Brother's Wife",title:"\u8205\u5976\u5976",engTitle:"Grandaunt-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mothers Father's Older Sister",title:"\u59d1\u59e5\u59e5",engTitle:"Grandaunt",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mothers Father's Older Sister Husband",title:"\u59d1\u59e5\u723a",engTitle:"Granduncle-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mothers Mother's Older Sister",title:"\u59e8\u59e5\u59e5",engTitle:"Grandaunt",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mother's Mother's Older Sister's Husband",title:"\u59e8\u59e5\u723a",engTitle:"Granduncle-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mother's Father's Older Brother",title:"\u8205\u59e5\u723a",engTitle:"Granduncle",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mother's Father's Younger Brother's Wife",title:"\u8205\u59e5\u59e5",engTitle:"Grandaunt-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Mother's Older Sister",title:"\u59e8\u5976\u5976",engTitle:"Grandaunt",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Mother's Younger Sister",title:"\u59e8\u5976\u5976",engTitle:"Grandaunt",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Mother's Older Sister's Husband",title:"\u59e8\u723a",engTitle:"Granduncle-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Mother's Younger Sister's Husband",title:"\u59e8\u723a",engTitle:"Granduncle-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Mother's Older Brother",title:"\u8205\u7237",engTitle:"Granduncle",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Mother's Older Brother's Wife",title:"\u8205\u5976\u5976",engTitle:"Grandaunt-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mothers Father's Younger Sister",title:"\u59d1\u59e5\u59e5",engTitle:"Grandaunt",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mothers Father's Younger Sister Husband",title:"\u59d1\u59e5\u723a",engTitle:"Granduncle-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mothers Mother's Younger Sister",title:"\u59e8\u59e5\u59e5",engTitle:"Grandaunt",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mother's Mother's Younger Sister's Husband",title:"\u59e8\u59e5\u723a",engTitle:"Granduncle-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mother's Father's Younger Brother",title:"\u8205\u59e5\u723a",engTitle:"Granduncle",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mother's Father's Younger Brother's Wife",title:"\u8205\u59e5\u59e5",engTitle:"Grandaunt-in-law",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Father's Father",title:"\u592a\u723a",engTitle:"Paternal Great-Grandfather",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Mother's Father",title:"\u592a\u723a",engTitle:"Paternal Great-Grandfather",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Father's Mother",title:"\u592a\u5af2",engTitle:"Paternal Great-Grandmother",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Mother's Mother",title:"\u592a\u5af2",engTitle:"Paternal Great-Grandmother",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mother's Father's Father",title:"\u592a\u59e5\u7237",engTitle:"Maternal Great-Grandfather",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mother's Mother's Father",title:"\u592a\u59e5\u7237",engTitle:"Maternal Great-Grandfather",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mother's Father's Mother",title:"\u592a\u59e5\u59e5",engTitle:"Maternal Great-Grandmother",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Mother's Mother's Mother",title:"\u592a\u59e5\u59e5",engTitle:"Maternal Great-Grandmother",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Son's Son",title:"\u5b6b\u5b50",engTitle:"Grandson",reverseMale:"\u723a\u723a",reverseFemale:"\u5af2\u5af2 / \u5976\u5976"},{relationship:"Son's Daughter",title:"\u5b6b\u5973",engTitle:"Granddaughter",reverseMale:"\u723a\u723a",reverseFemale:"\u5af2\u5af2 / \u5976\u5976"},{relationship:"Daughter's Son",title:"\u5b6b\u5b50",engTitle:"Grandson",reverseMale:"\u516c\u516c / \u5916\u516c",reverseFemale:"\u5a46\u5a46 / \u59e5\u59e5 / \u5916\u7956\u6bcd"},{relationship:"Daughter's Daughter",title:"\u5b6b\u5973",engTitle:"Granddaughter",reverseMale:"\u516c\u516c / \u5916\u516c",reverseFemale:"\u5a46\u5a46 / \u59e5\u59e5 / \u5916\u7956\u6bcd"},{relationship:"Son's Son's Son",title:"\u66fe\u5b59\u5b50",engTitle:"Great-Grandson",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Son's Son's Daughter",title:"\u66fe\u5b59\u5973",engTitle:"Great-Granddaughter",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Son's Daughter's Son",title:"\u66fe\u5b59\u5b50",engTitle:"Great-Grandson",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Son's Daughter's Daughter",title:"\u66fe\u5b59\u5973",engTitle:"Great-Granddaughter",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Daughter's Son's Son",title:"\u66fe\u5b59\u5b50",engTitle:"Great-Grandson",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Daughter's Son's Daughter",title:"\u66fe\u5b59\u5973",engTitle:"Great-Granddaughter",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Daughter's Daughter's Son",title:"\u66fe\u5b59\u5b50",engTitle:"Great-Grandson",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Daughter's Daughter's Daughter",title:"\u66fe\u5b59\u5973",engTitle:"Great-Granddaughter",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Older Sister's Father",title:"\u7236\u89aa / \u7238\u7238",engTitle:"Father",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Younger Sister's Father",title:"\u7236\u89aa / \u7238\u7238",engTitle:"Father",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Older Brother's Father",title:"\u7236\u89aa / \u7238\u7238",engTitle:"Father",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Younger Brother's Father",title:"\u7236\u89aa / \u7238\u7238",engTitle:"Father",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Older Sister's Mother",title:"\u6bcd\u89aa / \u5abd\u5abd",engTitle:"Mother",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Younger Sister's Mother",title:"\u6bcd\u89aa / \u5abd\u5abd",engTitle:"Mother",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Older Brother's Mother",title:"\u6bcd\u89aa / \u5abd\u5abd",engTitle:"Mother",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Younger Brother's Mother",title:"\u6bcd\u89aa / \u5abd\u5abd",engTitle:"Mother",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Son's Father",title:"\u4f60 \u6216\u8005 \u4e08\u592b/\u8001\u516c",engTitle:"You or your husband",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Daughter's Father",title:"\u4f60 \u6216\u8005 \u4e08\u592b/\u8001\u516c",engTitle:"You or your husband",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Son's Mother",title:"\u4f60 \u6216\u8005 \u59bb\u5b50/\u8001\u5a46",engTitle:"You or your wife",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Daughter's Mother",title:"\u4f60 \u6216\u8005 \u59bb\u5b50/\u8001\u5a46",engTitle:"You or your wife",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Father's Older Brother's Son",title:"",engTitle:"First cousin once removed",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Father's Younger Brother's Son",title:"",engTitle:"First cousin once removed",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Father's Older Brother's Daughter",title:"",engTitle:"First cousin once removed",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Father's Younger Brother's Daughter",title:"",engTitle:"First cousin once removed",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Father's Older Sister's Son",title:"",engTitle:"First cousin once removed",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Father's Younger Sister's Son",title:"",engTitle:"First cousin once removed",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Father's Older Sister's Daughter",title:"",engTitle:"First cousin once removed",reverseMale:"XX",reverseFemale:"YY"},{relationship:"Father's Father's Younger Sister's Daughter",title:"",engTitle:"First cousin once removed",reverseMale:"XX",reverseFemale:"YY"}],G=Object(c.a)((function(e){var r=e.className,t=Object(u.useState)([]),l=Object(p.a)(t,2),s=l[0],i=l[1],a=Object(u.useState)(""),n=Object(p.a)(a,2),o=n[0],h=n[1],v=Object(u.useState)({}),Y=Object(p.a)(v,2),g=Y[0],F=Y[1],d=Object(u.useState)("Male"),X=Object(p.a)(d,2),M=X[0],c=X[1],m=Object(u.useState)(""),G=Object(p.a)(m,2),C=G[0],k=G[1],N=Object(u.useState)(!1),A=Object(p.a)(N,2),P=A[0],U=A[1];Object(u.useEffect)((function(){E(),z()}));var R=function(e){i(s.concat(e))},z=function(){var e="reverse".concat(M);k(null===g||void 0===g?void 0:g[e])},E=function(){var e="";s.forEach((function(r,t){e="clear"===r?"":t===s.length-1?"".concat(e," ").concat(r):"".concat(e," ").concat(r,"'s")})),h(e.trimStart()),F(function(e){return f.find((function(r){return r.relationship===e}))}(e.trimStart()))};return Object(S.jsxs)("div",{className:r,children:[Object(S.jsx)("h1",{children:"Familator"}),Object(S.jsxs)(j,{children:["Input ",Object(S.jsx)("span",{children:o&&"My ".concat(o)}),Object(S.jsx)("button",{onClick:function(){i(T()(s,1))},children:"Back"})]}),Object(S.jsxs)(x,{children:[(null===g||void 0===g?void 0:g.title)||"No Relative Found. Clear and try again.",(null===g||void 0===g?void 0:g.engTitle)&&Object(S.jsx)("span",{children:null===g||void 0===g?void 0:g.engTitle})]}),Object(S.jsxs)(W,{children:[o&&Object(S.jsxs)(y,{onClick:function(){return U(!P)},children:[P?"Hide":"Show"," Reverse Relation"]}),P&&C]}),Object(S.jsxs)(w,{children:["Your Gender:",Object(S.jsxs)("div",{children:[Object(S.jsx)(D,{active:"Male"===M,onClick:function(){return c("Male")},children:"Male"}),Object(S.jsx)(D,{active:"Female"===M,onClick:function(){return c("Female")},children:"Female"})]})]}),Object(S.jsx)(H,{children:O.map((function(e){return Object(S.jsx)(b,{copy:e,setRelation:R},e)}))}),Object(S.jsx)(B,{copy:"clear",setRelation:R},"clear")]})}))(s||(s=Object(M.a)(["\n  max-width: 1000px;\n  margin: 0 auto;\n"]))),j=c.a.p(i||(i=Object(M.a)(["\n  background-color: #f4f4f4;\n  border-radius: 5px;\n  padding: 10px;\n  color: #70757a;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 120px;\n\n  span {\n    color: black;\n    padding: 10px;\n  }\n\n  button {\n    width: max-content;\n    background: red;\n    color: white;\n    padding: 10px 20px;\n    border-radius: 5px;\n    border-style: none;\n\n    &:hover {\n      background-color: darkred;\n    }\n  }\n"]))),B=Object(c.a)(b)(a||(a=Object(M.a)(["\n  background: blue;\n  color: white;\n\n  &:hover {\n    background: darkblue;\n    cursor: pointer;\n  }\n"]))),x=c.a.p(n||(n=Object(M.a)(["\n  border: 3px solid green;\n  padding: 25px;\n  font-size: 36px;\n  font-weight: 500;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n\n  span {\n    margin-top: 10px;\n    font-size: 24px;\n    color: grey;\n  }\n"]))),w=c.a.div(o||(o=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 25px;\n  align-items: center;\n"]))),D=c.a.button(h||(h=Object(M.a)(["\n  cursor: pointer;\n  border: 1px solid grey;\n  border-radius: 5px;\n  padding: 15px;\n  background: ",";\n  color: ",";\n  margin: 10px;\n\n  &:hover {\n    background: ",";\n  }\n"])),(function(e){return e.active?"green":"lightgrey"}),(function(e){return e.active?"white":"grey"}),(function(e){return e.active?"green":"darkgrey"})),H=c.a.div(v||(v=Object(M.a)(["\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n"]))),W=c.a.div(Y||(Y=Object(M.a)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"]))),y=c.a.button(g||(g=Object(M.a)(["\n  border: 1px solid grey;\n  border-radius: 5px;\n  background: lightgrey;\n  color: black;\n  padding: 10px;\n  font-size: 20px;\n  width: max-content;\n"])));var C=function(){return Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(G,{})})},k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(r){var t=r.getCLS,l=r.getFID,s=r.getFCP,i=r.getLCP,a=r.getTTFB;t(e),l(e),s(e),i(e),a(e)}))};X.a.render(Object(S.jsx)(F.a.StrictMode,{children:Object(S.jsx)(C,{})}),document.getElementById("root")),k()}},[[39,1,2]]]);
//# sourceMappingURL=main.df2af75e.chunk.js.map