import { Service } from 'egg';
import { WhereOptions } from 'sequelize';
type TableOptionType = GoodsTableType;

/**
 * HackerNews Api Service
 */
export class GoodsService extends Service {
    // 获取数据表
    get Table() {
        return this.ctx.model.Goods;
    }

    /**
     * list 列表
     */
    public async getList(body: any) {
        const { Op } = this.app.Sequelize;
        console.log('data body:>> ', body);
        const page = Number.parseInt(body.page || this.config.common.page);
        const pageSize = Number.parseInt(body.pageSize || this.config.common.pageSize);


        const where: WhereOptions<TableOptionType> = {
            // parent_id: { [Op.eq]: 0 },
        };
        if (body.title) where.title = { [Op.like]: body.title };

        const { rows, count } = await this.Table.findAndCountAll({
            where,
            offset: (page - 1) * pageSize,
            limit: pageSize,
            order: [
                ['sort', 'DESC'],
            ],
        });

        console.log('list :>> ', { rows, count });
        return { list: rows, total: count };
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
