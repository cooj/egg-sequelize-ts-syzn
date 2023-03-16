declare interface TableBaseType {
    readonly id: number;     // 主键id

    created_at?: string;  // 创建时间
    updated_at?: string;    // 修改时间
}

/**
 * user 数据格式
 */

 declare interface UserTableType extends TableBaseType  {

    username: string;   // 用户名
    account: string;     // 登录账号
    password: string;      // 密码
    status: 1 | 2;     // 状态:1正常，2禁用
    avatar: string;  // 头像

}

/**
 * news 数据格式
 */

 declare interface NewsTableType extends TableBaseType {

    type: string;   // 模块 1:公司新闻 2:行业资讯
    title: string;     // 标题
    title_en: string;      // 英文标题

    img: string;     // 图片地址
    description: string; // 描述
    description_en: string; // 描述
    content: string; // 内容
    content_en: string; // 内容
    home_recommend: 1 | 2; // 是否首页推荐 1:是，2：否

}


/**
 * menu表 数据格式
 */
 declare interface MenuTableType extends TableBaseType {
    parent_id: string;   //  
    title: string;   // 标题 
    title_en: string;   //  
    href: string;   // 链接 
    sort: number;   //  

}