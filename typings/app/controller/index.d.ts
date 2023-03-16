// This file is created by egg-ts-helper@1.34.7
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportBanner from '../../../app/controller/banner';
import ExportBase from '../../../app/controller/base';
import ExportCommon copy from '../../../app/controller/common copy';
import ExportCommon from '../../../app/controller/common';
import ExportGoods from '../../../app/controller/goods';
import ExportMenu from '../../../app/controller/menu';
import ExportNews from '../../../app/controller/news';
import ExportUpload from '../../../app/controller/upload';
import ExportUser from '../../../app/controller/user';
import ExportVideo from '../../../app/controller/video';
import ExportWeb from '../../../app/controller/web';

declare module 'egg' {
  interface IController {
    banner: ExportBanner;
    base: ExportBase;
    common copy: ExportCommon copy;
    common: ExportCommon;
    goods: ExportGoods;
    menu: ExportMenu;
    news: ExportNews;
    upload: ExportUpload;
    user: ExportUser;
    video: ExportVideo;
    web: ExportWeb;
  }
}
