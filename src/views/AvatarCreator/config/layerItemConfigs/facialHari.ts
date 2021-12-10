import { LAYER_ID, GenderType } from './../../interface/avatar.interface';
import { avaiableColors } from './../avaiable-colors';
import { LayerItemConfig } from './../../interface/layer.interface';
const facialHairConfig: LayerItemConfig[] = [
  // {
  //   genderType: GenderType.MALE,
  //   filename: 'Scruff',
  //   weight: 10,
  //   avaiableColorGroups: avaiableColors[LAYER_ID.FACIAL_HAIR],
  // },
  {
    genderType: GenderType.MALE,
    filename: '头像初稿_八字胡_有胡子',
    weight: 10,
    avaiableColorGroups: avaiableColors[LAYER_ID.FACIAL_HAIR],
  },
  {
    genderType: GenderType.MALE,
    filename: '头像初稿_有胡子',
    weight: 10,
    avaiableColorGroups: avaiableColors[LAYER_ID.FACIAL_HAIR],
  },
  {
    genderType: GenderType.MALE,
    filename: '头像初稿_有胡子2',
    weight: 10,
    colorSameAs: LAYER_ID.HAIR,
    avaiableColorGroups: avaiableColors[LAYER_ID.FACIAL_HAIR],
  },
  {
    filename: '无胡子',
    genderType: GenderType.UNSET,
    empty: true,
    weight: 10,
  },
];
export default facialHairConfig;
