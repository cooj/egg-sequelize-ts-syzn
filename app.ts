import { Application } from 'egg';
module.exports = (app: Application) => {

    if (app.config.env === 'local') {
        app.beforeStart(async () => {
            await app.model.sync({
                // force: true,
                alter: true, // 修改表结构或创建表
            });
        });
    }
};
