import { Controller } from 'egg';

export default class WebController extends Controller {
    // 公共数据
    public async commonData() {
        const { ctx } = this;
        // console.log('thisNewsController :>> ', this);
        const menu = await this.service.menu.getList({ pageSize: 10 });
        // 首页菜单
        const indexMenu = menu.list.find(item => item.href === '/');
        let url = ctx.request.url;
        // 判断url中有没有出现?
        if (url.indexOf('?') !== -1) url = url.substring(0, url.indexOf('?'));

        // 当前页菜单
        const currentMenu = menu.list.find(item => item.href === url);

        return {
            menu: menu.list,
            indexMenu,
            currentMenu,
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

    public async news() {
        const { ctx } = this;
        // 公共数据
        const _commonData = await this.commonData();

        await ctx.render('news.nj', {
            ..._commonData,
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
