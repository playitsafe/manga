//***convert daily contents obj to array and add color
// {
//   Mon: {row1:[], row2:[]}
// }
// ===
// [
//   {row1:[],row2:[]},...{}
// ]
const colors = ['#37308c', '#fd337f','#8b00e9','#00b19a','#046afa','#eea802','#18b636', '#8e702f'];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
export const getDailyContentArray = (dailyImgsObj) => {
  let dailyImgArray = [];
  for (let i = 0; i < days.length; i++) {
    for (let imgDayKey in dailyImgsObj) {
      if (imgDayKey === days[i]) {
        dailyImgArray.push(dailyImgsObj[imgDayKey]);
      }
    }
  }

  for (let i = 0; i < dailyImgArray.length; i++) {
    for (let row in dailyImgArray[i]) {
      for (let j = 0; j < dailyImgArray[i][row].length; j++) {
        let randomIndex = Math.floor(Math.random() * colors.length);
        dailyImgArray[i][row][j].color = colors[randomIndex];
      }
    }
  }
  return dailyImgArray;
}

//***convert latest contents obj to array and add color
// {
//   "page1": [{}...{}]
//   "page2": [{}...{}]
// }
// ===
//newImgArray
/*
[
  [ {},...,{} ], [ {},...,{} ]
]
*/

export const getNewContentArray = (newImgs) => {
  let newImgArray = [];
  for (let newImgKey in newImgs) {
    newImgArray.push(newImgs[newImgKey]);
  }

  // add color
  for (const row of newImgArray) {
    for (let img of row) {
      let randomIndex = Math.floor(Math.random() * colors.length);
      img.color = colors[randomIndex];
    }
  }
  return newImgArray;
}

//***convert category contents obj to array and add color
// {
//   young: {
//     categoryTitle: "青春、热血还有战斗",
//     category: "少年",
//     imgs: [{}...{}]
//   },
//   ancient:{
//     ...
//   }
// }
// ===
//cateImgs:
// [{cateTitle:'', category:'', imgs:[]}, {}]
export const getCategoryArray = (categoryImgs) => {
  //get categoryImgs
  let cateImgs = [];

  for(let key in categoryImgs) {
    let randomIndex = Math.floor(Math.random() * colors.length);
    for(let img of categoryImgs[key].imgs) {
      img.color = colors[randomIndex];
    }
    cateImgs.push(categoryImgs[key]);
  }
  return cateImgs;
}

export const addColor = (rankings) => {
  for(let cate in rankings) {
    for(let key in rankings[cate]) {
      let randomIndex = Math.floor(Math.random() * colors.length);
      rankings[cate][key].color = colors[randomIndex];
    }
  }

  return rankings;
}

