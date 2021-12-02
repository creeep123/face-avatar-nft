import { SkinType } from '../interface/avatar.interface';

export default function getMatchedColorInArr(
  configArr: any,
  curSkin?: SkinType
) {
  //1. 根据肤色筛选部件
  let filteredArr: any = [];
  debugger;
  switch (curSkin) {
    case SkinType.YELLOW:
      filteredArr = filteredArr.concat(configArr.slice(0, 3));
      break;
    case SkinType.WHITE:
      filteredArr.push(configArr[3]);
      break;
    case SkinType.BROWN:
      filteredArr.push(configArr[4]);
      break;
    case SkinType.BLACK:
      filteredArr.push(configArr[5]);
      break;
    default:
      filteredArr = filteredArr.concat(configArr.slice(0, 3));
  }

  //2. 根据 weight （权重）选取部件
  const tmpArr: Array<number> = [];
  filteredArr.forEach((el: { [x: string]: any }, index: number) => {
    const weight = el['weight'];
    for (let i = 0; i < weight; i++) tmpArr.push(index);
  });
  tmpArr.sort(() => 0.5 - Math.random());
  const len = tmpArr.length;
  const randomIndex = parseInt((Math.random() * 10000).toFixed(0)) % len;
  return filteredArr[tmpArr[randomIndex]];
}
