// This file is created by egg-ts-helper@1.34.7
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportBanner from '../../../app/controller/banner';
import ExportBase from '../../../app/controller/base';
import ExportGoods from '../../../app/controller/goods';
import ExportMenu from '../../../app/controller/menu';
import ExportNews from '../../../app/controller/news';
import ExportUser from '../../../app/controller/user';
import ExportVideo from '../../../app/controller/video';
import ExportWeb from '../../../app/controller/web';

declare module 'egg' {
  interface IController {
    banner: ExportBanner;
    base: ExportBase;
    goods: ExportGoods;
    menu: ExportMenu;
    news: ExportNews;
    user: ExportUser;
    video: ExportVideo;
    web: ExportWeb;
  }
}
