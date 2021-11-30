import { GenderType } from './../../interface/avatar.interface';
import { LayerItemConfig } from './../../interface/layer.interface';
const maskConfig: LayerItemConfig[] = [
  {
    empty: true,
    genderType: GenderType.UNSET,
    weight: 100,
  },
  {
    // empty: true,
    filename: '头像初稿_口罩',
    genderType: GenderType.UNSET,
    weight: 100,
  },
  {
    // empty: true,
    filename: '头像初稿_男女-脸部装饰-创可贴_无口罩',
    genderType: GenderType.UNSET,
    weight: 100,
  },
];

export default maskConfig;
