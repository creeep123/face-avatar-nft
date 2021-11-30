export function getRandomValueInArr(configArr: any, weightKey = 'weight') {
  // debugger;
  const tmpArr: Array<number> = [];
  configArr.forEach((el: { [x: string]: any }, index: number) => {
    const weight = el[weightKey];
    for (let i = 0; i < weight; i++) tmpArr.push(index);
  });
  tmpArr.sort(() => 0.5 - Math.random());
  const len = tmpArr.length;
  const randomIndex = parseInt((Math.random() * 10000).toFixed(0)) % len;
  console.log(
    'configArr[tmpArr[randomIndex]] :>> ',
    configArr[tmpArr[randomIndex]]
  );
  // debugger;
  return configArr[tmpArr[randomIndex]];
}
