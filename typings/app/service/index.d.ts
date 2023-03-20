// This file is created by egg-ts-helper@1.34.7
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportBanner from '../../../app/service/Banner';
import ExportGoods from '../../../app/service/Goods';
import ExportMenu from '../../../app/service/Menu';
import ExportNews from '../../../app/service/News';
import ExportUser from '../../../app/service/User';
import ExportVideo from '../../../app/service/Video';
import ExportCompany from '../../../app/service/Company';

declare module 'egg' {
  interface IService {
    banner: AutoInstanceType<typeof ExportBanner>;
    goods: AutoInstanceType<typeof ExportGoods>;
    menu: AutoInstanceType<typeof ExportMenu>;
    news: AutoInstanceType<typeof ExportNews>;
    user: AutoInstanceType<typeof ExportUser>;
    video: AutoInstanceType<typeof ExportVideo>;
    company: AutoInstanceType<typeof ExportCompany>;
  }
}
