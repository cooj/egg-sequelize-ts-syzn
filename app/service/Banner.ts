import { Service } from 'egg';

export interface NewsItem {
    id: number;
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
    descendants: number;
    kids: number[];
    by: string;
}


/**
 * HackerNews Api Service
 */
export class BannerService extends Service {

    /**
     * list 列表
     */
    public async getList(data: any): Promise<BannerTableItem[]> {
        // console.log('this.app.mysql :>> ', this.app.mysql);
        console.log('data :>> ', data);

        return [];
    }


    /**
     * insert 新增
     */
    public async insert(data: BannerTableItem) {
        // 插入
        // const result = await this.app.mysql.insert('banner', data);
        // // 判断插入成功
        // if (result.affectedRows === 1) {
        //     return result;
        // }
        console.log('data :>> ', data);
        return '';
    }


}

export default BannerService;
