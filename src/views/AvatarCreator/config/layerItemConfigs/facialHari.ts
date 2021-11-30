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
    filename: '头像初稿_八字胡',
    weight: 10,
    avaiableColorGroups: avaiableColors[LAYER_ID.FACIAL_HAIR],
  },
  {
    genderType: GenderType.MALE,
    filename: '头像初稿_胡子',
    weight: 10,
    avaiableColorGroups: avaiableColors[LAYER_ID.FACIAL_HAIR],
  },
  {
    genderType: GenderType.MALE,
    filename: '头像初稿_胡子2',
    weight: 10,
    avaiableColorGroups: avaiableColors[LAYER_ID.FACIAL_HAIR],
  },
  {
    genderType: GenderType.UNSET,
    empty: true,
    weight: 100,
  },
];
export default facialHairConfig;
