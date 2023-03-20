import { Controller } from 'egg';

export default class WebController extends Controller {
    // 公共数据
    public async commonData() {
        const { ctx } = this;
        const query = ctx.request.query;
        const id = Number.isNaN(Number(query.id)) ? 0 : Number(query.id);

        const systemInfo = await this.service.company.getInfo();

        // console.log('thisNewsController :>> ', this);
        const menu = await this.service.menu.getList({ pageSize: 10 });
        // 首页菜单
        const indexMenu = menu.list.find(item => item.href === '/');
        let url = ctx.request.url;
        // 判断url中有没有出现?
        if (url.indexOf('?') !== -1) url = url.substring(0, url.indexOf('?'));

        // 当前页菜单
        const currentMenu = menu.list.find(item => item.href === url);

        const nid = id || currentMenu!.id;
        const item = ctx.helper.getParentNode(menu.list, nid);

        // 当前页菜单的最上级菜单
        const mostMenu = item ? item[0] : {};

        // 当前菜单
        const nowMenu = ctx.helper.findNodeItem(menu.list, nid) || {};

        return {
            systemInfo,
            menu: menu.list,
            indexMenu,
            currentMenu,
            mostMenu,
            nowMenu,
        };
    }


    public async index() {
        const { ctx } = this;
        // 公共数据
        const _commonData = await this.commonData();
        console.log('_commonData :>> ', _commonData);
        await ctx.render('home.nj', {
            ..._commonData,
        });
    }

    // 新闻资讯
    public async news() {
        const { ctx } = this;
        const body = ctx.request.query;

        // 公共数据
        const _commonData = await this.commonData();


        const params = {
            page: body.page || 1,
            pageSize: body.pageSize || 10,
            type: 1,
        };

        const data = await this.service.news.getList(params);

        await ctx.render('news.nj', {
            ..._commonData,
            ...data,
            page: params.page,
            pageSize: params.pageSize,
        });
    }

    // 新闻详情
    public async newsDetail() {
        const { ctx } = this;
        const query = ctx.request.query;
        ctx.validate({
            id: 'string',
        }, query);
        const id = Number.isNaN(Number(query.id)) ? 0 : Number(query.id);
        const data = await this.service.news.info(id);

        // 公共数据
        const _commonData = await this.commonData();


        await ctx.render('news-detail.nj', {
            ..._commonData,
            data,
        });
    }

    // 产品中心
    public async product() {
        const { ctx } = this;
        // 公共数据
        const _commonData = await this.commonData();

        await ctx.render('product.nj', {
            ..._commonData,
        });
    }


    // 视频中心
    public async video() {
        const { ctx } = this;
        // 公共数据
        const _commonData = await this.commonData();

        await ctx.render('video.nj', {
            ..._commonData,
        });
    }

    // 使用案例
    public async case() {
        const { ctx } = this;
        // 公共数据
        const _commonData = await this.commonData();
        const body = ctx.request.query;

        const params = {
            page: body.page || 1,
            pageSize: body.pageSize || 10,
            type: 3,
        };

        const data = await this.service.news.getList(params);
        // console.log('data :>> ', data.list);
        await ctx.render('case.nj', {
            ..._commonData,
            ...data,
            page: params.page,
            pageSize: params.pageSize,
        });
    }


    // 案例详情
    public async caseDetail() {
        const { ctx } = this;
        // const body = ctx.request.body;
        // console.log('body 12313 :>> ', body);
        const query = ctx.request.query;
        ctx.validate({
            id: 'string',
        }, query);
        const id = Number.isNaN(Number(query.id)) ? 0 : Number(query.id);
        const data = await this.service.news.info(id);

        // 公共数据
        const _commonData = await this.commonData();

        await ctx.render('case-detail.nj', {
            ..._commonData,
            data,
        });
    }


    // 荣誉资质
    public async honor() {
        const { ctx } = this;
        // 公共数据
        const _commonData = await this.commonData();

        await ctx.render('honor.nj', {
            ..._commonData,
        });
    }

    // 联系我们
    public async contact() {
        const { ctx } = this;
        // 公共数据
        const _commonData = await this.commonData();

        await ctx.render('contact.nj', {
            ..._commonData,
        });
    }

    // 公司简介
    public async company() {
        const { ctx } = this;
        // 公共数据
        const _commonData = await this.commonData();

        await ctx.render('company.nj', {
            ..._commonData,
        });
    }

    // 合作客户
    public async cooper() {
        const { ctx } = this;
        // 公共数据
        const _commonData = await this.commonData();

        await ctx.render('cooper.nj', {
            ..._commonData,
        });
    }


    // 资料下载
    public async download() {
        const { ctx } = this;

        const body = ctx.request.query;

        // 公共数据
        const _commonData = await this.commonData();


        const params = {
            page: body.page || 1,
            pageSize: body.pageSize || 10,
            type: 1,
        };

        const data = await this.service.file.getList(params);

        await ctx.render('download.nj', {
            ..._commonData,
            ...data,
            page: params.page,
            pageSize: params.pageSize,
        });

    }

    // public async list() {
    //     const { ctx, app, service } = this;
    //     console.log('thisNewsController :>> ', this);
    //     const pageSize = app.config.news.pageSize;
    //     const page = parseInt(ctx.query.page, 10) || 1;

    //     const idList = await service.news.getTopStories(page);

    //     // get itemInfo parallel
    //     const newsList = await Promise.all(idList.map(id => service.news.getItem(id)));
    //     await ctx.render('news/list.nj', { list: newsList, page, pageSize });
    // }

    // public async detail() {
    //     const { ctx } = this;
    //     const id = ctx.params.id;
    //     const newsInfo = await ctx.service.news.getItem(id);
    //     // get comment parallel
    //     const commentList = await Promise.all(newsInfo.kids.map(_id => ctx.service.news.getItem(_id)));
    //     await ctx.render('news/detail.nj', { item: newsInfo, comments: commentList });
    // }

    // public async user() {
    //     const { ctx } = this;
    //     const id = ctx.params.id;
    //     const userInfo = await ctx.service.news.getUser(id);
    //     await ctx.render('news/user.nj', { user: userInfo });
    // }
}
