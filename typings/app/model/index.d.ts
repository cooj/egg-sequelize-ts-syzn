// This file is created by egg-ts-helper@1.34.7
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportMenu from '../../../app/model/menu';
import ExportNews from '../../../app/model/news';
import ExportUser from '../../../app/model/user';
import ExportGoods from '../../../app/model/goods';

declare module 'egg' {
    interface IModel {
        Menu: ReturnType<typeof ExportMenu>;
        News: ReturnType<typeof ExportNews>;
        User: ReturnType<typeof ExportUser>;
        Goods: ReturnType<typeof ExportGoods>;
    }
}
