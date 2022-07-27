const imgDir = "images";
const type = {
  ahp: "ahp",
  selective: "selective",
};
const ahpText = "다음 중 더 위험해 보이는 상황쪽으로 슬라이더를 조절해주세요.";
const selectiveText = "다음 중 하나의 영상을 선택하세요.";

export const load = () => {
  let q = [];

  for (let i = 1; i <= 4; i++) {
    if (i <= 3) {
      q.push({
        type: type.ahp,
        text: ahpText,
        img: [`${imgDir}/${i}-1.jpg`, `${imgDir}/${i}-2.jpg`],
      });
    } else {
      let img = [];
      for (let j = 1; j <= 5; j++) {
        img.push(`${imgDir}/${i}-${j}.jpg`);
      }

      q.push({
        type: type.selective,
        text: selectiveText,
        img,
      });
    }
  }
  return q;
};

// export const load = (qid) => {
//   if (qid <= 3) {
//     const text = "다음 중 더 위험해 보이는 상황쪽으로 슬라이더를 조절해주세요.";

//     return {
//       type: type.ahp,
//       text,
//       img: [`${imgDir}/${qid}-1.jpg`, `${imgDir}/${qid}-2.jpg`],
//     };
//   } else {
//     const text = "다음 중 하나의 영상을 선택하세요.";

//     let img = [];
//     for (let i = 1; i <= 5; i++) {
//       img.append(`${imgDir}/${qid}-${i}.jpg`);
//     }

//     return {
//       type: type.selective,
//       text,
//       img,
//     };
//   }
// };

export const init = () => {
  return {
    total_questions: 4,
    version: "0.0.1",
  };
};
