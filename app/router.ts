import { Application } from 'egg';

export default (app: Application) => {
    const { controller, router } = app;
    // const auth = app.middleware.auth();

    // router.redirect('/', '/news');
    router.get('/', controller.web.index);

    router.get('/news', controller.news.list);
    router.get('/news/item/:id', controller.news.detail);
    router.get('/news/user/:id', controller.news.user);

    // app.middleware.auth({ required: false }),

    router.post('/api/v1/user/login', controller.user.login); // 登录
    router.post('/api/v1/user/register', controller.user.register); // 注册
    router.post('/api/v1/user/edit_password', controller.user.updatePassword); // 修改密码


    router.post('/api/v1/banner/list', controller.banner.list); // 查询banner
    // router.post('/api/v1/banner/insert', auth, controller.banner.insert); // 添加banner
    // router.post('/api/v1/banner/delete', auth, controller.banner.delete); // 删除banner
    // router.post('/api/v1/banner/update', auth, controller.banner.update); // 修改banner


};
