import { avaiableColors } from './../avaiable-colors';
import { GenderType, LAYER_ID } from './../../interface/avatar.interface';
import { LayerItemConfig } from './../../interface/layer.interface';
const handConfig: LayerItemConfig[] = [
  {
    empty: true,
    genderType: GenderType.UNSET,
    weight: 100,
  },
  {
    filename: '背景装饰_端茶',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAND],
    colorSameAs: LAYER_ID.BASE,
    weight: 10,
  },
  {
    filename: '背景装饰_端橘子汁',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAND],
    colorSameAs: LAYER_ID.BASE,
    weight: 10,
  },
  {
    filename: '背景装饰_端咖啡',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAND],
    colorSameAs: LAYER_ID.BASE,
    weight: 10,
  },
  {
    filename: '背景装饰_端奶茶',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAND],
    colorSameAs: LAYER_ID.BASE,
    weight: 10,
  },
  {
    filename: '背景装饰_端柠檬汁',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAND],
    colorSameAs: LAYER_ID.BASE,
    weight: 10,
  },
  {
    filename: '背景装饰_汉堡',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAND],
    colorSameAs: LAYER_ID.BASE,
    weight: 10,
  },
  {
    filename: '背景装饰_汉堡2',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAND],
    colorSameAs: LAYER_ID.BASE,
    weight: 10,
  },
  {
    filename: '背景装饰_黑客帝国专用',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAND],
    colorSameAs: LAYER_ID.BASE,
    weight: 2,
  },
  {
    filename: '背景装饰_握游戏手柄-白',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAND],
    colorSameAs: LAYER_ID.BASE,
    weight: 5,
  },
  {
    filename: '背景装饰_握游戏手柄-灰',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAND],
    colorSameAs: LAYER_ID.BASE,
    weight: 5,
  },
];
export default handConfig;
