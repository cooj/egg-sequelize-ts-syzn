import { Service } from 'egg';
import { WhereOptions } from 'sequelize';
type TableOptionType = FilesTableType;

/**
 * FileService Api Service
 */
export class FileService extends Service {
    get Table() { // 获取数据表
        return this.ctx.model.File;
    }
    /**
     * 获取列表
     * @param body body.page 分页
     * @return
     */
    public async getList(body: { [x: string]: string; page?: any; pageSize?: any; type?: any; }) {
        const { Op } = this.app.Sequelize;
        const page = Number.parseInt(body.page || this.config.common.page);
        const pageSize = Number.parseInt(body.pageSize || this.config.common.pageSize);

        const where: WhereOptions<TableOptionType> = {};
        if (body.name) where.name = { [Op.like]: body.name };
        if (body.type) where.type = body.type;

        const { rows, count } = await this.Table.findAndCountAll({
            where,
            offset: (page - 1) * pageSize,
            limit: pageSize,
            order: [
                ['sort', 'DESC'],
            ],
        });
        return { list: rows, total: count };
    }

    /**
     * 添加数据
     * @param body
     * @return
     */
    public async insert(body: TableOptionType) {
        return await this.Table.create(body);
    }

    // 修改数据
    async update(body: TableOptionType) {

        const _data = await this.Table.update(body, {
            where: {
                id: body.id!,
            },
        });

        return _data;

        // .findByIdAndUpdate(body.id, Object.assign(body, { updatedAt: Date.now() }));
        // if (!_data) {
        //     ctx.throw(422, '_id不正确！');
        // }
        // return {
        //     code: 200,
        //     msg: '修改成功',
        // };
    }


    public async delete(id: number) {
        const _data = await this.Table.destroy({
            where: {
                id,
            },
        });
        console.log('_data :>> ', _data);
        // // 删除文件
        // await this.app.controller.common.deleteDiskFile({ _id: _data._id });

        return _data;

        // const { ctx, service } = this;
        // const _data = await this.File.findById(id);
        // if (!_data) {
        //     ctx.throw('_id不正确！');
        // }
        // _data.remove();
        // // 删除文件
        // await ctx.model.File.deleteOne({ _id: _data._id });
        // service.toolService.deleteDiskFile(_data.link);
        // return {
        //     code: 200,
        //     message: '删除成功',
        // };
    }


}

export default FileService;
