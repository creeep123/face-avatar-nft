const matchAttributesFromFaceAttributeInfos = (faceAttributeInfos) => {
  const attributes = {};

  //判断背景
  switch (1) {
    default:
      attributes.Background = [''];
  }

  //判断脸型
  switch (faceAttributeInfos.Shape.Type) {
    case 0:
      attributes.Base = ['方形脸'];
      break;
    // case 1:
    //   attributes.Base = ['三角脸'];
    //   break;
    case 2:
      attributes.Base = ['鹅蛋脸'];
      break;
    case 3 || 1:
      attributes.Base = ['心形脸'];
      break;
    case 4:
      attributes.Base = ['圆脸'];
      break;
    default:
      attributes.Base = ['鹅蛋脸'];
  }

  //刘海
  switch (faceAttributeInfos.Hair.Bang.Type) {
    case 0:
      attributes.Bangs = ['无刘海'];
      break;
    case 1:
      attributes.Bangs = ['有刘海'];
      break;
    default:
      attributes.Bangs = ['无刘海'];
  }

  //耳朵
  switch (1) {
    default:
      attributes.Ear = [''];
  }

  //耳饰
  switch (1) {
    default:
      attributes.EarRing = [''];
  }

  //眉毛
  switch (faceAttributeInfos.Eyebrow.EyebrowLength.Type) {
    case 0:
      attributes.Eyebrows = ['短'];
      break;
    case 1:
      attributes.Eyebrows = ['长'];
      break;
    default:
      attributes.Eyebrows = ['短'];
  }
  switch (faceAttributeInfos.Eyebrow.EyebrowDensity.Type) {
    case 0:
      attributes.Eyebrows.push('细');
      break;
    case 1:
      attributes.Eyebrows.push('粗');
      break;
    default:
      attributes.Eyebrows.push('细');
  }
  switch (faceAttributeInfos.Eyebrow.EyebrowDensity.Type) {
    case 0:
      attributes.Eyebrows.push('弯眉');
      break;
    case 1:
      attributes.Eyebrows.push('平眉');
      break;
    default:
      attributes.Eyebrows.push('弯眉');
  }

  // 眼睛
  switch (faceAttributeInfos.EyeOpen) {
    case false:
      attributes.Eyes = ['闭眼'];
      break;
    case true:
      attributes.Eyes = ['睁'];
      break;
    default:
      attributes.Eyes = ['睁'];
  }
  switch (faceAttributeInfos.EyeSize) {
    case 0:
      attributes.Eyes.push('小');
      break;
    // case 1:
    //   attributes.Eyes.push('普通');
    //   break;
    case 1 || 2:
      attributes.Eyes.push('大');
      break;
    default:
      attributes.Eyes.push('大');
  }

  //胡子
  switch (faceAttributeInfos.Moustache.Type) {
    case 0:
      attributes.FacialHair = ['无胡子'];
      break;
    case 1:
      attributes.FacialHair = ['有胡子'];
      break;
    default:
      attributes.FacialHair = ['无胡子'];
  }

  //眼镜
  switch (faceAttributeInfos.Eye.Glass.Type) {
    case 0:
      attributes.Glasses = ['无眼镜'];
      break;
    case 1:
      attributes.Glasses = ['普通眼镜'];
      break;
    case 2:
      attributes.Glasses = ['墨镜'];
      break;
    default:
      attributes.Glasses = ['无胡子'];
  }

  //头发
  switch (faceAttributeInfos.Hair.Length.Type) {
    case 0:
      attributes.Hair = ['光头'];
      break;
    case 1:
      attributes.Hair = ['短发'];
      break;
    case 2:
      attributes.Hair = ['中发'];
      break;
    case 3:
      attributes.Hair = ['长发'];
      break;
    case 4:
      attributes.Hair = ['绑发'];
      break;
    default:
      attributes.Hair = ['中发'];
  }

  //帽子
  switch (faceAttributeInfos.Hat.Style) {
    case 0:
      attributes.Hat = ['无帽子'];
      break;
    case 1 || 2 || 3:
      attributes.Hat = ['戴帽子'];
      break;
    // case 1:
    //   attributes.Hat = ['戴帽子'];
    //   break;
    // case 2:
    //   attributes.Hat = ['墨镜'];
    //   break;
    default:
      attributes.Hat = ['无帽子'];
  }

  //头饰
  switch (1) {
    default:
      attributes.Headwear = [''];
  }

  //口罩
  switch (faceAttributeInfos.Mask.Type) {
    case true:
      attributes.Mask = ['口罩'];
      break;
    case false:
      attributes.Mask = ['无口罩'];
      break;
    default:
      attributes.Mask = ['无口罩'];
  }

  //嘴巴
  switch (faceAttributeInfos.Mouth.MouthOpen.Type) {
    case 0:
      attributes.Mouth = ['闭嘴'];
      break;
    case 1:
      attributes.Mouth = ['张嘴'];
      break;
    default:
      attributes.Mouth = ['闭嘴'];
  }

  //鼻子
  switch (faceAttributeInfos.Nose.Type) {
    case 0:
      attributes.Nose = ['朝天鼻'];
      break;
    case 1:
      attributes.Nose = ['鹰钩鼻'];
      break;
    case 2:
      attributes.Nose = ['普通'];
      break;
    case 3:
      attributes.Nose = ['圆鼻'];
      break;
    default:
      attributes.Nose = ['普通'];
  }

  //衣服
  switch (1) {
    default:
      attributes.Shirt = [''];
  }

  return attributes;
};

export default matchAttributesFromFaceAttributeInfos;
