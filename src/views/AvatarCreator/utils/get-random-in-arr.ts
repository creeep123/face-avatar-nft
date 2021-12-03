export function getRandomValueInArr(configArr: any, weightKey = 'weight') {
  const tmpArr: Array<number> = [];
  configArr.forEach((el: { [x: string]: any }, index: number) => {
    const weight = el[weightKey];
    for (let i = 0; i < weight; i++) tmpArr.push(index);
  });
  tmpArr.sort(() => 0.5 - Math.random());
  const len = tmpArr.length;
  const randomIndex = parseInt((Math.random() * 10000).toFixed(0)) % len;
  return configArr[tmpArr[randomIndex]];
}
