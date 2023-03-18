import { Application } from 'egg';

export default (app: Application) => {
    const { controller, router } = app;
    const auth = app.middleware.auth();

    // router.redirect('/', '/news');
    router.get('/', controller.web.index);

    router.get('/news', controller.web.news);
    // router.get('/news/item/:id', controller.web.detail);
    // router.get('/news/user/:id', controller.web.user);

    // app.middleware.auth({ required: false }),

    router.post('/api/v1/user/login', controller.user.login); // 登录
    router.post('/api/v1/user/register', controller.user.register); // 注册
    router.post('/api/v1/user/edit_password', controller.user.updatePassword); // 修改密码


    // router.post('/api/v1/banner/list', controller.banner.list); // 查询banner
    // router.post('/api/v1/banner/insert', auth, controller.banner.insert); // 添加banner
    // router.post('/api/v1/banner/delete', auth, controller.banner.delete); // 删除banner
    // router.post('/api/v1/banner/update', auth, controller.banner.update); // 修改banner


    router.post('/api/upload', controller.common.upload); // 查询banner


    router.post('/api/v1/news/list', app.middleware.auth({ required: false }), controller.news.list); // 查询新闻
    router.post('/api/v1/news/insert', auth, controller.news.insert); // 添加新闻
    router.post('/api/v1/news/delete', auth, controller.news.delete); // 删除新闻
    router.post('/api/v1/news/update', auth, controller.news.update); // 修改新闻

    router.post('/api/v1/menu/list', app.middleware.auth({ required: false }), controller.menu.list); // 查询菜单
    router.post('/api/v1/menu/insert', auth, controller.menu.insert); // 添加菜单
    router.post('/api/v1/menu/delete', auth, controller.menu.delete); // 删除菜单
    router.post('/api/v1/menu/update', auth, controller.menu.update); // 修改菜单

    router.post('/api/v1/menu/classify', app.middleware.auth({ required: false }), controller.menu.classify); // 菜单分类


    router.post('/api/v1/goods/list', app.middleware.auth({ required: false }), controller.goods.list); // 查询产品
    router.post('/api/v1/goods/insert', auth, controller.goods.insert); // 添加产品
    router.post('/api/v1/goods/delete', auth, controller.goods.delete); // 删除产品
    router.post('/api/v1/goods/update', auth, controller.goods.update); // 修改产品

};
