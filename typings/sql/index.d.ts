declare interface TableBaseItem {
    readonly id?: number;     // 主键id

    create_time?: string;  // 创建时间
    create_by: string;    // 创建人
    update_time?: string;  // 修改时间
    update_by: string;    // 修改人
}


/**
 * banner 数据格式
 */

declare interface BannerTableItem {
    readonly id: number;     // 主键id
    title: string;   // 标题
    description: string;     // 描述
    type: 1 | 2;      // 1:视频，2:图片
    url: string;     // 链接
}


/**
 * user 数据格式
 */

declare interface UserTableItem extends TableBaseItem {

    username: string;   // 用户名
    account: string;     // 登录账号
    password: string;      // 密码
    status: 1 | 2;     // 状态:1正常，2禁用
    avatar: string;  // 头像

}


/**
 * news 数据格式
 */

declare interface NewsTableItem extends TableBaseItem {

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
 * goods 数据格式
 */
declare interface GoodsTableItem extends TableBaseItem {
    category1: string;   // 一级分类 
    category2: string;   // 二级分类 
    title: string;   //  
    title_en: string;   //  
    video_url: string;   // 视频地址 
    video_image_url: string;   // 视频封面图片 
    description: string;   // 描述 
    description_en: string;   //  
    content: string;   // 详细介绍 
    content_en: string;   //  
    seo_keyword: string;   // SEO关键字 
    seo_description: string;   //  
    home_recommend: 1 | 2;   //  是否首页推荐 1:是，2：否 
}


/**
 * goods_image表 数据格式
 */
declare interface GoodsImageTableItem {
    readonly id?: number;
    goods_id: string;   //  
    url: string;   // 图片地址 
    sort_num: string;   //   
}




/**
 * company 公司简介表 数据格式
 */
declare interface CompanyTableItem extends TableBaseItem {
    name: string;   // 公司名称 
    name_en: string;   //  
    tel: string;   // 电话 
    address: string;   // 地址 
    address_en: string;   //  
    weixin: string;   // 微信二维码 
    shopmall: string;   //  
    qq: string;   // QQ 
    email: string;   //  
    profile: string;   // 公司介绍 
    profile_en: string;   //  
    corporate_culture: string;   // 企业文化 
    corporate_culture_en: string;   //  
    corporate_culture_image: string;   // 企业文化背景图片地址 
    description: string;   //  
    description_en: string;   //  
    establish_date: string;   // 成立日期 
    service_province: string;   //  
    service_office: string;   // 办事处多年行业经验技术团队 
    seo_keyword: string;   // SEO关键字 
    seo_description: string;   //  
    logo: string;   // 公司logo图片地址 
    logo_mobile: string;   //  
    worth: string;   //  
    worth_en: string;   //  
    service_pre_sales_technical_team_tel: string;   // 售前技术团队电话 
    service_after_sales_technical_team_tel: string;   //  
    beian: string;   // 备案号 
    honor: string;   //  
}


/**
 * files表 数据格式
 */
declare interface FilesTableItem extends TableBaseItem {
    name: string;   // 公司名称 
    img: string;   //  地址路径
    type: number,     //    1:合作伙伴，2：文件下载
    content: string;     // 内容
}




/**
 * home_image表 数据格式
 */
declare interface HomeImageTableItem extends TableBaseItem {
    title: string;   // 标题 
    title_en: string;   //  
    description: string;   // 描述 
    description_en: string;   //  
    screen: string;   // 第几屏 
    type: string;   //  1：按钮链接，2：图片链接，3：首页产品中心推荐产品
    url: string;   // 地址 
    image_url: string;   // 图片地址 
}


/**
 * menu表 数据格式
 */
declare interface MenuTableItem extends TableBaseItem {
    parent_id: string;   //  
    title: string;   // 标题 
    title_en: string;   //  
    href: string;   // 链接 
    sort_num: string;   //  

}



/**
 * classify表 数据格式
 */
declare interface ClassifyTableItem extends TableBaseItem {
    parent_id: string;   // 上级id 
    name: string;   // 二级分类 
    type: number;    // 类型，1：视频系列
}




/**
 * video表 数据格式
 */
declare interface VideoTableItem extends TableBaseItem {
    id: string;   //  
    video_url: string;   // 视频地址 
    video_image_url: string;   // 视频封面图片 
    home_recommend: string;   //  
    belong_id: string;   // 所属分类id 
    order_num: string;   //  

}

