export function getMatchedValueInArr(
  configArr: any,
  weightKey = 'weight',
  curKeyWords: any[],
  dir: any
) {
  const tmpArr: Array<number> = [];
  //0.
  curKeyWords = typeof curKeyWords == 'undefined' ? [''] : curKeyWords;
  const randomAttrName = [
    'Background',
    'Background Accessory',
    'Ear',
    'Eyelid',
    'Hand',
    'HeadWear',
  ];
  console.log('dir :>> ', dir);
  console.log('curKeyWords :>> ', curKeyWords);
  console.log('configArr :>> ', configArr);
  let filteredArr = configArr;
  //1. 判断若当前 attr 是需要匹配的组件，则根据关键词筛选
  if (randomAttrName.indexOf(dir) == -1) {
    filteredArr = configArr.filter((attrItem: any) => {
      let hasKeyWords = true;
      for (let i = 0; i < curKeyWords.length; i++) {
        if (attrItem.empty || attrItem.filename.indexOf(curKeyWords[i]) == -1) {
          hasKeyWords = false;
          break;
        }
      }
      return hasKeyWords || attrItem.empty;
      // return hasKeyWords;
    });
  }
  console.log('filteredArr :>> ', filteredArr);
  //2. 根据 weight （权重）选取部件
  filteredArr.forEach((el: { [x: string]: any }, index: number) => {
    const weight = el[weightKey];
    for (let i = 0; i < weight; i++) tmpArr.push(index);
  });
  tmpArr.sort(() => 0.5 - Math.random());
  const len = tmpArr.length;
  const randomIndex = parseInt((Math.random() * 10000).toFixed(0)) % len;
  return filteredArr[tmpArr[randomIndex]];
}
