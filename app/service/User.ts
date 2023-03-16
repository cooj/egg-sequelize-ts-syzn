import { Service } from 'egg';

export class UserService extends Service {
    // 获取user表
    get User() {
        return this.ctx.model.User;
    }

    // 查找用户名
    public async findByUsername(data: { account: string }) {

        return await this.User.findOne({ where: data });

    }

    // 生成token
    createToken(data: any) {
        const { app } = this;
        console.log('app.config.jwt :>> ', app.config.jwt);
        const token = app.jwt.sign(data, app.config.jwt.secret,
            // {
            //     expiresIn: app.config.jwt.sign.expiresIn,
            // },
        );
        return token;
    }

    // 解析token
    verifyToken(token: string) {
        const { app } = this;
        return app.jwt.verify(token, app.config.jwt.secret);
    }

    // 注册
    async register(data: UserTableType) {

        const _random = Math.ceil(Math.random() * 10) + 1;
        const obj = {
            account: data.account,
            password: this.ctx.helper.md5(data.password),
            username: data.username,
            // create_by: data.create_by,

            avatar: '/public/images/avatars/avatar' + _random + '.jpg',
            status: 1,
            // create_time: this.ctx.helper.formatTime(),
            // update_by: data.create_by,
        };

        return obj;
        // return await this.User.insert('user', obj);

    }

    // 修改密码
    async updatePassword(body: { id: number, password: string }) {
        console.log('body :>> ', body);
        const newPassword: string = this.ctx.helper.md5(body.password);

        return await this.User.update({ password: newPassword }, {
            where: {
                id: body.id,
            },
        });
        // {
        //     where: {
        //         custom_id: 456,
        //     },
        // }
    }
}


export default UserService;
