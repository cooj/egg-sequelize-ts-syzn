import { Controller } from 'egg';
// import { URL } from 'url';

/**
 * @Controller 用户
 */
export default class UserController extends Controller {
    /**
     *  登录
     */
    async login() {
        const { ctx, service } = this;
        const body = ctx.request.body;
        const UserService = service.user;
        ctx.validate({
            account: { type: 'string' },
            password: { type: 'string' },
        }, body);
        const _user = await service.user.findByUsername({
            account: body.account,
        });

        if (!_user) {
            return ctx.throw(422, '账号不存在');
        }


        // 判断密码
        if (_user.password !== ctx.helper.md5(body.password)) {
            // // 密码忘记，重设密码
            // await UserService.updatePassword({ id: _user.id!, password: body.password });
            // ctx.throw(422, '重设密码成功');

            ctx.throw(422, '密码错误');
        }
        // 判断用户状态
        if (_user.status === 2) {
            ctx.throw(422, '用户已被禁用');
        }
        // const token = UserService.createToken({ id: _user.id });
        const token = UserService.createToken(_user.id);

        ctx.cookies.set('token', token, {
            maxAge: 1000 * 3600 * 5,
        });

        ctx.body = {
            code: 200,
            data: {
                user: ctx.helper._.pick(_user, 'id', 'account', 'username', 'status', 'avatar', 'createTime', 'updateTime'),
                token,
            },
            message: '登录成功',
        };
    }

    /**
     * @summary 注册用户
     * @router post /user/register
     * @request body register
     * @response 200 testResponse
     */
    async register() {
        const { ctx, service } = this;
        const UserService = service.user;
        const body = ctx.request.body;
        // 校验数据
        ctx.validate({
            account: { type: 'string' },
            password: { type: 'string' },
            confirmPassword: { type: 'string' },
        });
        if (body.confirmPassword !== body.password) {
            ctx.throw(422, '两次密码不一致！');
        }


        if (await UserService.findByUsername({ account: body.account })) {
            ctx.throw(422, '用户已存在');
        }
        const user = await UserService.register(body);

        ctx.body = {
            code: 200,
            message: '添加成功',
            user: ctx.helper._.pick(user, 'id', 'username'),
        };
    }

    /**
     * @summary 用户列表
     * @router get /user/list
     * @response 200 testResponse
     * @apikey
     */
    async list() {
        const { ctx } = this;
        const User = ctx.model.User;
        console.log('User :>> ', User);
        // const users = await User.find({
        //     _id: {
        //         $ne: ctx.user._id,
        //     },
        // }).select(['nickname', '_id', 'avatar', 'status']);
        // ctx.body = {
        //     code: 200,
        //     data: users,
        // };
    }

    /**
     * 修改密码
     */
    async updatePassword() {
        const { ctx, service } = this;
        const UserService = service.user;
        const body = ctx.request.body;
        // 校验数据
        ctx.validate({
            account: { type: 'string' },
            password1: { type: 'string' },
            password2: { type: 'string' },
        });
        const _user = await UserService.findByUsername({ account: body.account });

        if (!_user) {
            return ctx.throw(422, '用户不存在');
        }
        if (body.password1 !== body.password2) {
            ctx.throw(422, '两次密码不一致！');
        }
        await UserService.updatePassword({ id: _user.id!, password: body.password1.trim() });

        ctx.body = {
            code: 200,
            message: '修改成功',
        };
    }
}

