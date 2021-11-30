import { LAYER_ID, GenderType } from './../../interface/avatar.interface';
import { avaiableColors } from './../avaiable-colors';
import { LayerItemConfig } from './../../interface/layer.interface';
const baseConfig: LayerItemConfig[] = [
  {
    genderType: GenderType.UNSET,
    filename: '头像初稿_心形脸',
    weight: 10,
    avaiableColorGroups: avaiableColors[LAYER_ID.BASE],
  },
  {
    genderType: GenderType.UNSET,
    filename: '头像初稿_圆脸',
    weight: 10,
    avaiableColorGroups: avaiableColors[LAYER_ID.BASE],
  },
  {
    genderType: GenderType.UNSET,
    filename: '头像初稿_鹅蛋脸',
    weight: 10,
    avaiableColorGroups: avaiableColors[LAYER_ID.BASE],
  },
  {
    genderType: GenderType.UNSET,
    filename: '头像初稿_方形脸',
    weight: 10,
    avaiableColorGroups: avaiableColors[LAYER_ID.BASE],
  },
];
export default baseConfig;
