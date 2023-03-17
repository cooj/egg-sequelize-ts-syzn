import { Service } from 'egg';


/**
 * HackerNews Api Service
 */
export class GoodsService extends Service {

    /**
     * list 列表
     */
    public async getList(data: any): Promise<GoodsTableType[]> {
        const { Op } = this.app.Sequelize;
        console.log('data :>> ', data);
        const page = Number.parseInt(data.page || this.config.common.page);
        const pageSize = Number.parseInt(data.pageSize || this.config.common.pageSize);

        const keyword = data.title || '';

        const { rows, count } = await this.ctx.model.Goods.findAndCountAll({
            where: {
                title: {
                    [Op.like]: keyword,
                },
            },
            offset: (page - 1) * pageSize,
            limit: pageSize,
        });

        console.log('list :>> ', { rows, count });
        return [];
    }


    /**
     * insert 新增
     */
    public async insert(data: GoodsTableType) {
        console.log('data :>> ', data);
        // 插入
        return '';
    }


}

export default GoodsService;
