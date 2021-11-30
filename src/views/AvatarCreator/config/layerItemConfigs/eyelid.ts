import { GenderType } from '../../interface/avatar.interface';
import { LayerItemConfig } from '../../interface/layer.interface';
const eyelidConfig: LayerItemConfig[] = [
  {
    genderType: GenderType.UNSET,
    filename: '头像初稿_双眼皮',
    weight: 10,
  },
  {
    genderType: GenderType.UNSET,
    empty: true,
    weight: 50,
  },
];
export default eyelidConfig;
