import { avaiableColors } from './../avaiable-colors';
import { GenderType, LAYER_ID } from './../../interface/avatar.interface';
import { LayerItemConfig } from './../../interface/layer.interface';
const handConfig: LayerItemConfig[] = [
  {
    filename: '背景装饰_端茶',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAND],
    colorSameAs: LAYER_ID.BASE,
    weight: 10,
  },
];
export default handConfig;
