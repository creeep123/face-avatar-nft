import { GenderType, LAYER_ID } from './../../interface/avatar.interface';
import { avaiableColors } from './../avaiable-colors';
import { LayerItemConfig } from './../../interface/layer.interface';
const hatConfig: LayerItemConfig[] = [
  {
    genderType: GenderType.UNSET,
    empty: true,
    weight: 10,
  },
  {
    filename: '头像初稿_戴帽子-10',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAT],
    weight: 15,
  },
  {
    filename: '头像初稿_戴帽子-16',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAT],
    weight: 15,
  },
  {
    genderType: GenderType.UNSET,
    filename: '天使_戴帽子_无帽子',
    weight: 1,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAT],
  },
];

export default hatConfig;
