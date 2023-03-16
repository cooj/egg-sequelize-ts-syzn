import { Service } from 'egg';


/**
 * HackerNews Api Service
 */
export class GoodsService extends Service {

    /**
     * list 列表
     */
    public async getList(data: any): Promise<GoodsTableItem[]> {
        console.log('data :>> ', data);
        // const pageNum = Number.parseInt(data.pageNum || 1);
        // const pageSize = Number.parseInt(data.pageSize || 10);
        // const titleReg = new RegExp(data.title, 'ig');
        // const params = {
        //     title: '',
        // };

        return [];
    }


    /**
     * insert 新增
     */
    public async insert(data: BannerTableItem) {
        console.log('data :>> ', data);
        // 插入
        return '';
    }


}

export default GoodsService;
