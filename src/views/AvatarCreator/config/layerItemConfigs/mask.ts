import { avaiableColors } from '../avaiable-colors';
import { GenderType, LAYER_ID } from './../../interface/avatar.interface';
import { LayerItemConfig } from './../../interface/layer.interface';
const maskConfig: LayerItemConfig[] = [
  {
    empty: true,
    genderType: GenderType.UNSET,
    weight: 30,
  },
  {
    // empty: true,
    filename: '头像初稿_有口罩',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.MASK],
    weight: 20,
  },
  {
    // empty: true,
    filename: '头像初稿_男女-脸部装饰-创可贴_无口罩',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.MASK],
    weight: 5,
  },
];

export default maskConfig;
