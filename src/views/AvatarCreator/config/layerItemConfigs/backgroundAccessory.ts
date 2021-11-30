import { GenderType } from '../../interface/avatar.interface';
import { LayerItemConfig } from '../../interface/layer.interface';
const backgroundAccessoryConfig: LayerItemConfig[] = [
  {
    genderType: GenderType.MALE,
    filename: '背景装饰_白猫举爪',
    weight: 10,
  },
  {
    genderType: GenderType.UNSET,
    empty: true,
    weight: 10,
  },
];
export default backgroundAccessoryConfig;
