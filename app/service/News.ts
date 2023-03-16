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
export class HackerNews extends Service {
    /**
     * request hacker-news api
     * @param api - Api name
     * @param opts - urllib options
     */
    public async request(api: string, opts?: any) {
        // console.log('this :>> ', this.app);
        // const user = await this.app.mysql.get('user', { id: 1 });
        // console.log('user :>> ', user);
        const options = {
            dataType: 'json',
            timeout: '30s',
            ...opts,
        };

        const result = await this.ctx.curl(`${this.config.news.serverUrl}/${api}`, options);
        return result.data;
    }

    /**
     * get top story ids
     * @param page - page number, 1-ase
     * @param pageSize - page count
     */
    public async getTopStories(page?: number, pageSize?: number): Promise<number[]> {
        page = page || 1;
        const requestPageSize = pageSize ?? this.config.news.pageSize;

        try {
            const result = await this.request('topstories.json', {
                data: {
                    orderBy: '"$key"',
                    startAt: `"${requestPageSize * (page - 1)}"`,
                    endAt: `"${requestPageSize * page - 1}"`,
                },
            });
            return Object.keys(result).map(key => result[key]);
        } catch (e) {
            this.ctx.logger.error(e);
            return [];
        }
    }

    /**
     * query item
     * @param id - itemId
     */
    public async getItem(id: number): Promise<NewsItem> {
        return await this.request(`item/${id}.json`);
    }

    /**
     * get user info
     * @param id - userId
     */
    public async getUser(id: number) {
        return await this.request(`user/${id}.json`);
    }
}

export default HackerNews;


// export class NewService extends Service {

//     get News() {
//         return this.app.mysql;
//     }


//     // 列表
//     async list(query) {
//         const pageNum = Number.parseInt(query.pageNum || 1);
//         const pageSize = Number.parseInt(query.pageSize || 10);
//         const titleReg = new RegExp(query.title, 'ig');
//         const params = {};
//         if (query.title) {
//             params.title = titleReg;
//         }
//         if (query.type) params.type = query.type;
//         const ret = await this.News.find(params).skip((pageNum - 1) * pageSize).limit(pageSize)
//             .populate('img', 'url')
//             .sort({ sortNum: -1 });
//         const total = await this.News.countDocuments(params);
//         return {
//             code: 0,
//             list: ret,
//             total,
//         };
//     }

//     // 新增
//     async insert(body) {
//         const data = await new this.News(body);
//         data.save();
//         return {
//             code: 0,
//             data,
//         };
//     }

//     // 修改
//     async update(body) {
//         const findData = await this.News.findById(body.id);
//         if (!findData) {
//             return {
//                 code: 1,
//                 message: 'id不正确',
//             };
//         }
//         const data = await this.News.findByIdAndUpdate(body.id, body);
//         return {
//             code: 0,
//             data,
//         };

//     }

//     // 删除
//     async delete(query) {
//         const findData = await this.News.findById(query.id);
//         if (!findData) {
//             return {
//                 code: 1,
//                 message: 'id不正确',
//             };
//         }
//         const data = await this.News.findById(query.id).populate('img', '_id');
//         const delData = await this.ctx.model.File.findByIdAndDelete(data.img._id);
//         this.service.toolService.deleteDiskFile(delData.url);
//         data.remove();
//         return {
//             code: 0,
//             data,
//         };

//     }
// }

// export default NewService;

