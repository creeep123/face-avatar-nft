export function getMatchedValueInArr(
  configArr: any,
  weightKey = 'weight',
  curKeyWords: any
) {
  debugger;
  const tmpArr: Array<number> = [];
  //1. 筛选出待随机列表
  // console.log('curKeyWords :>> ', curKeyWords);
  // const filteredArr = configArr.filter((attrItem: any) => {
  //   let hasKeyWords = true;
  //   for (let i = 0; i < curKeyWords.length; i++) {
  //     if (attrItem.empty || attrItem.filename.indexOf(curKeyWords[i]) == -1) {
  //       hasKeyWords = false;
  //       break;
  //     }
  //   }
  //   return hasKeyWords || attrItem.empty;
  // });
  // console.log('filteredArr :>> ', filteredArr);
  // 根据 weight （权重）选取部件
  configArr.forEach((el: { [x: string]: any }, index: number) => {
    const weight = el[weightKey];
    for (let i = 0; i < weight; i++) tmpArr.push(index);
  });
  tmpArr.sort(() => 0.5 - Math.random());
  const len = tmpArr.length;
  const randomIndex = parseInt((Math.random() * 10000).toFixed(0)) % len;
  // console.log(
  //   'configArr[tmpArr[randomIndex]] :>> ',
  //   configArr[tmpArr[randomIndex]]
  // );
  // debugger;
  return configArr[tmpArr[randomIndex]];
}
