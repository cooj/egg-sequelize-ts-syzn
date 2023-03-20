/*
 Navicat Premium Data Transfer

 Source Server         : 本地连接
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : syzn-se

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 20/03/2023 18:53:44
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for classify
-- ----------------------------
DROP TABLE IF EXISTS `classify`;
CREATE TABLE `classify`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '分类名称',
  `parent_id` int(11) NULL DEFAULT 0 COMMENT '上级id',
  `type` int(11) NOT NULL COMMENT '分类类型，1：视频系列',
  `sort` int(11) NULL DEFAULT 0 COMMENT '排序',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci COMMENT = '分类表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of classify
-- ----------------------------

-- ----------------------------
-- Table structure for company
-- ----------------------------
DROP TABLE IF EXISTS `company`;
CREATE TABLE `company`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `name` varchar(80) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '公司名称',
  `name_en` varchar(120) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '英文公司名称',
  `tel` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '电话',
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '地址',
  `address_en` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '英文地址',
  `wx_code` varchar(1000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '微信二维码',
  `shop_code` varchar(1000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '商城二维码',
  `qq` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT 'QQ',
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '邮箱',
  `profile` varchar(1000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '公司介绍',
  `profile_en` varchar(1000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '公司介绍',
  `corporate_culture` varchar(1000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '企业文化',
  `corporate_culture_en` varchar(1000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '企业文化',
  `corporate_culture_image` varchar(1000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '企业文化背景图片地址',
  `description` varchar(1000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '描述',
  `description_en` varchar(1000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '英文描述',
  `establish_date` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '成立日期',
  `service_province` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '省市自治区的产品和服务覆盖',
  `service_office` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '办事处多年行业经验技术团队',
  `seo_keyword` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT 'SEO关键字',
  `seo_description` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT 'SEO描述',
  `logo` varchar(1000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '公司logo图片地址',
  `logo_mobile` varchar(1000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '公司logo图片地址- 手机端',
  `worth` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '以客户为中心，以奋斗者为本',
  `worth_en` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '以客户为中心，以奋斗者为本',
  `service_pre_sales_technical_team_tel` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '售前技术团队电话',
  `service_after_sales_technical_team_tel` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '售后技术团队电话',
  `record` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '备案号',
  `honor` varchar(1000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '荣誉图片',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci COMMENT = '菜单表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of company
-- ----------------------------
INSERT INTO `company` VALUES (1, '圣殷智能科技（深圳）有限公司', NULL, '010-56002354', '广东省深圳市光明区光明街道东周社区双明大道南侧云智科技园1栋A座18楼', NULL, 'http://127.0.0.1:7001/public/upload/20230320/0uTFTiLT-1679281270680.jpg', 'http://127.0.0.1:7001/public/upload/20230320/0uTFTiLT-1679280803537.jpg', '1008611', '1@1.com', '耐锐德坡口机械（深圳）有限公司专注于坡口机系列。精湛的一体化设计，柔美的线条转角，与科技完美结合，给您带来非同一般的品质。每一件优质的产品都源于耐锐德（Nareed）人严谨的工作态度，科学的工艺流程控制和严格的质量检测，为客户创造实实在在并且持久的价值。耐锐德坡口机械（深圳）有限公司始终把焊前使用的坡口设备和坡口刀具作为开发和研究的重点，同时在研发和生产及营销上不断的创新来满足客户的最新和最高的要求，经过不断的努力我们的平板系列坡口机，自动坡口速度已经最高3米/分钟，最高的光洁度达到3.2，加工出的坡口是符合各类焊接要求的标准，产品和技术已经处于世界领先，广泛应用于机械，电力，化工，核电，锅炉设备行业，食品设备行业，石化，矿山设备，等工矿领域，现场维修部门和机械制造单位。 我们随时为客户服务，永远在客户的身边，忠诚的实现对客户的承诺。领先的技术，卓越的产品，将竭诚为国内外客商和用户提供理想的品质，欢迎各界朋友光临参观，指导业务洽谈。我们引领平板与管道坡口加工技术!', NULL, '耐锐德坡口机械（深圳）有限公司专注于坡口机系列。精湛的一体化设计，柔美的线条转角，与科技完美结合，给您带来非同一般的品质。每一件优质的产品都源于耐锐德（Nareed）人严谨的工作态度，科学的工艺流程控制和严格的质量检测，为客户创造实实在在并且持久的价值。耐锐德坡口机械（深圳）有限公司始终把焊前使用的坡口设备和坡口刀具作为开发和研究的重点，同时在研发和生产及营销上不断的创新来满足客户的最新和最高的要求，经过不断的努力我们的平板系列坡口机，自动坡口速度已经最高3米/分钟，最高的光洁度达到3.2，加工出的坡口是符合各类焊接要求的标准，产品和技术已经处于世界领先，广泛应用于机械，电力，化工，核电，锅炉设备行业，食品设备行业，石化，矿山设备，等工矿领域，现场维修部门和机械制造单位。 我们随时为客户服务，永远在客户的身边，忠诚的实现对客户的承诺。领先的技术，卓越的产品，将竭诚为国内外客商和用户提供理想的品质，欢迎各界朋友光临参观，指导业务洽谈。我们引领平板与管道坡口加工技术!', NULL, 'http://127.0.0.1:7001/public/upload/20230320/1-1679281981217.jpg', NULL, NULL, '2023-03-20', '20', '30', '耐锐德坡口机械 深圳耐锐德坡口机械 坡口机 钢结构', '耐锐德坡口机械（深圳）有限公司位于中国最发达的经济中心城市--深圳市，专注于平板/圆管坡口机系列。精湛的一体化设计，柔美的线条转角，与科技完美结合，给您带来非同一般的品质。每一件优质的产品都源于耐锐德（Nareed）人严谨的工作态度，科学的工艺流程控制和严格的质量检测，为客户创造实实在在并且持久的价值。广泛应用于机械，电力，化工，核电，锅炉设备行业，食品设备行业，石化，矿山设备，等工矿领域。', 'http://127.0.0.1:7001/public/upload/20230320/logo-1679280534962.png', 'http://127.0.0.1:7001/public/upload/20230320/logo-m-1679281065451.png', '以客户为中心，以奋斗者为本 耐锐德坡口机械（深圳）有限公司', NULL, '18018737376', '19925153163', '粤ICP备19156329号', 'http://127.0.0.1:7001/public/upload/20230320/honor-1679281976589.jpg', '2023-03-20 10:27:08', '2023-03-20 11:15:54');

-- ----------------------------
-- Table structure for file
-- ----------------------------
DROP TABLE IF EXISTS `file`;
CREATE TABLE `file`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '名称',
  `url` varchar(1000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '地址路径',
  `type` int(11) NOT NULL COMMENT ' 1:文件下载，2：合作伙伴',
  `content` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL COMMENT '内容',
  `sort` int(11) NULL DEFAULT 0 COMMENT '排序',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci COMMENT = '文件表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of file
-- ----------------------------
INSERT INTO `file` VALUES (1, '江西五建', 'http://127.0.0.1:7001/public/upload/20230320/2gbaVzm7-1679298693992.jpg', 2, NULL, 0, '2023-03-20 15:51:47', '2023-03-20 15:51:47');
INSERT INTO `file` VALUES (2, 'NRD-Z1自动行走坡口机', 'http://127.0.0.1:7001/public/upload/20230320/0XU03oAm-1679303502935.jpg', 1, NULL, 0, '2023-03-20 17:11:45', '2023-03-20 17:11:45');
INSERT INTO `file` VALUES (3, '中国石油', 'http://127.0.0.1:7001/public/upload/20230320/eeGvkLMj-1679303951287.jpg', 2, NULL, 0, '2023-03-20 17:19:20', '2023-03-20 17:19:20');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `title` varchar(150) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '名称',
  `title_en` varchar(150) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '英文名称',
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '描述',
  `description_en` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '英文描述',
  `content` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL COMMENT '内容',
  `content_en` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL COMMENT '英文内容',
  `classify_id` int(11) NULL DEFAULT 0 COMMENT '上级id',
  `video_url` varchar(1000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '视频地址',
  `image_url` varchar(1000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '图片地址',
  `seo_keyword` varchar(150) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT 'SEO关键字',
  `seo_description` varchar(150) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT 'SEO描述',
  `home_recommend` int(11) NULL DEFAULT 2 COMMENT '是否首页推荐 1:是，2：否',
  `sort` int(11) NULL DEFAULT 0 COMMENT '排序',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci COMMENT = '商品表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES (1, 'ss', '', 'ss', '', '<p>sssss</p>', '', 0, NULL, 'http://127.0.0.1:7001/public/upload/20230318/0aeee7739e1f6f382a90-1679118880717.png', '', '', 2, 0, '2023-03-18 13:54:44', '2023-03-18 13:54:44');

-- ----------------------------
-- Table structure for goods_image
-- ----------------------------
DROP TABLE IF EXISTS `goods_image`;
CREATE TABLE `goods_image`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `goods_id` int(11) NOT NULL COMMENT '商品id',
  `url` varchar(1000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '图片地址',
  `sort` int(11) NULL DEFAULT 0 COMMENT '排序',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci COMMENT = '商品图片表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods_image
-- ----------------------------

-- ----------------------------
-- Table structure for menu
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `parent_id` int(11) NULL DEFAULT 0 COMMENT '上级id',
  `title` varchar(80) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '标题',
  `title_en` varchar(80) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '英文标题',
  `href` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '链接',
  `sort` int(11) NULL DEFAULT 0 COMMENT '排序',
  `updated_at` datetime NOT NULL,
  `created_at` datetime NOT NULL,
  `is_show` int(11) NULL DEFAULT 1 COMMENT '是否显示，1:是,2:否',
  `img` varchar(1000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '图片',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci COMMENT = '菜单表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of menu
-- ----------------------------
INSERT INTO `menu` VALUES (1, 0, '首页', '', '/', 100, '2023-03-20 13:49:19', '2023-03-17 18:26:55', 2, '');
INSERT INTO `menu` VALUES (2, 0, '产品中心', '', '/product', 1, '2023-03-17 18:39:53', '2023-03-17 18:39:53', 2, NULL);
INSERT INTO `menu` VALUES (3, 2, 'Z系列（自动行走坡口机）', '', '/product', 0, '2023-03-18 09:50:08', '2023-03-18 09:02:18', 2, NULL);
INSERT INTO `menu` VALUES (4, 0, '产品视频', '', '/video', 0, '2023-03-18 16:12:15', '2023-03-18 16:12:15', 2, NULL);
INSERT INTO `menu` VALUES (5, 0, '使用案例', '', '/case', 0, '2023-03-20 09:00:29', '2023-03-18 16:12:31', 2, 'http://127.0.0.1:7001/public/upload/20230320/show-case-1679274026624.jpg');
INSERT INTO `menu` VALUES (6, 0, '企业实力', '', '/company', 0, '2023-03-20 08:36:46', '2023-03-18 16:12:59', 2, NULL);
INSERT INTO `menu` VALUES (7, 0, '技术支持', '', '/news', 0, '2023-03-18 16:13:59', '2023-03-18 16:13:59', 2, NULL);
INSERT INTO `menu` VALUES (8, 0, '荣誉资质', '', '/honor', 0, '2023-03-18 16:14:38', '2023-03-18 16:14:38', 2, NULL);
INSERT INTO `menu` VALUES (9, 0, '联系我们', '', '/contact', 0, '2023-03-18 16:15:02', '2023-03-18 16:15:02', 2, NULL);
INSERT INTO `menu` VALUES (10, 7, '公司新闻', '', '/news', 0, '2023-03-18 16:16:16', '2023-03-18 16:16:16', 2, NULL);
INSERT INTO `menu` VALUES (11, 7, '资料下载', '', '/download', 0, '2023-03-18 16:16:39', '2023-03-18 16:16:33', 2, NULL);

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(80) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '标题',
  `title_en` varchar(80) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '英文标题',
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '描述',
  `description_en` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '英文描述',
  `content` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL COMMENT '内容',
  `content_en` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL COMMENT '英文内容',
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '图片地址',
  `type` int(11) NULL DEFAULT NULL COMMENT '模块 1:公司新闻 2:行业资讯，3:使用案例',
  `home_recommend` int(11) NULL DEFAULT 2 COMMENT '是否首页推荐 1:是，2：否',
  `updated_at` datetime NOT NULL,
  `created_at` datetime NOT NULL,
  `sort` int(11) NULL DEFAULT 0 COMMENT '排序',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci COMMENT = '用户表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES (1, '关于内账式管道坡口机刀片损坏原因分析', '', '关于内账式管道坡口机刀片损坏原因分析', '', '<div class=\"text-content\"><p>关于内胀式管道坡口机，使用过程中，我们偶尔会遇到断轴，断拉杆，坏刀片的情况。<br><br>那么如何避免管道坡口机这样的损坏呢？<br><br>其中刀具是尤为重要！ <br><br>通常，我们在加工不同材质的管道时候，最好选用相对应的刀具来加工，比如加工不锈钢或耐热钢管道坡口时候，尽量不要选用普通白钢的刀具进行加工。<br><br>尽量选用带有合金成份的刀具，比如含钴刀具，或带有硬质合金头的刀具使用。 <br><br>其次，刀具磨损也会对机器造成一定的损伤。一般我们使用过程中，如果切下来的为条形铁条状，则刀具还是非常锋利的，如果切下来的如果为小片小片或断裂严重，则说明刀具己经磨损，需要修磨后再便用。<br><br>通常内胀式80T以下的型号的小型机器，如果选刀不对，或者刀具磨损，会造成切削坡口时候阻力加大，造成撞刀，从而引起轴、杆或者齿轮的损坏。</p><video src=\"http://120.25.100.147:8087/uploads/nrd/20220608/bPGWDOTF.mp4\" controls=\"controls\" style=\"max-width:100%\"></video></div>', '', 'http://127.0.0.1:7001/public/upload/20230317/0aeee7739e1f6f382a90-1679039712254.png', 1, 1, '2023-03-17 15:59:08', '2023-03-17 15:59:08', 0);
INSERT INTO `news` VALUES (4, '坡口机长时间闲置应如何保养', '', '坡口机长时间闲置应如何保养\n坡口机长时间不用该如何保养？ 机器长时间不用启动前需要怎样去检查机器？\n公司新闻', '', '<p>坡口机长时间闲置应如何保养<br/>坡口机长时间不用该如何保养？ 机器长时间不用启动前需要怎样去检查机器？<br/>公司新闻</p>', '', 'http://127.0.0.1:7001/public/upload/20230318/1cd500260e7a7e5e69e0-1679100215403.jpg', 1, 1, '2023-03-18 08:43:43', '2023-03-17 17:28:22', 0);
INSERT INTO `news` VALUES (5, '甘肃客户30厚的板材要求同时打双面焊接前坡口', '', '甘肃客户30厚的板材要求同时打双面焊接前坡口\n2021-11-18', '', '<p>甘肃客户30厚的板材要求同时打双面焊接前坡口</p><p>2021-11-18甘肃客户30厚的板材要求同时打双面焊接前坡口</p><p>2021-11-18</p>', '', 'http://127.0.0.1:7001/public/upload/20230320/7f07a3e2b6-1679272951031.png', 3, 1, '2023-03-20 08:42:49', '2023-03-20 08:42:49', 0);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `username` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '用户名',
  `account` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '登录账号',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '密码',
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '头像',
  `status` int(11) NULL DEFAULT 1 COMMENT '状态:1正常，2禁用',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci COMMENT = '用户表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'admin', 'admin123', 'c4ca4238a0b923820dcc509a6f75849b', NULL, 1, '2023-03-17 09:06:20', '2023-03-17 15:37:02');
INSERT INTO `user` VALUES (2, '张三', 'zhang', 'c4ca4238a0b923820dcc509a6f75849b', '', 1, '2023-03-18 17:11:21', '2023-03-18 17:33:03');

-- ----------------------------
-- Table structure for video
-- ----------------------------
DROP TABLE IF EXISTS `video`;
CREATE TABLE `video`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `video_url` varchar(1000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '视频地址',
  `video_image_url` varchar(1000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '视频封面图片',
  `belong_id` int(11) NOT NULL COMMENT '所属分类id',
  `home_recommend` int(11) NULL DEFAULT 2 COMMENT '是否首页推荐 1:是,2:否',
  `sort` int(11) NULL DEFAULT 0 COMMENT '排序',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `title` varchar(80) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '标题',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci COMMENT = '菜单表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of video
-- ----------------------------
INSERT INTO `video` VALUES (1, 'https://www.ixigua.com/iframe/7038559399958282782?autoplay=0', 'http://127.0.0.1:7001/public/upload/20230320/3f5AL8f4-1679302200064.jpg', 3, 2, 0, '2023-03-20 16:50:10', '2023-03-20 17:06:45', 'NRD-Z2自动行走坡口机');

SET FOREIGN_KEY_CHECKS = 1;
