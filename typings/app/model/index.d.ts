// This file is created by egg-ts-helper@1.34.7
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportClassify from '../../../app/model/classify';
import ExportFile from '../../../app/model/file';
import ExportGoods from '../../../app/model/goods';
import ExportGoodsImage from '../../../app/model/goods_image';
import ExportMenu from '../../../app/model/menu';
import ExportNews from '../../../app/model/news';
import ExportUser from '../../../app/model/user';
import ExportVideo from '../../../app/model/video';
import ExportCompany from '../../../app/model/company';

declare module 'egg' {
  interface IModel {
    Classify: ReturnType<typeof ExportClassify>;
    File: ReturnType<typeof ExportFile>;
    Goods: ReturnType<typeof ExportGoods>;
    GoodsImage: ReturnType<typeof ExportGoodsImage>;
    Menu: ReturnType<typeof ExportMenu>;
    News: ReturnType<typeof ExportNews>;
    User: ReturnType<typeof ExportUser>;
    Company: ReturnType<typeof ExportCompany>;
    Video: ReturnType<typeof ExportVideo>;
  }
}
