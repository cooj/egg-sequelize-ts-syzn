
import * as fs from 'fs';
import * as path from 'path';
import { Controller } from 'egg';
import moment from 'moment';
import mkdirp from 'mkdirp';


// // 传入文件夹的路径看是否存在，存在不用管，不存在则直接创建文件夹
// /**
//  * 判断文件夹是否存在，不存在可以直接创建
//  * @param reaPath String 文件路径
//  * @return Promise<boolean>
//  */
// const exitsFolder = async (reaPath: string) => {
//     const absPath = path.resolve(__dirname, reaPath);
//     try {

//         await fs.promises.stat(absPath);
//     } catch (e) {

//         // 不存在文件夹，直接创建 recursive: true 这个配置项是配置自动创建多个文件夹
//         await fs.promises.mkdir(absPath, { recursive: true });
//     }
// };


export default class CommonController extends Controller {
    async index() {
        const { ctx } = this;

        const parts = ctx.multipart();
        let part;
        while ((part = await parts()) != null) {
            if (part.length) {
                // 处理其他参数
                console.log('field: ' + part[0]);
                console.log('value: ' + part[1]);
                console.log('valueTruncated: ' + part[2]);
                console.log('fieldnameTruncated: ' + part[3]);
            } else {
                console.log('part :>> ', part);
                if (!part.filename) {
                    continue;
                }
                // otherwise, it's a stream
                console.log('field: ' + part.fieldname);
                console.log('filename: ' + part.filename);
                console.log('encoding: ' + part.encoding);
                console.log('mime: ' + part.mime);
                // 4 获取当前日期
                const day = moment(new Date()).format('YYYYMMDD');
                console.log('day :>> ', day);

                // 5 生成文件最后要保存的路径地址
                const dir = path.join(this.config.uploadDir, day);
                console.log('dir :>> ', dir);
                await mkdirp(dir); // 6 这个方法是，如果 上述dir 路径存在，那就不创建，如果不存在则会创建

                // if (!fs.existsSync(dir)) {
                //     fs.mkdirSync(dir);
                //     console.log(`Folder ${dir} created.`);
                // } else {
                //     console.log(`Folder ${dir} already exists.`);
                // }

                // await exitsFolder(dir);

                // const writePath = path.join('./', `uploadfile/${new Date().getTime() + part.filename}`);
                const filename = Date.now() + part.filename; // 定义文件名
                const writePath = path.join(dir, filename);
                console.log('writePath :>> ', writePath);
                const writeStream = fs.createWriteStream(writePath);
                const a = await part.pipe(writeStream);
                console.log('a :>> ', a);
            }
        }

        // ctx.body = { code: 200, message: '', data: result };
    }
}
