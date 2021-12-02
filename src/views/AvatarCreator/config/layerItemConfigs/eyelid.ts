import { GenderType, LAYER_ID } from '../../interface/avatar.interface';
import { LayerItemConfig } from '../../interface/layer.interface';
import { avaiableColors } from '../avaiable-colors';
const eyelidConfig: LayerItemConfig[] = [
  {
    genderType: GenderType.UNSET,
    filename: '头像初稿_双眼皮',
    weight: 10,
    avaiableColorGroups: avaiableColors[LAYER_ID.EYELID],
  },
  {
    genderType: GenderType.UNSET,
    empty: true,
    weight: 50,
  },
];
export default eyelidConfig;
