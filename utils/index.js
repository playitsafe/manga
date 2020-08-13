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

//***convert full daily contents obj to array and add color
// {
//   Mon: [{},{}]
// }
// ===
// [
//   [{}, {}],
//   [{}, {}],
//   ...
// ]

const addColorByCategory = (obj) => {
  switch (obj.category) {
    case "少年":
      obj.color = '#046afa'
      break;
    
    case "悬疑":
      obj.color = '#00b19a'
      break;

    case "恋爱":
      obj.color = '#fd337f'
      break;
    
    case "治愈":
      obj.color = '#18b636'
      break;

    case "古风":
      obj.color = '#8e702f'
      break;
    
    case "奇幻":
      obj.color = '#046afa'
      break;
      
    case "搞笑":
      obj.color = '#37308c'
      break;
    
    case "校园":
      obj.color = '#18b636'
      break;
    
    case "都市":
      obj.color = '#00b19a'
      break;
      
    case "励志":
      obj.color = '#37308c'
      break;
    
    default:
      break;
  }
}
export const getFullWeekArr = (dailyContents) => {
  let weekArray = [];
  for(let day of days) {
    for(let key in dailyContents) { //Mon...
      if(key === day) {
        weekArray.push(dailyContents[key]);
      }
    }
  }

  //inject color
  for(let day of weekArray) {
    for(let obj of day) {
      addColorByCategory(obj);
    }
  }

  return weekArray;
}