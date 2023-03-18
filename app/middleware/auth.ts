import { Context } from 'egg';


export default (options = { required: true }) => {
    return async (ctx: Context, next) => {
        // 1. 获取请求头中的 token 数据
        const token = ctx.headers.authorization;
        // bearer空格token数据
        const new_token = token ? token.split('bearer ')[1] : null;

        if (new_token) {
            try {
                // 3. token 有效，根据 userId 获取用户数据挂载到 ctx 对象中给后续中间件使用
                const data = ctx.service.User.verifyToken(new_token);

                ctx.user = await ctx.model.User.findByPk(data);
            } catch (err) {
                ctx.throw(401);
            }
        } else if (options.required) {
            ctx.throw(401);
        }
        // 4. next 执行后续中间件
        await next();
    };
};

