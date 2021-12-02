import { LayerItemConfig, LayerListItem } from './interface/layer.interface';
import Vue from 'vue';
import Component from 'vue-class-component';
import { layerList } from './config/refs';
import { CreateAvatarDto } from './dto/create-avatar.dto';
import { GenderType, RenderType } from './interface/avatar.interface';
import { getRandomValueInArr } from './utils/get-random-in-arr';
import { getMatchedValueInArr } from './utils/get-match-attr-in-arr';
import getMatchedColorInArr from './utils/get-match-color-in-arr';
import store from '@/store';

@Component
export default class AvatarCreatorMixin extends Vue {
  /**
   * 生成一个随机头像，返回
   * @param config
   */
  async createOne(
    config: CreateAvatarDto,
    congratulateAction?: () => any,
    chosenAttr?: any
  ): Promise<string> {
    const { size, gender, skin } = config;
    const ls: Array<LayerListItem> = JSON.parse(JSON.stringify(layerList));
    ls.sort((a: any, b: any) => a.zIndex - b.zIndex);
    // 1. 获取随机的 layer 组合
    let randomLayerList = ls
      .map((l) => ({
        id: l.id,
        dir: l.dir,
        layer: getMatchedValueInArr(
          // 性别过滤
          l.layers.filter(({ genderType }: any) => {
            // console.log('genderType :>> ', genderType);
            return (
              gender == GenderType.UNSET ||
              genderType == gender ||
              genderType == GenderType.UNSET
            );
          }),
          'weight',
          chosenAttr[l.dir],
          // 调试用
          l.dir
        ),
      }))
      // 去除不需要显示的
      .filter(({ layer }) => !layer.empty);

    // console.log('randomLayerList :>> ', randomLayerList);
    // 2. 检查需要删除的
    const removeIdList: Array<string> = randomLayerList.reduce((res, item) => {
      return res.concat(item.layer.removeLayers || []);
    }, []);

    // 2.1 删除
    randomLayerList = randomLayerList.filter(
      ({ id }: { id: any }) => removeIdList.indexOf(id) < 0
    );

    // 3. 选取一波颜色
    randomLayerList.forEach(({ id, dir, layer }) => {
      if (!layer.avaiableColorGroups || !layer.avaiableColorGroups.length)
        return;
      if (dir == 'Base') {
        layer.color = getMatchedColorInArr(
          layer.avaiableColorGroups,
          skin
        ).value;
      } else {
        layer.color = getRandomValueInArr(layer.avaiableColorGroups).value;
      }
    });
    // 3.1 检查颜色的冲突
    randomLayerList.forEach(({ layer }) => {
      if (!layer.colorNotSameAs || !layer.colorNotSameAs.length) return;
      const currentColors = layer.color;
      layer.colorNotSameAs.forEach((id: any) => {
        const target = randomLayerList.find((e) => e.id === id);
        let tried = 0;
        const maxTry = 10;
        // 只判断第一个颜色相同 为冲突
        while (target && target.layer.color[0] === currentColors[0]) {
          tried++;
          if (tried > maxTry) break;
          // 重新取色
          target.layer.color = getRandomValueInArr(
            target.layer.avaiableColorGroups
          ).value;
        }
      });
    });
    // 3.2 检查颜色跟随
    randomLayerList.forEach(({ layer }) => {
      if (!layer.colorSameAs) return;
      const target = randomLayerList.find((e) => e.id === layer.colorSameAs);
      layer.color = target && target.layer.color;
    });
    console.log('rdlist :>> ', JSON.parse(JSON.stringify(randomLayerList)));
    // 删除冗余的信息
    randomLayerList.forEach(({ layer }) => {
      delete layer.avaiableColorGroups;
      delete layer.genderType;
      delete layer.weight;
      delete layer.removeLayers;
      delete layer.colorNotSameAs;
      delete layer.colorSameAs;
    });
    console.log('rdlistAft :>> ', JSON.parse(JSON.stringify(randomLayerList)));
    let congratulate = false;
    // 4. 绘制 svg
    const groups = [];
    for (const { layer, dir } of randomLayerList) {
      if (layer.congratulate) congratulate = true;
      let svgRaw = (
        await require(`!!raw-loader!./resource/${dir}/${layer.filename}.svg`)
      ).default;

      // 4.1 替换颜色
      const matchColorReg = /{{color\[\d+\]}}/;
      let matchRes = svgRaw.match(matchColorReg);
      while (matchRes) {
        const str = matchRes[0];
        const index = parseInt(str.replace(/^{{color\[(\d+)\]}}$/, '$1'));
        console.log('layer :>> ', layer);
        const colors =
          typeof layer.color == 'undefined' ? ['#BCA07B'] : layer.color;
        svgRaw = svgRaw.replace(matchColorReg, colors[index]);
        matchRes = svgRaw.match(matchColorReg);
      }
      // console.log('matchRes :>> ', matchRes);

      // 4.2 取出svg 内的内容， 放入 <g></g>， 再放入 最终的svg
      // if(dir=="Base"){
      //   console.log('svgRaw :>> ', svgRaw);
      // }
      // console.log('dir :>> ', dir);
      // 原来的
      // groups.push(
      //   `\n<g id="gaoxia-avatar-${dir}">\n
      //     ${svgRaw.replace(/<svg.*(?=>)>/, "").replace("</svg>", "")}
      //   \n</g>\n`
      // );
      // const className = dir=="Eyes"||dir=="Nose"||dir=="Bangs"?"":"smart-engineering"
      const clsdir = dir.replace(/\s+/g, '');
      const className = '';
      groups.push(
        `\n<g id="gaoxia-avatar-${dir}" class="${className}">\n
          ${svgRaw
            .replace(/<svg.*?>/, '')
            .replace('</svg>', '')
            .replace(/cls-/g, `cls-${clsdir}-`)}
        \n</g>\n`
      );
    }

    if (congratulate) congratulateAction && congratulateAction();
    const svg =
      `<svg width="${size}" height="${size}" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
      ${groups.join('\n\n')}
    </svg>`
        .trim()
        .replace(/(\n|\t)/g, '');
    return svg;
  }
}
