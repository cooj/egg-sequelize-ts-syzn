/*
 Navicat Premium Data Transfer

 Source Server         : 本地连接
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : syzn

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 15/03/2023 20:34:56
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for banner
-- ----------------------------
DROP TABLE IF EXISTS `banner`;
CREATE TABLE `banner`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '标题',
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '描述',
  `type` tinyint(4) NOT NULL COMMENT '1:视频，2:图片',
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '链接',
  `sort` int(11) NULL DEFAULT NULL COMMENT '排序',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '轮播图' ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of banner
-- ----------------------------
INSERT INTO `banner` VALUES (1, 'a', 'a', 2, '/uploads/20211025/sQnNWZ4v.jpg', 0);
INSERT INTO `banner` VALUES (2, '村舍户外 自由探索', '良好的售前、售中和售后服务，销售网络也日趋完善！打造一个专业的户外装备平台供您选择', 2, '/static/banb.jpg', 0);
INSERT INTO `banner` VALUES (3, '户外装备选型和指导', '提供各领域户外装备供您选择，红外热像仪、金属探测仪、潜水装备、照明装备、登山装备等', 2, '/uploads/20211008/rEafABWM.jpg', 0);
INSERT INTO `banner` VALUES (4, '合作伙伴', '依托专业技术、精细化管理和贴身服务，村舍的合作伙伴覆盖全国各地', 2, '/static/band.jpg', 0);
INSERT INTO `banner` VALUES (5, '新闻资讯', '新闻资讯', 2, '/static/bane.jpg', 0);

-- ----------------------------
-- Table structure for classify
-- ----------------------------
DROP TABLE IF EXISTS `classify`;
CREATE TABLE `classify`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `parent_id` bigint(20) NOT NULL COMMENT '上级ID',
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '二级分类',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '创建人',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `update_by` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '修改人',
  `type` int(10) NOT NULL COMMENT '类型，1:视频系列',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '分类表' ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of classify
-- ----------------------------
INSERT INTO `classify` VALUES (1, 0, '力学检测设备', '2021-09-19 19:15:01', '-', NULL, NULL, 0);
INSERT INTO `classify` VALUES (2, 1, '电子拉力试验机', '2021-09-19 19:15:07', '-', NULL, NULL, 0);
INSERT INTO `classify` VALUES (3, 1, '液压万能试验机', '2021-09-19 19:15:22', '-', NULL, NULL, 0);
INSERT INTO `classify` VALUES (4, 1, '冲击试验设备', '2021-09-19 19:15:27', '-', NULL, NULL, 0);
INSERT INTO `classify` VALUES (5, 1, '纸箱试验机', '2021-09-19 19:15:36', '-', NULL, NULL, 0);
INSERT INTO `classify` VALUES (6, 1, '扭力试验机', '2021-09-19 19:15:45', '-', NULL, NULL, 0);
INSERT INTO `classify` VALUES (7, 0, '硬度计系列', '2021-09-19 19:16:01', '-', NULL, NULL, 0);
INSERT INTO `classify` VALUES (8, 7, '韦氏硬度计', '2021-09-19 19:16:15', '-', NULL, NULL, 0);
INSERT INTO `classify` VALUES (9, 7, '巴氏硬度计', '2021-09-19 19:16:22', '-', NULL, NULL, 0);
INSERT INTO `classify` VALUES (10, 7, '里氏硬度计', '2021-09-19 19:16:28', '-', NULL, NULL, 0);
INSERT INTO `classify` VALUES (11, 7, '洛氏硬度计', '2021-09-19 19:16:34', '-', NULL, NULL, 0);
INSERT INTO `classify` VALUES (12, 7, '布氏硬度计', '2021-09-19 19:20:40', '-', NULL, NULL, 0);
INSERT INTO `classify` VALUES (13, 7, '显微维氏硬度计', '2021-09-19 19:20:49', '-', NULL, NULL, 0);

-- ----------------------------
-- Table structure for company
-- ----------------------------
DROP TABLE IF EXISTS `company`;
CREATE TABLE `company`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '公司名称',
  `name_en` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `tel` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '电话',
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '地址',
  `address_en` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `weixin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '微信二维码',
  `shopmall` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '商城二维码',
  `qq` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'QQ',
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `profile` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '公司介绍',
  `profile_en` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `corporate_culture` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '企业文化',
  `corporate_culture_en` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `corporate_culture_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '企业文化背景图片地址',
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '描述',
  `description_en` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `establish_date` datetime NULL DEFAULT NULL COMMENT '成立日期',
  `service_province` int(255) NULL DEFAULT NULL COMMENT '省市自治区的产品和服务覆盖',
  `service_office` int(255) NULL DEFAULT NULL COMMENT '办事处多年行业经验技术团队',
  `seo_keyword` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'SEO关键字',
  `seo_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'SEO描述',
  `logo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '公司logo图片地址',
  `logo_mobile` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '公司logo移动端',
  `updatetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `worth` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '公司价值观',
  `worth_en` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `service_pre_sales_technical_team_tel` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '售前技术团队电话',
  `service_after_sales_technical_team_tel` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '售后技术团队电话',
  `beian` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备案号',
  `honor` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '荣誉资质',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '公司简介' ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of company
-- ----------------------------
INSERT INTO `company` VALUES (1, '耐锐德坡口机械（深圳）有限公司', 'Neruide groove machinery (Shenzhen) Co., Ltd', '0755-21381289', '地址：中国~广东省深圳市光明区光明街道东周社区双明大道南侧云智科技园1栋A座18楼', '18 / F, block a, building 1, Yunzhi Technology Park, south of Shuangming Avenue, Dongzhou community, Guangming Street, Guangming District, Shenzhen', '/uploads/nrd/20211231/R3Pn4gek.jpg', '/uploads/nrd/20211231/0uTFTiLT.jpg', '3003430587', 'wenxing@goyojo.com', '耐锐德坡口机械（深圳）有限公司专注于坡口机系列。精湛的一体化设计，柔美的线条转角，与科技完美结合，给您带来非同一般的品质。每一件优质的产品都源于耐锐德（Nareed）人严谨的工作态度，科学的工艺流程控制和严格的质量检测，为客户创造实实在在并且持久的价值。耐锐德坡口机械（深圳）有限公司始终把焊前使用的坡口设备和坡口刀具作为开发和研究的重点，同时在研发和生产及营销上不断的创新来满足客户的最新和最高的要求，经过不断的努力我们的平板系列坡口机，自动坡口速度已经最高3米/分钟，最高的光洁度达到3.2，加工出的坡口是符合各类焊接要求的标准，产品和技术已经处于世界领先，广泛应用于机械，电力，化工，核电，锅炉设备行业，食品设备行业，石化，矿山设备，等工矿领域，现场维修部门和机械制造单位。  我们随时为客户服务，永远在客户的身边，忠诚的实现对客户的承诺。领先的技术，卓越的产品，将竭诚为国内外客商和用户提供理想的品质，欢迎各界朋友光临参观，指导业务洽谈。我们引领平板与管道坡口加工技术!', 'Neruid beveling machinery (Shenzhen) Co., Ltd. focuses on beveling machine series. Exquisite integrated design, soft lines and corners, and the perfect combination of science and technology bring you extraordinary quality. Every high-quality product comes from the rigorous working attitude, scientific process control and strict quality inspection of nareed people, so as to create real and lasting value for customers. Neruid groove machinery (Shenzhen) Co., Ltd. always takes the groove equipment and groove tools used before welding as the focus of development and research. At the same time, it continues to innovate in R & D, production and marketing to meet the latest and highest requirements of customers. Through continuous efforts, the automatic groove speed of our flat plate series groove machine has been up to 3m / min, The highest finish reaches 3.2, and the processed groove meets the standards of various welding requirements. The products and technology have been in the leading position in the world, and are widely used in industrial and mining fields such as machinery, electric power, chemical industry, nuclear power, textile equipment, papermaking equipment, petrochemical, mining equipment, on-site maintenance departments and machinery manufacturing units. We always serve our customers, always by their side, and faithfully realize our commitment to customers. With leading technology and excellent products, we will wholeheartedly provide customers and users at home and abroad with ideal quality. Friends from all walks of life are welcome to visit and guide business negotiations. We lead flat plate and pipe groove processing technology! Neruid beveling machinery (Shenzhen) Co., Ltd. focuses on beveling machine series. Exquisite integrated design, soft lines and corners, and the perfect combination of science and technology bring you extraordinary quality. Every high-quality product comes from the rigorous working attitude, scientific process control and strict quality inspection of nareed people, so as to create real and lasting value for customers. Neruid groove machinery (Shenzhen) Co., Ltd. always takes the groove equipment and groove tools used before welding as the focus of development and research. At the same time, it continues to innovate in R & D, production and marketing to meet the latest and highest requirements of customers. Through continuous efforts, the automatic groove speed of our flat plate series groove machine has been up to 3m / min, The highest finish reaches 3.2, and the processed groove meets the standards of various welding requirements. The products and technology have been in the leading position in the world, and are widely used in industrial and mining fields such as machinery, electric power, chemical industry, nuclear power, textile equipment, papermaking equipment, petrochemical, mining equipment, on-site maintenance departments and machinery manufacturing units. We always serve our customers, always by their side, and faithfully realize our commitment to customers. With leading technology and excellent products, we will wholeheartedly provide customers and users at home and abroad with ideal quality. Friends from all walks of life are welcome to visit and guide business negotiations. We lead flat plate and pipe groove processing technology!', '耐锐德坡口机械（深圳）有限公司专注于坡口机系列。精湛的一体化设计，柔美的线条转角，与科技完美结合，给您带来非同一般的品质。每一件优质的产品都源于耐锐德（Nareed）人严谨的工作态度，科学的工艺流程控制和严格的质量检测，为客户创造实实在在并且持久的价值。耐锐德坡口机械（深圳）有限公司始终把焊前使用的坡口设备和坡口刀具作为开发和研究的重点，同时在研发和生产及营销上不断的创新来满足客户的最新和最高的要求，经过不断的努力我们的平板系列坡口机，自动坡口速度已经最高3米/分钟，最高的光洁度达到3.2，加工出的坡口是符合各类焊接要求的标准，产品和技术已经处于世界领先，广泛应用于机械，电力，化工，核电，锅炉设备行业，食品设备行业，石化，矿山设备，等工矿领域，现场维修部门和机械制造单位。  我们随时为客户服务，永远在客户的身边，忠诚的实现对客户的承诺。领先的技术，卓越的产品，将竭诚为国内外客商和用户提供理想的品质，欢迎各界朋友光临参观，指导业务洽谈。我们引领平板与管道坡口加工技术!', '<b>Neruid beveling machinery < / b >, (Shenzhen) Co., Ltd. focuses on beveling machine series\n\n。 Exquisite integrated design, soft lines and corners, and the perfect combination of science and technology bring you extraordinary quality. Every high-quality product comes from the rigorous working attitude, scientific process control and strict quality inspection of nareed people, so as to create real and lasting value for customers. Neruid groove machinery (Shenzhen) Co., Ltd. always takes the groove equipment and groove tools used before welding as the focus of development and research. At the same time, it continues to innovate in R & D, production and marketing to meet the latest and highest requirements of customers. Through continuous efforts, the automatic groove speed of our flat plate series groove machine has been up to 3m / min, The highest finish reaches 3.2, and the processed groove meets the standards of various welding requirements. The products and technology have been in the leading position in the world, and are widely used in industrial and mining fields such as machinery, electric power, chemical industry, nuclear power, textile equipment, papermaking equipment, petrochemical, mining equipment, on-site maintenance departments and machinery manufacturing units.', '/static/1.jpg', '', NULL, '2019-06-04 08:00:00', 30, 20, '耐锐德坡口机械 深圳耐锐德坡口机械 坡口机 钢结构', '耐锐德坡口机械（深圳）有限公司位于中国最发达的经济中心城市--深圳市，专注于平板/圆管坡口机系列。精湛的一体化设计，柔美的线条转角，与科技完美结合，给您带来非同一般的品质。每一件优质的产品都源于耐锐德（Nareed）人严谨的工作态度，科学的工艺流程控制和严格的质量检测，为客户创造实实在在并且持久的价值。广泛应用于机械，电力，化工，核电，锅炉设备行业，食品设备行业，石化，矿山设备，等工矿领域。', '/static/image/logo.png', '/static/image/logo-m.png', '2023-02-13 09:51:40', '以客户为中心，以奋斗者为本', 'Customer centered, striver oriented', '18018737376', '19925153163', '粤ICP备19156329号', '/static/image/honor.jpg');

-- ----------------------------
-- Table structure for files
-- ----------------------------
DROP TABLE IF EXISTS `files`;
CREATE TABLE `files`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '公司名称',
  `img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'logo图片地址',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '创建人',
  `update_time` timestamp NULL DEFAULT NULL COMMENT '修改时间',
  `update_by` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '修改人',
  `type` int(10) NULL DEFAULT NULL COMMENT '1:合作伙伴，2：文件下载',
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '内容',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '合作伙伴，文件下载' ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of files
-- ----------------------------
INSERT INTO `files` VALUES (4, '1', '/uploads/nrd/20211116/HEHMdAUj.jpg', '2021-09-17 10:34:57', '-', '2021-11-16 22:01:51', '张三', NULL, NULL);
INSERT INTO `files` VALUES (5, '2', '/uploads/nrd/20211118/y1bbFH8M.jpg', '2021-09-17 10:35:03', '-', '2021-11-18 16:49:00', '张三', NULL, NULL);
INSERT INTO `files` VALUES (6, '3', '/uploads/nrd/20211117/oqxuHbcV.jpg', '2021-09-17 10:35:07', '-', '2021-11-17 21:02:17', '张三', NULL, NULL);
INSERT INTO `files` VALUES (7, '4', '/uploads/nrd/20211117/2gbaVzm7.jpg', '2021-09-17 10:35:13', '-', '2021-11-17 21:00:12', '张三', NULL, NULL);
INSERT INTO `files` VALUES (8, '5', '/uploads/nrd/20211117/wkIoTmtP.jpg', '2021-09-17 10:35:18', '-', '2021-11-17 17:21:31', '张三', NULL, NULL);
INSERT INTO `files` VALUES (9, '9', '/uploads/nrd/20211117/Mcx8NIAs.jpg', '2021-09-17 10:35:22', '-', '2021-11-17 17:42:40', '张三', NULL, NULL);
INSERT INTO `files` VALUES (10, '7', '/uploads/nrd/20211116/GyHhBlQH.jpg', '2021-09-17 10:35:42', '-', '2021-11-16 22:01:42', '张三', NULL, NULL);
INSERT INTO `files` VALUES (11, '11', '/uploads/nrd/20211119/AYuwgFam.jpg', '2021-09-17 10:35:46', '-', '2021-11-19 20:17:54', '张三', NULL, NULL);
INSERT INTO `files` VALUES (12, '12', '/uploads/nrd/20211116/eeGvkLMj.jpg', '2021-09-17 10:35:50', '-', '2021-11-16 21:11:30', '张三', NULL, NULL);
INSERT INTO `files` VALUES (13, '13', '/uploads/nrd/20211117/Gjr2CKm8.jpg', '2021-09-20 09:32:27', '张三', '2021-11-17 17:32:14', '张三', NULL, NULL);
INSERT INTO `files` VALUES (16, '11', '/uploads/nrd/20211117/L6VgQA8P.jpg', '2021-09-22 16:46:50', '张三', '2021-11-17 21:02:29', '张三', NULL, NULL);
INSERT INTO `files` VALUES (17, '12', '/uploads/nrd/20211116/dr8M7y7n.jpg', '2021-11-16 21:21:04', '张三', NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `category1` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '一级分类',
  `category2` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '二级分类',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '标题',
  `title_en` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `video_url` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '视频地址',
  `video_image_url` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '视频封面图片',
  `description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '描述',
  `description_en` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '详细介绍',
  `content_en` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `seo_keyword` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'SEO关键字',
  `seo_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'SEO描述',
  `home_recommend` tinyint(1) NULL DEFAULT 0 COMMENT '首页推荐',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '创建人',
  `update_time` timestamp NULL DEFAULT NULL COMMENT '修改时间',
  `update_by` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '修改人',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 31 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '商品表' ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES (16, '66', NULL, 'NRD-Z1自动行走坡口机', 'NRD-Z1 automatic traveling beveling machine', '', '', '自动行走坡口机不锈钢倒角机碳钢电动板材平板铣边机器削边机刀具的转速与铣削量最适合不锈钢材质坡口。坡口光洁度高，适合各种焊接工艺要求。碳钢坡口效率更高。', 'Automatic traveling beveling machine stainless steel chamfering machine carbon steel electric plate edge milling machine', '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/AqQgsOV7.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/luAraygv.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '该机利用滚铣原理对钢板边缘按所需角度进行铣切得到焊接所需的坡口', 'NRD系列自动行进钢板坡口机，采用铣削加工原理，对钢板边缘进行所需的铣切加工。主要适用于焊接前开坡口或者对坡口面工艺光洁度要求较高的加工使用。\n该机型加工时采用自动行进的方式，加工大板时，机器沿着大板的边缘前进，加工小板时，机器将板带入，自动完成坡口加工。\n角度调节方便，坡口面一次性成型，角度精准，表面光滑，尤其对不锈钢材料的加工具有相当突出的优点。', NULL, '2021-11-12 10:43:01', '张三', '2022-06-08 14:59:29', '张三');
INSERT INTO `goods` VALUES (17, '66', NULL, 'NRD-Z2自动行走坡口机', 'NRD-Z2 automatic traveling beveling machine', 'https://www.ixigua.com/iframe/7038559399958282782?autoplay=0', NULL, '自动行走坡口机不锈钢倒角机碳钢电动板材平板铣边机器', 'Automatic traveling beveling machine stainless steel chamfering machine carbon steel electric plate edge milling machine', '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/8km98uQH.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/Y0IGOnYS.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '坡口机 平板坡口机 钢结构', '焊接前处理', NULL, '2021-11-12 14:21:26', '张三', NULL, NULL);
INSERT INTO `goods` VALUES (18, '66', NULL, 'NRD-Z3自动行走坡口机', 'NRD-Z3  automatic traveling beveling machine', 'https://www.ixigua.com/iframe/7038561353799303688?autoplay=0', NULL, '自动行走坡口机不锈钢倒角机碳钢电动板材平板铣边机器', 'Automatic traveling beveling machine stainless steel chamfering machine carbon steel electric plate edge milling machine', '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/uzmm3r4a.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/4ppkixGE.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '平板坡口机 坡口机 铣边机 钢板坡口机 钢结构', '焊接前处理', NULL, '2021-11-12 14:24:29', '张三', NULL, NULL);
INSERT INTO `goods` VALUES (19, '66', NULL, 'NRD-Z4自动行走坡口机', 'NRD-Z4 Automatic traveling beveling machine', 'https://www.ixigua.com/iframe/7034486662910444039?autoplay=0,https://www.ixigua.com/iframe/7030684275624280590?autoplay=0', NULL, '可以同时坡上下两个坡口斜面', 'Two groove slopes can be up and down at the same time', '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/r1mggm8I.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/R6B6J4dF.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '平板坡口机 坡口机 铣边机 钢板坡口机 钢结构', '焊接前处理', NULL, '2021-11-12 14:27:10', '张三', NULL, NULL);
INSERT INTO `goods` VALUES (20, '67', NULL, 'NRD-X1小板材坡口机', 'NRD-X1 Small plate beveling machine', 'https://www.ixigua.com/iframe/7035971809363100174?autoplay=0', NULL, '适合小板材加工坡口', 'Suitable for processing groove of small plate', '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/3AdoZCcv.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/mEEHO4Pe.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '坡口机 小板材坡口机 平板坡口机 铣边机 钢板坡口机 钢结构', '焊接前处理', NULL, '2021-11-12 14:30:36', '张三', NULL, NULL);
INSERT INTO `goods` VALUES (21, '67', NULL, 'NRD-X2 小板材坡口机', 'NRD-X2 small plate beveling machine', 'https://www.ixigua.com/7036690668399362061', NULL, '适合小板材加工坡口', 'Suitable for processing groove of small plate', '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/jgBnEqqe.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/Esa232gG.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '小板材坡口机 坡口机 平板坡口机 铣边机 钢板坡口机 钢结构', '焊接前处理', NULL, '2021-11-12 14:35:08', '张三', NULL, NULL);
INSERT INTO `goods` VALUES (22, '67', NULL, 'NRD-X3小板材坡口机', 'NRD-X3 small plate beveling machine', 'https://www.ixigua.com/iframe/7036689990637584927?autoplay=0', NULL, '适合小板材加工坡口', 'Suitable for processing groove of small plate', '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/jGgTAElv.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/S34qrqxR.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '坡口机 平板坡口机 小板材坡口机 铣边机 钢板坡口机 钢结构', '焊接前处理', NULL, '2021-11-12 14:41:24', '张三', NULL, NULL);
INSERT INTO `goods` VALUES (23, '68', NULL, 'NRD-B2平板坡口机', 'Nrd-b2 plate beveling machine', 'https://www.ixigua.com/iframe/7033326798532411934?autoplay=0', NULL, '平板坡口机专为平板坡口、倒角而设计。是一台方便、灵巧的机器。可以用于各种焊接前等方面金属板材的去毛刺和倒角加工。其重量轻（和同类产品相比较而言），震动小，操作平稳，本机使用简单、安全，适用于钢材、铸铁、硬质塑料、有色金属等材料。\n产品特点：倒角表面光滑、平整的、无氧化层的，便于焊接；满足K、V、X、Y型的焊接接头的需要；适用于钢材、铸铁、硬质塑料，并可对铬钢和其他高强度材料进行加工；\n   技术参数：\n\n   电机：380V ,50Hz，三相交流电\n \n  功率：1.1KW\n   \n旋转速度:2870转/分钟\n   \n最大刀刃切削宽度:15MM(可调)\n   \n坡口宽度：3-15mm（可调）\n   \n坡口角度：30-60度（可调）\n   \n加工速度：1-3m/min\n  \n 尺寸:440*200*280 MM\n \n  重量:18KG\n   \n附带工具:Ф60MM一体式铣刀盘1个,6片高速碳钢嵌入式铣刀片.', 'The flat beveling machine is specially designed for flat beveling and chamfering. It is a convenient and dexterous machine. It can be used for deburring and chamfering of various metal plates before welding. It has light weight (compared with similar products), small vibration and stable operation. The machine is simple and safe to use. It is suitable for steel, cast iron, hard plastics, non-ferrous metals and other materials.\nProduct features:\nThe chamfer surface is smooth, flat and free of oxide layer, which is convenient for welding;\nMeet the needs of K, V, X and Y welded joints;\nIt is suitable for steel, cast iron and hard plastics, and can process chromium steel and other high-strength materials;', '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/UdtU2GsP.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/1uIpClPH.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/6QAW9ppn.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/GvF8sOpr.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/aj1wbjrv.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/x7A2d4W0.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/Bck6135O.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/ZO1rDO5u.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/SJ5q0iPH.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/hIttCr6l.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/tZtwhkeC.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/42CTyvWn.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/6dMdVkpI.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/kZoJXNFP.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><video src=\"http://120.25.100.147:8087/uploads/nrd/20220608/ITgS72b3.mp4\" controls=\"controls\" style=\"max-width:100%\"></video></p>', '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/UdtU2GsP.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/1uIpClPH.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/6QAW9ppn.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/GvF8sOpr.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/aj1wbjrv.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/x7A2d4W0.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/Bck6135O.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/ZO1rDO5u.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/SJ5q0iPH.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/hIttCr6l.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/tZtwhkeC.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/42CTyvWn.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/6dMdVkpI.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/CEzCayLp.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '平板坡口机 坡口机 铣边机 倒角机 钢板坡口机 钢结构', '焊接前处理', NULL, '2021-11-12 16:26:18', '张三', '2022-06-08 15:34:24', '张三');
INSERT INTO `goods` VALUES (24, '69', NULL, 'NRD-B-Q3曲线坡口机', 'NRD-B-Q3 Curve beveling machine', 'https://www.ixigua.com/iframe/7064729149532799524?autoplay=0\" referrerpolicy=\"unsafe-url\" allowfullscreen></iframe>', NULL, 'Q series curve chamfering machine is a manually operated electric tool, which is suitable for processing the groove before welding (can be processed into k, V, X and Y groove). It can not only process the groove of the inner hole of the pipe, but also process the groove of the plate and remove the burrs of metal materials. Its versatility and flexibility, It can greatly improve work efficiency and make it an attractive equipment. The machine has a very compact structure and can operate in places with complex environment and difficult to process.', 'Q series curve chamfering machine is a manually operated electric tool, which is suitable for processing the groove before welding (can be processed into k, V, X and Y groove). It can not only process the groove of the inner hole of the pipe, but also process the groove of the plate and remove the burrs of metal materials. Its versatility and flexibility, It can greatly improve work efficiency and make it an attractive equipment. The machine has a very compact structure and can operate in places with complex environment and difficult to process.', '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/FZgW7tIj.png\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/FZgW7tIj.png\" style=\"max-width:100%;\" contenteditable=\"false\"/>1</p>', '坡口机 曲线坡口机 平板坡口机 弧形坡口机 铣边机 钢结构', '焊接前处理', NULL, '2021-11-12 19:50:15', '张三', NULL, NULL);
INSERT INTO `goods` VALUES (25, '70', NULL, '内涨式圆管坡口机', 'Internal expansion round pipe beveling machine', 'https://www.ixigua.com/iframe/7024099875306340895?autoplay=0,https://www.ixigua.com/iframe/7031875436422693412?autoplay=0,https://www.ixigua.com/iframe/7031145865934799368?autoplay=0', NULL, '圆管坡口机由电动或气动马达驱动，经行星减速器多级减速后输出大扭矩，带动刀盘旋转；各种角度或材料的刀具由螺栓固定在刀盘上；通过自动定心夹紧机构固定管子，轴向进给完成管子坡口加工。', 'The round pipe beveling machine is driven by electric or pneumatic motor. After multistage deceleration by planetary reducer, it outputs large torque to drive the cutter head to rotate; Cutters of various angles or materials are fixed on the cutter head by bolts; The pipe is fixed by the automatic centering clamping mechanism, and the pipe groove processing is completed by axial feeding.', '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/S4Qrh8jW.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/I1EOKdYn.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '内涨式圆管坡口机 管子坡口机 管子铣边机 管子倒角机 钢结构', '焊接前处理', NULL, '2021-11-12 19:58:40', '张三', NULL, NULL);
INSERT INTO `goods` VALUES (26, '71', NULL, '外卡式圆管坡口机', 'External card type round pipe beveling machine', 'https://www.ixigua.com/iframe/7032103637501346318?autoplay=0,https://www.ixigua.com/iframe/7029196197663343141?autoplay=0,https://www.ixigua.com/iframe/7030688319616844302?autoplay=0', NULL, 'W系列外卡式圆管坡口机，机体采用高密度高强度合金制作，该系统驱动可选择电动、液压、伺服，它集切割、坡面功能于一身，主要用于现场管道加工，每套切管机配备强劲稳定的动力，在切割的过程中，将切割机固定在要切割的管道上，切割刀具自动绕管子旋转数周便将管子切断，切削量大、效率高，切口无毛刺、不变形，同时完成切割与坡口；通过定制不同的坡口刀，可完成不同角度的坡口切割；广泛应用于石油、石化、啤酒、饮料乳品、制药、冶金、水处理、造船、电力等行业中管道切割后直接焊接；同时根据客户需要可定制非标规格，切割非标坡口。', 'W series external card type round pipe beveling machine is made of high-density and high-strength alloy. The system can be driven by electric, hydraulic and servo. It integrates the functions of cutting and slope. It is mainly used for on-site pipeline processing. Each set of pipe cutting machine is equipped with strong and stable power to fix the cutting machine on the pipeline to be cut in the process of cutting, The cutting tool automatically rotates around the pipe for several weeks to cut off the pipe. The cutting amount is large, the efficiency is high, the notch is free of burr and deformation, and the cutting and groove are completed at the same time', '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/3gcwvAiA.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20211112/EUodBAi0.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '管子坡口机 圆管坡口机 外卡式圆管坡口机 管子铣边机 管子倒角机', '焊接前处理', NULL, '2021-11-12 20:43:59', '张三', NULL, NULL);
INSERT INTO `goods` VALUES (27, '72', NULL, 'NRD-S1020无上限圆管坡口机', 'NRD-S1020 Round pipe beveling machine without upper limit', 'https://www.ixigua.com/iframe/7033727272913732126?autoplay=0', NULL, ' 坡口机加工管道最小直径为114mm，最大无上限，坡口斜边宽度最大15mm，坡口机的刀头可以更换，能够精准的完成30°坡口加工，是半导体、电子设备、啤酒、制药、生物科技、饮料、乳品、压力容器、石油、天然气、化工、航空及航天工业、船舶、电建、锅炉、水处理等行业中管子切割后直接焊接的最佳选择。', 'The minimum diameter of groove machining pipeline is 114mm, the maximum has no upper limit, and the maximum width of groove bevel is 15mm. The cutter head of groove machine can be replaced and can accurately complete 30 ° groove machining. It is used in semiconductor, electronic equipment, beer, pharmacy, biotechnology, beverage, dairy, pressure vessel, petroleum, natural gas, chemical industry, aviation and aerospace industry, shipbuilding, power construction, boiler It is the best choice for direct welding after pipe cutting in water treatment and other industries.', '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/Y6fDE3Xx.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/Zw9Vvy0J.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/mDcUKMLl.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/mMQrf24b.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/8ovOICK3.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/wjBfYJ4M.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/iKNrv6KP.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/IedlkROo.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/ge6Ikb0c.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/kP2DXuBl.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/XMuEFrKX.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/0xp9uL5V.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/LRrTGjVQ.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/sEjRUCoA.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/6dG2rkMA.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/jRwQN5zo.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/JJoSwXdA.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/tHxeQg3B.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/KE5ZrPnm.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/jPJqr9Lq.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/jvTuK7bJ.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/GM8MVVxg.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/YAYxArz9.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/Ex1wwRb3.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '<p><br/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/Y6fDE3Xx.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/Zw9Vvy0J.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/mDcUKMLl.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/mMQrf24b.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/8ovOICK3.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/wjBfYJ4M.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/iKNrv6KP.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/IedlkROo.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/ge6Ikb0c.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/kP2DXuBl.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/XMuEFrKX.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/0xp9uL5V.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/LRrTGjVQ.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/sEjRUCoA.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/6dG2rkMA.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/jRwQN5zo.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/JJoSwXdA.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/tHxeQg3B.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/KE5ZrPnm.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/jPJqr9Lq.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/jvTuK7bJ.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/GM8MVVxg.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/YAYxArz9.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/Ex1wwRb3.jpg\"/><br/></p>', '圆管坡口机 外卡式坡口机 圆管铣边机 管子坡口机', '焊接前处理', NULL, '2021-11-15 09:48:17', '张三', NULL, NULL);
INSERT INTO `goods` VALUES (28, '72', NULL, 'NRD-W1560S无上限自动坡口机', 'NRD-W1560S Automatic beveling machine without upper limit', NULL, NULL, '无上限自动坡口机可加工管道最小直径为600mm，最大无上限，坡口斜边宽度最大40mm，同时还可以加工最大壁厚50mm的板材，坡口机的刀头可以调整，能够精准的完成0°-   40°坡口加工，是半导体、电子设备、啤酒、制药、生物科技、饮料、乳品、压力容器、石油、天然气、化工、航空及航天工业、船舶、电建、锅炉、水处理等行业中管子切割后直接焊接的最佳选择。', 'The automatic beveling machine without upper limit can process pipes with a minimum diameter of 600mm and a maximum upper limit. The beveled edge width of the groove is 40mm. At the same time, it can also process plates with a maximum wall thickness of 50mm. The cutter head of the beveling machine can be adjusted to accurately complete 0 ° - 40 ° groove processing. It is a semiconductor, electronic equipment, beer, pharmacy, biotechnology, beverage, dairy, pressure vessel, petroleum It is the best choice for direct welding after pipe cutting in natural gas, chemical industry, aviation and aerospace industry, shipbuilding, power construction, boiler, water treatment and other industries.', '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/Iq3qp7cH.JPG\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/BqK3ojB7.JPG\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/zq2agxrb.JPG\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/LkuN5ciu.JPG\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '<p><br/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/Iq3qp7cH.JPG\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/BqK3ojB7.JPG\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/zq2agxrb.JPG\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/LkuN5ciu.JPG\"/><br/></p>', '自动管坡口机 管子坡口机 无上限坡口机 铣边机 耐锐德圆管坡口机', '焊接前处理', NULL, '2021-11-15 10:36:12', '张三', '2021-11-15 10:48:22', '张三');
INSERT INTO `goods` VALUES (29, '73', NULL, 'NRD-X4（R4)行星式圆管坡口机', 'NRD-X4（R4) Planetary pipe beveling machine', NULL, NULL, '切割后端面绝对垂直,端面无毛刺，管子不变形为确保管道自熔焊接质量提供根本保证。同时可完成坡口要求。机械冷加工，不会破坏管材质。是半导体、电子设备、啤酒、制药、生物科技、饮料、乳品、压力容器、石油、天然气、化工、航空及航天工业、船舶、电建、锅炉、水处理等行业中管子切割后直接焊接的最佳选择。', 'After cutting, the end face is absolutely vertical, the end face is free of burrs and the pipe is not deformed, which provides a fundamental guarantee for ensuring the quality of pipe self fusion welding. At the same time, the groove requirements can be completed. Mechanical cold working will not damage the pipe material. It is the best choice for direct welding after pipe cutting in semiconductor, electronic equipment, beer, pharmacy, biotechnology, beverage, dairy, pressure vessel, petroleum, natural gas, chemical industry, aviation and aerospace industry, shipbuilding, power construction, boiler, water treatment and other industries.', '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/mzvu9Qqo.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/7rkXtMMZ.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/u7fH1AJv.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/G2T55RTc.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/ticEjIKH.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/QnqU1Yt1.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/uB7sFZs9.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/fIradp1L.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/44vsBpGs.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/HtAR18l3.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/tUGkRibv.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/4GyaIHhR.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/XKjCLxzQ.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/jgS24o4h.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/Yt2muDnI.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/nSYNw55E.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/VajlgB4X.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/WRZUhNAH.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/A6JuZ2js.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '<p><br/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/mzvu9Qqo.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/7rkXtMMZ.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/u7fH1AJv.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/G2T55RTc.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/ticEjIKH.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/QnqU1Yt1.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/uB7sFZs9.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/fIradp1L.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/44vsBpGs.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/HtAR18l3.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/tUGkRibv.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/4GyaIHhR.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/XKjCLxzQ.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/jgS24o4h.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/Yt2muDnI.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/nSYNw55E.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/VajlgB4X.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/WRZUhNAH.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/A6JuZ2js.jpg\"/><br/></p>', '圆管坡口机 行星式坡口机 行星式圆管坡口机 铣边机 管子坡口机', '焊接前处理', NULL, '2021-11-15 10:46:28', '张三', NULL, NULL);
INSERT INTO `goods` VALUES (30, '74', NULL, 'C型外卡式圆管坡口机', 'C-type external card type round pipe beveling machine', 'https://www.ixigua.com/iframe/7064825560412717598?autoplay=0\" referrerpolicy=\"unsafe-url\" allowfullscreen></iframe>', NULL, '采用外夹式夹紧装置，一模一卡，定位精准，拆装方便，配置德国原装进口麦太保电机或者美国米沃奇电机，品质优越。自动进退刀设计，大大减轻劳动强度，提高机器寿命。本产品适用于水冷壁过热器、再热器、省煤器、锅炉、火电厂等专业型设备的管道坡口加工以及现场检修，满足管道维修现场工作空间狭小，检修批量大等加工要求。 ', 'The first mock exam is made of external clamping device, one mold and one card, precise positioning, easy disassembly and assembly, and equipped with imported imported Mickey motor. The design of automatic advance and retreat cutter greatly reduces the labor intensity and improves the service life of the machine. This product is suitable for pipe groove processing and on-site maintenance of water wall superheater, reheater, economizer, boiler, thermal power plant and other professional equipment, and meets the processing requirements of narrow working space and large maintenance batch on the pipeline maintenance site.', '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/hsKacs5e.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/cNmxiUX2.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/jG60zDOP.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/yS4e2Hq1.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/URSHgyhp.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/v0ksqgtn.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/J5Hw29Bb.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/nTYEAOa9.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/8D5B6ZQG.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/0XU03oAm.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/j3q94SF0.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/N4NSktDv.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/KrcwxYyT.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/vfUPbtPv.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/7JfLujjD.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/ePIcVdIA.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/QzigWhHF.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/HcguTYwr.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/ALMF0Vm7.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '<p><br/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/hsKacs5e.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/cNmxiUX2.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/jG60zDOP.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/yS4e2Hq1.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/URSHgyhp.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/v0ksqgtn.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/J5Hw29Bb.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/nTYEAOa9.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/8D5B6ZQG.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/0XU03oAm.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/j3q94SF0.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/N4NSktDv.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/KrcwxYyT.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/vfUPbtPv.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/7JfLujjD.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/ePIcVdIA.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/QzigWhHF.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/HcguTYwr.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211115/ALMF0Vm7.jpg\"/><br/></p>', '外夹式坡口机 圆管坡口机 管子坡口机 铣边机 管道坡口机', '焊接前处理', NULL, '2021-11-15 10:56:26', '张三', '2022-04-25 17:31:53', '张三');

-- ----------------------------
-- Table structure for goods_image
-- ----------------------------
DROP TABLE IF EXISTS `goods_image`;
CREATE TABLE `goods_image`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `goods_id` bigint(20) NOT NULL COMMENT '产品ID',
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '图片地址',
  `sort_num` int(11) NOT NULL DEFAULT 0 COMMENT '排序(降序)',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 193 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '商品图片关联表' ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of goods_image
-- ----------------------------
INSERT INTO `goods_image` VALUES (128, 17, '/uploads/nrd/20211112/OWtHaKUm.jpg', 0);
INSERT INTO `goods_image` VALUES (129, 18, '/uploads/nrd/20211112/Fw6NL2Q7.jpg', 0);
INSERT INTO `goods_image` VALUES (130, 19, '/uploads/nrd/20211112/8mD2FTGv.jpg', 0);
INSERT INTO `goods_image` VALUES (131, 20, '/uploads/nrd/20211112/Xd9JTCIN.jpg', 0);
INSERT INTO `goods_image` VALUES (132, 21, '/uploads/nrd/20211112/kaOT0vHU.jpg', 0);
INSERT INTO `goods_image` VALUES (133, 22, '/uploads/nrd/20211112/lTgrA6R2.jpg', 0);
INSERT INTO `goods_image` VALUES (136, 24, '/uploads/nrd/20211112/COrPNh63.jpg', 0);
INSERT INTO `goods_image` VALUES (137, 25, '/uploads/nrd/20211112/EXmK2e1Q.jpg', 0);
INSERT INTO `goods_image` VALUES (138, 26, '/uploads/nrd/20211112/1XAuIePO.jpg', 0);
INSERT INTO `goods_image` VALUES (139, 27, '/uploads/nrd/20211115/Zz1NeWIP.jpg', 0);
INSERT INTO `goods_image` VALUES (141, 29, '/uploads/nrd/20211115/BXs4IFq1.jpg', 0);
INSERT INTO `goods_image` VALUES (142, 29, '/uploads/nrd/20211115/vQsUweFI.jpg', 1);
INSERT INTO `goods_image` VALUES (143, 29, '/uploads/nrd/20211115/v35o28WM.jpg', 2);
INSERT INTO `goods_image` VALUES (144, 29, '/uploads/nrd/20211115/tin8UTBV.jpg', 3);
INSERT INTO `goods_image` VALUES (145, 29, '/uploads/nrd/20211115/lBN9moYs.jpg', 4);
INSERT INTO `goods_image` VALUES (146, 28, '/uploads/nrd/20211115/Q7a44F3H.jpg', 0);
INSERT INTO `goods_image` VALUES (159, 30, '/uploads/nrd/20211115/ki9aRX0K.jpg', 0);
INSERT INTO `goods_image` VALUES (160, 30, '/uploads/nrd/20211115/Wrzj387q.jpg', 1);
INSERT INTO `goods_image` VALUES (161, 30, '/uploads/nrd/20211115/rAVXzlPk.jpg', 2);
INSERT INTO `goods_image` VALUES (162, 30, '/uploads/nrd/20211115/4ld2u9Nr.jpg', 3);
INSERT INTO `goods_image` VALUES (163, 30, '/uploads/nrd/20211115/JoZjziEz.jpg', 4);
INSERT INTO `goods_image` VALUES (164, 30, '/uploads/nrd/20211115/5CYs4O1A.jpg', 5);
INSERT INTO `goods_image` VALUES (165, 30, '/uploads/nrd/20211115/1dVdSEYJ.jpg', 6);
INSERT INTO `goods_image` VALUES (166, 30, '/uploads/nrd/20211115/dyfglVEh.png', 7);
INSERT INTO `goods_image` VALUES (167, 30, '/uploads/nrd/20211115/ZyTXeUiQ.png', 8);
INSERT INTO `goods_image` VALUES (168, 30, '/uploads/nrd/20211115/k0EYO7gq.png', 9);
INSERT INTO `goods_image` VALUES (169, 30, '/uploads/nrd/20211115/RMJ1H2lW.jpg', 10);
INSERT INTO `goods_image` VALUES (170, 30, '/uploads/nrd/20211115/uoS5IeJr.jpg', 11);
INSERT INTO `goods_image` VALUES (173, 16, '/uploads/nrd/20211112/mkA6tpK0.jpg', 0);
INSERT INTO `goods_image` VALUES (174, 16, '/uploads/nrd/20211112/qQZSkkWB.jpg', 1);
INSERT INTO `goods_image` VALUES (189, 23, '/uploads/nrd/20220608/bxFP9s9B.jpg', 0);
INSERT INTO `goods_image` VALUES (190, 23, '/uploads/nrd/20220608/P2C6RZsv.jpg', 1);
INSERT INTO `goods_image` VALUES (191, 23, '/uploads/nrd/20220608/kxQAAVmp.jpg', 2);
INSERT INTO `goods_image` VALUES (192, 23, '/uploads/nrd/20220608/nLMUxTEG.jpg', 3);

-- ----------------------------
-- Table structure for home_image
-- ----------------------------
DROP TABLE IF EXISTS `home_image`;
CREATE TABLE `home_image`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标题',
  `title_en` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '英文标题',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '描述',
  `description_en` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '英文描述',
  `screen` tinyint(4) NULL DEFAULT NULL COMMENT '第几屏',
  `type` tinyint(4) NULL DEFAULT NULL COMMENT '1：按钮链接，2：图片链接，3：首页产品中心推荐产品',
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '地址',
  `image_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '图片地址',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 32 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of home_image
-- ----------------------------
INSERT INTO `home_image` VALUES (3, 'a', 'a', 'a', 'a', 1, 2, '/uploads/nrd/20211116/jqYqJ4rV.jpg', '/uploads/nrd/20220628/BuDe67wQ.jpg');
INSERT INTO `home_image` VALUES (4, '加入耐锐德', 'JOIN NEREID', 'iconfont icon-shangdian', '111', 1, 1, 'http://www.nareed.com/contact_us', NULL);
INSERT INTO `home_image` VALUES (5, '店铺链接', 'Store link', 'iconfont icon-a-ziyuan127', 'iconfont icon-a-ziyuan127', 1, 1, 'https://shop354738390.taobao.com/?spm=a230r.7195193.1997079397.2.70ff4a819fhGMI', NULL);
INSERT INTO `home_image` VALUES (6, '服务承诺', 'Service commitment', 'iconfont icon-fuwuchengnuo', 'iconfont icon-fuwuchengnuo', 1, 1, 'http://www.nareed.com/honor', NULL);
INSERT INTO `home_image` VALUES (7, '售后服务', 'After-sale service', 'iconfont icon-shouye', 'iconfont icon-shouye', 1, 1, 'http://www.nareed.com/contact_us', NULL);
INSERT INTO `home_image` VALUES (8, '做坡口行业的<span>领跑者</span>', 'Be the <span> leader in the groove industry</span>', '因为专注，所以专业<br/>                    精湛的一体化设计，柔美的线条转角与科技完美结合，给您带来非同一般的品质', 'Leading technology, excellent products < br / >\n\nExquisite integrated design, soft lines, corners and perfect combination of science and technology bring you extraordinary quality', 2, 2, '/static/image/home/banner2.jpg', '/uploads/nrd/20220628/5PhceUSx.jpg');
INSERT INTO `home_image` VALUES (9, '技术支持', 'Technical support', '技术支持', 'Technical support', 2, 1, '/technical?type=1', NULL);
INSERT INTO `home_image` VALUES (10, '使用案例', 'Use case', '使用案例', 'Use case', 2, 1, '/show_case', NULL);
INSERT INTO `home_image` VALUES (11, '视频使用案例', 'Video use cases', '公司始终把焊前使用坡口设备和坡口刀具作为开发和研究的重点同事在研发和生产及营销上不断的更新', 'The company always takes the use of groove equipment and groove tools before welding as the focus of development and research, and colleagues continue to innovate in R & D, production and marketing', 3, 2, '/static/image/home/banner3.jpg', '/uploads/nrd/20220628/NTEW5KMm.jpg');
INSERT INTO `home_image` VALUES (12, '产品中心', 'Product Center', '成熟的技术，售后的保障<br/>                    精湛的一体化设计，柔美的线条转角与科技完美结合，给您带来非同一般的品质', 'Leading technology, excellent products < br / >\n\nExquisite integrated design, soft lines, corners and perfect combination of science and technology bring you extraordinary quality', 4, 2, '/uploads/nrd/20220707/HVmxbGJH.jpg', '/uploads/nrd/20220707/EbDLQGAu.jpg');
INSERT INTO `home_image` VALUES (13, '自动行走坡口机', 'Automatic traveling beveling machine', '自动行走坡口机', 'Automatic traveling beveling machine', 4, 1, 'http://www.nareed.com/product_list?s=66', NULL);
INSERT INTO `home_image` VALUES (14, '小板材坡口机', 'Small plate beveling machine', '小板材坡口机', 'Small plate beveling machine', 4, 1, 'http://www.nareed.com/product_list?s=67', NULL);
INSERT INTO `home_image` VALUES (15, '曲线坡口机', 'Curve beveling machine', '曲线坡口机', 'Curve beveling machine', 4, 1, 'http://www.nareed.com/product_list?s=69', NULL);
INSERT INTO `home_image` VALUES (16, '便携式坡口机', 'Portable beveling machine', '便携式坡口机', 'Portable beveling machine', 4, 1, 'http://www.nareed.com/product_list?s=68', NULL);
INSERT INTO `home_image` VALUES (17, '内涨式圆管坡口机', 'External card type round pipe beveling machine', '内涨式圆管坡口机', 'External card type round pipe beveling machine', 4, 3, 'http://www.nareed.com/product_detail_25', '/uploads/nrd/20220707/5paD47jt.png');
INSERT INTO `home_image` VALUES (18, '无上限圆管坡口机', 'Internal expansion round pipe beveling machine', '无上限圆管坡口机', 'Internal expansion round pipe beveling machine', 4, 3, 'http://www.nareed.com/product_detail_27', '/uploads/nrd/20211125/TTiUFJZC.png');
INSERT INTO `home_image` VALUES (19, '平板坡口机', 'Planetary pipe beveling machine', '平板坡口机', 'Planetary pipe beveling machine', 4, 3, 'http://www.nareed.com/product_detail_23', '/uploads/nrd/20211120/rVQ6n08l.png');
INSERT INTO `home_image` VALUES (20, '自动行走坡口机', 'Round pipe beveling machine without upper limit', '自动行走坡口机', 'Round pipe beveling machine without upper limit', 4, 3, 'http://www.nareed.com/product_detail_18', '/uploads/nrd/20211120/GcoLi1vg.png');
INSERT INTO `home_image` VALUES (21, '合作客户', 'Cooperative customers', '科学工艺流程控制和严格质量检测，为客户创造实在并且持久的价值', 'Cooperative customers', 5, 2, '/static/image/home/banner5.jpg', '/uploads/nrd/20220628/m8CJvET6.jpg');
INSERT INTO `home_image` VALUES (27, '1', '1', '2', '1', 1, 2, '/uploads/nrd/20211116/qlMW9qJz.jpg', '/uploads/nrd/20220628/OU9UAuMV.jpg');
INSERT INTO `home_image` VALUES (28, '内涨式圆管坡口机', 'Internal expansion round pipe beveling machine', '内涨式圆管坡口机', 'Internal expansion round pipe beveling machine', 4, 1, 'http://www.nareed.com/product_list?s=70', NULL);
INSERT INTO `home_image` VALUES (29, '外卡式圆管坡口机', 'External card type round pipe beveling machine', '外卡式圆管坡口机', 'External card type round pipe beveling machine', 4, 1, 'http://www.nareed.com/product_list?s=71', NULL);
INSERT INTO `home_image` VALUES (30, '无上限圆管坡口机', 'Round pipe beveling machine without upper limit', '无上限圆管坡口机', 'Round pipe beveling machine without upper limit', 4, 1, 'http://www.nareed.com/product_list?s=72', NULL);
INSERT INTO `home_image` VALUES (31, 'C型外夹式圆管坡口机', 'C-type external clamp type round pipe beveling machine', 'C型外夹式圆管坡口机', 'C-type external clamp type round pipe beveling machine', 4, 1, 'http://www.nareed.com/product_list?s=74', NULL);

-- ----------------------------
-- Table structure for menu
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `parent_id` bigint(20) NOT NULL DEFAULT 0 COMMENT '上级ID',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标题',
  `title_en` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '英文标题',
  `href` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '链接',
  `sort_num` int(11) NULL DEFAULT NULL COMMENT '排序(降序)',
  `create_time` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  `create_by` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '创建人',
  `update_time` timestamp NULL DEFAULT NULL COMMENT '修改时间',
  `update_by` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '修改人',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 77 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '菜单表' ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of menu
-- ----------------------------
INSERT INTO `menu` VALUES (1, 0, '首页', 'home page', '/', 0, NULL, NULL, '2021-11-12 11:25:58', '张三');
INSERT INTO `menu` VALUES (2, 0, '产品中心', 'Product Center', '/product_list', 0, NULL, NULL, '2021-10-25 15:11:35', '张三');
INSERT INTO `menu` VALUES (3, 0, '产品视频', 'Product Video', '/product_video', 0, NULL, NULL, '2021-10-25 15:11:40', '张三');
INSERT INTO `menu` VALUES (4, 0, '使用案例', 'Case', '/show_case', 0, NULL, NULL, '2021-10-25 15:11:46', '张三');
INSERT INTO `menu` VALUES (5, 0, '企业实力', 'About', '/company', 0, NULL, NULL, '2021-10-25 15:11:51', '张三');
INSERT INTO `menu` VALUES (6, 0, '技术支持', 'Support', '/technical?type=1', 0, NULL, NULL, '2021-10-25 15:11:55', '张三');
INSERT INTO `menu` VALUES (7, 0, '荣誉资质', 'Honor', 'honor', 0, NULL, NULL, '2021-10-25 15:11:59', '张三');
INSERT INTO `menu` VALUES (8, 0, '联系我们', 'Contact US', '/contact_us', 0, NULL, NULL, '2021-10-25 15:12:05', '张三');
INSERT INTO `menu` VALUES (66, 2, 'Z系列（自动行走坡口机）', 'Z series (automatic traveling beveling machine)', '/product_list', 0, NULL, NULL, '2021-11-12 11:04:23', '张三');
INSERT INTO `menu` VALUES (67, 2, 'X 系列（小板材坡口机）', 'X Series (small plate beveling machine)', '/product_list', 0, NULL, NULL, '2021-11-12 11:04:05', '张三');
INSERT INTO `menu` VALUES (68, 2, 'B 系列（便携式坡口机）', 'B series (portable beveling machine)', '/product_list', 0, NULL, NULL, '2021-11-12 11:04:46', '张三');
INSERT INTO `menu` VALUES (69, 2, 'Q系列（曲线坡口机）', 'Q series (curve beveling machine)', '/product_list', 0, NULL, NULL, '2021-11-12 11:05:08', '张三');
INSERT INTO `menu` VALUES (70, 2, 'N系列（内涨式圆管坡口机）', 'N series (internal expansion round pipe beveling machine)', '/product_list', 0, NULL, NULL, '2021-11-12 11:05:26', '张三');
INSERT INTO `menu` VALUES (71, 2, 'W系列（外卡式圆管坡口机）', 'W series (external card type round pipe beveling machine)', '/product_list', 0, NULL, NULL, '2021-11-12 11:05:45', '张三');
INSERT INTO `menu` VALUES (72, 2, '无上限圆管坡口机', 'Round pipe beveling machine without upper limit', '/product_list', 0, NULL, NULL, '2021-11-12 11:06:02', '张三');
INSERT INTO `menu` VALUES (73, 2, '行星式坡口机', 'Planetary beveling machine', '/product_list', 0, NULL, NULL, '2021-11-12 11:06:21', '张三');
INSERT INTO `menu` VALUES (74, 2, 'C型外夹式圆管坡口机', 'C-type external clamp type round pipe beveling machine', '/product_list', 0, NULL, NULL, '2021-11-12 11:06:41', '张三');
INSERT INTO `menu` VALUES (75, 6, '公司新闻', 'd', '/technical?type=1', 0, NULL, NULL, '2021-10-25 15:08:26', '张三');
INSERT INTO `menu` VALUES (76, 6, '资料下载', 'a', '/technical?type=2', 0, NULL, NULL, '2021-10-25 15:08:29', '张三');

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `type` tinyint(4) NOT NULL COMMENT '模块 1:公司新闻 2:行业资讯',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '标题',
  `title_en` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '图片地址',
  `description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '描述',
  `description_en` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '内容',
  `content_en` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `home_recommend` tinyint(1) NULL DEFAULT NULL COMMENT '是否首页推荐',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '创建人',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `update_by` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '修改人',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '新闻表' ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES (2, 1, '机床夹具的组成具体有哪些部分2', NULL, '/uploads/20211025/6GZZhXbM.jpg', '【中国机床商务网 科技动态】“工欲善其事，必先利其器。”工具是人类文明进步的标志。自20世纪末期以来，现代制造技术...', NULL, '1', NULL, NULL, '2021-10-26 10:48:39', '1', '2021-10-26 10:53:00', NULL);
INSERT INTO `news` VALUES (5, 1, '机床夹具的组成具体有哪些部分5', NULL, '/uploads/20211025/6GZZhXbM.jpg', '【中国机床商务网 科技动态】“工欲善其事，必先利其器。”工具是人类文明进步的标志。自20世纪末期以来，现代制造技术...', NULL, '<p>312312</p>', NULL, 1, '2021-10-25 15:07:08', '张三', '2021-10-26 10:53:02', NULL);
INSERT INTO `news` VALUES (10, 3, '甘肃客户30厚的板材要求同时打双面焊接前坡口', ' 甘肃客户要求同时双面坡口 Gansu customers require double-sided groove at the same time', '/uploads/nrd/20211118/nVGRr9sx.jpg', '30mm板材厚度，中间留5mm，上下同时打45度坡口', '40mm plate thickness, 5mm reserved in the middle, and 45 degree groove shall be made up and down at the same time', '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20211118/rIKocAX7.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211118/HGjeIGe9.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211118/3f5AL8f4.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211118/QPwQQS8N.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211118/QGr5nMug.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211118/GtQpHm96.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211118/tNwweFvN.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211118/uFpsNH6A.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211118/wnh8xOBJ.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211118/6oh8pjoo.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '<p><br/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211118/rIKocAX7.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211118/HGjeIGe9.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211118/3f5AL8f4.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211118/QPwQQS8N.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211118/QGr5nMug.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211118/GtQpHm96.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211118/tNwweFvN.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211118/uFpsNH6A.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211118/wnh8xOBJ.jpg\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20211118/6oh8pjoo.jpg\"/><br/></p>', 1, '2021-11-18 14:11:00', '张三', '2021-11-18 14:16:48', '张三');
INSERT INTO `news` VALUES (11, 1, '坡口机接线', 'Beveling machine wiring', '/uploads/nrd/20211118/oCB6H7Pu.jpg', '坡口机接线错误会怎样？', 'What happens to the wrong wiring of the beveling machine?', '<p>随着社会的发展，管道的运用越来越广泛，那必然会遇到管道与管道之间换接和修复提高焊接质量所以说给管道开坡口的设备就是坡口机。坡口机是管道或平板在焊接前端面进行倒角坡口的专用工具，解决了火焰切割、磨光机磨削等操作工艺的角度不规范、坡面粗糙、工作噪音大等缺点，具有操作简便，角度标准，表面光滑等优点。那么坡口机接线错误会怎样呢？下面耐锐德坡口机械来给大家介绍。</p><p>&nbsp;</p><p><strong>坡口机接线错误会怎样：</strong></p><p>&nbsp;</p><p><strong>1、铣刀片直接破裂：</strong></p><p>&nbsp;</p><p>  发生此情况的后果主要是集中在铣削型的机型，由于坡口机在通电后坡口刀盘高速旋转，其刀片的切削方向跟我们进刀的方向不一致，所以在切削是是刀片背部接触工作，从而没有产生切削，这时就发生铣刀片直接崩裂的后果，如果未即时更正有可能扭弯或者扭断刀盘主轴。&nbsp;</p><p><br/></p><p><strong>2、坡口机无法进刀：</strong></p><p>&nbsp;</p><p>  发生此情况的后果主要集中在滚剪式坡口机型，坡口机工作时，由于坡口刀跟行进方向相反，坡口机相当于是在做退刀的动作，所以在接线错误的情况下，我们无论如何也不能使坡口机进刀进行打坡口。</p><p>&nbsp;</p><p>  以上内容就是对坡口机接线错误会怎样的介绍了，坡口机操作时，脸不能正对坡口机刀口，身体任何部分不能放在坡口机上面，这是非常危险的。若需要两个人一起操作一台坡口机，应先分工明确，遵从一人指挥。若坡口机在运用的过程中，呈现非正常断电的情况下，应在时间堵截电源，刀架退出。</p>', '<p>随着社会的发展，管道的运用越来越广泛，那必然会遇到管道与管道之间换接和修复提高焊接质量所以说给管道开坡口的设备就是坡口机。坡口机是管道或平板在焊接前端面进行倒角坡口的专用工具，解决了火焰切割、磨光机磨削等操作工艺的角度不规范、坡面粗糙、工作噪音大等缺点，具有操作简便，角度标准，表面光滑等优点。那么坡口机接线错误会怎样呢？下面耐锐德坡口机械来给大家介绍。</p><p>&nbsp;</p><p><strong>坡口机接线错误会怎样：</strong></p><p>&nbsp;</p><p><strong>1、铣刀片直接破裂：</strong></p><p>&nbsp;</p><p>  发生此情况的后果主要是集中在铣削型的机型，由于坡口机在通电后坡口刀盘高速旋转，其刀片的切削方向跟我们进刀的方向不一致，所以在切削是是刀片背部接触工作，从而没有产生切削，这时就发生铣刀片直接崩裂的后果，如果未即时更正有可能扭弯或者扭断刀盘主轴。&nbsp;</p><p><br/></p><p><strong>2、坡口机无法进刀：</strong></p><p>&nbsp;</p><p>  发生此情况的后果主要集中在滚剪式坡口机型，坡口机工作时，由于坡口刀跟行进方向相反，坡口机相当于是在做退刀的动作，所以在接线错误的情况下，我们无论如何也不能使坡口机进刀进行打坡口。</p><p>&nbsp;</p><p>  以上内容就是对坡口机接线错误会怎样的介绍了，坡口机操作时，脸不能正对坡口机刀口，身体任何部分不能放在坡口机上面，这是非常危险的。若需要两个人一起操作一台坡口机，应先分工明确，遵从一人指挥。若坡口机在运用的过程中，呈现非正常断电的情况下，应在时间堵截电源，刀架退出。</p>', 1, '2021-11-18 14:28:19', '张三', NULL, NULL);
INSERT INTO `news` VALUES (16, 1, '内涨式圆管坡口机操作方法', NULL, '/uploads/nrd/20211123/1vvqEDYz.png', '管道坡口机在使用的过程要严格按照操作流行进行，不然不但会影响管道坡口机的使用还可能带来危险。下面我们就来介绍下管道坡口机的操作。', NULL, '<p style=\"text-align:center;\"><img src=\"http://120.25.100.147:8087/uploads/nrd/20211123/qVWwbW7P.png\" contenteditable=\"false\" style=\"font-size: 14px; max-width: 100%;\" width=\"491.06\" height=\"685.72\"/><br/></p><p>内涨式管道坡口机在使用的过程要严格按照操作流行进行，不然不但会影响管道坡口机的使用还可能带来危险。下面我们就来介绍下管道坡口机的操作。</p><p><br/>1. 先量管子内径尺寸大小,然后根据涨紧块图表选取所需的涨紧块,装在涨紧楔块机构上,拧紧螺丝即可固定好管道坡口机。</p><p><br/></p><p>2. 根据刀具图表选用合适的角度刀片,装在机器刀盘上,注意刀片绝对不允许与进刀主轴及涨块接触,否则会损伤机器。</p><p><br/></p><p>3. 先退上进给手轮的行程后,管道坡口机涨紧定位机构插入管子中,刀盘上刀片和管子端面最高点留有足够空间。稍微拧紧拉杆螺帽,用手摆动一下机器,以使涨紧机构正确自定管子中心,然后用呆扳手拧紧拉杆螺帽即可。注意涨紧块插入管子内的涨紧部件不宜插入太深,与管子端面距离20mm左右为佳。</p><p><br/></p><p>4. 开启机器,刀盘立即旋转,用手转动进给手轮,使刀刃和管子接触,接触后即可进行正常坡口加工。加工过程中注意加工件切削量情况,控制刀具进给速度,以免损坏刀刃及机器内部小齿轮,并注意加工过程中如机器发生振动等异常情况应及时拧紧拉杆螺帽,防止松动对坡口机造成损伤。</p><p><br/></p><p>5. 一旦刀具装好,机器可从一条管子移动到另一条同样规格管子继续加工,不需要重新调整刀具位置。这样,一道坡口完成后,应先退出坡口刀,再松开涨紧螺帽,最后拿出坡口机,将他安装在另一条管子上坡口,也按同样的方法操作。</p><p><br/></p><p>以上就是为大家介绍的内涨式圆管坡口机的操作流量，当我们在使用的时候一定要严重按照这个流行来使用。</p>', NULL, 1, '2021-11-23 16:56:15', '张三', '2021-11-23 16:59:11', '张三');
INSERT INTO `news` VALUES (17, 3, '中国中铁隧道局现场加工案例', NULL, '/uploads/nrd/20220212/QESuohuu.jpg', '壁厚18mm，直径273-430，选用电机驱动，切割坡口同时进行，客户很满意', NULL, '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20220212/GORIL0bJ.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20220212/8hpZHRHV.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20220212/jPvtT4b9.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20220212/pH5AX49Q.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20220212/qtCZVnaH.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20220212/1rlDZHA3.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20220212/XvptNuZ9.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', NULL, 1, '2022-02-12 08:58:47', '张三', '2022-02-14 14:38:17', '张三');
INSERT INTO `news` VALUES (18, 3, '中原油库动火连头项目采购一批机器现场培训', NULL, '/uploads/nrd/20220307/GJHo17BQ.jpg', '中原油库动火连头项目部', NULL, '<p><img src=\"http://120.25.100.147:8087/uploads/nrd/20220307/J5azkv2n.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20220307/DzNXcQNp.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20220307/7Z6hf7HM.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20220307/HQxn0g4S.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20220307/DnlgQbwb.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20220307/qYpr78dK.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20220307/R2PqluvI.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/><img src=\"http://120.25.100.147:8087/uploads/nrd/20220307/orr089CC.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', NULL, 1, '2022-03-07 19:31:08', '张三', NULL, NULL);
INSERT INTO `news` VALUES (19, 2, '关于内账式管道坡口机刀片损坏原因分析', NULL, '/uploads/nrd/20220608/3BRR1eCL.jpg', '关于内胀式管道坡口机，使用过程中，我们偶尔会遇到断轴，断拉杆，坏刀片的情况。\n\n那么如何避免管道坡口机这样的损坏呢？\n\n其中刀具是尤为重要！ \n\n通常，我们在加工不同材质的管道时候，最好选用相对应的刀具来加工，比如加工不锈钢或耐热钢管道坡口时候，尽量不要选用普通白钢的刀具进行加工。\n\n尽量选用带有合金成份的刀具，比如含钴刀具，或带有硬质合金头的刀具使用。 \n\n其次，刀具磨损也会对机器造成一定的损伤。一般我们使用过程中，如果切下来的为条形铁条状，则刀具还是非常锋利的，如果切下来的如果为小片小片或断裂严重，则说明刀具己经磨损，需要修磨后再便用。\n\n通常内胀式80T以下的型号的小型机器，如果选刀不对，或者刀具磨损，会造成切削坡口时候阻力加大，造成撞刀，从而引起轴、杆或者齿轮的损坏。', NULL, '<p>关于内胀式管道坡口机，使用过程中，我们偶尔会遇到断轴，断拉杆，坏刀片的情况。<br/><br/>那么如何避免管道坡口机这样的损坏呢？<br/><br/>其中刀具是尤为重要！ <br/><br/>通常，我们在加工不同材质的管道时候，最好选用相对应的刀具来加工，比如加工不锈钢或耐热钢管道坡口时候，尽量不要选用普通白钢的刀具进行加工。<br/><br/>尽量选用带有合金成份的刀具，比如含钴刀具，或带有硬质合金头的刀具使用。 <br/><br/>其次，刀具磨损也会对机器造成一定的损伤。一般我们使用过程中，如果切下来的为条形铁条状，则刀具还是非常锋利的，如果切下来的如果为小片小片或断裂严重，则说明刀具己经磨损，需要修磨后再便用。<br/><br/>通常内胀式80T以下的型号的小型机器，如果选刀不对，或者刀具磨损，会造成切削坡口时候阻力加大，造成撞刀，从而引起轴、杆或者齿轮的损坏。</p><video src=\"http://120.25.100.147:8087/uploads/nrd/20220608/bPGWDOTF.mp4\" controls=\"controls\" style=\"max-width:100%\"></video>', NULL, 1, '2022-06-08 14:15:54', '张三', NULL, NULL);
INSERT INTO `news` VALUES (20, 1, '坡口机长时间闲置应如何保养', NULL, '/uploads/nrd/20230210/5xE7xbi7.jpg', '坡口机长时间不用该如何保养？\n机器长时间不用启动前需要怎样去检查机器？\n', NULL, '<p>一：长时间久置应该注意防水，在<a href=\"http://www.zjaotai.cn/\" target=\"_blank\">坡口机</a>有计划的闲置时，我们应该保证放置机器的地点应该与水断绝。防水的工作应该注意几个方面，首先来自外部的，机器放置地点应该远离水龙头的位置，其次坡口放置点应该远离布有水管的地方，有水管布置的地方也应该避开，以防水管老化破裂溅湿<a href=\"http://www.zjaotai.cn/\" target=\"_blank\">坡口机</a>机器，未尾特别注意的是针对陈旧的车间，厂房顶部也应选择不会漏雨的地点进行放置<a href=\"http://www.zjaotai.cn/\" target=\"_blank\">坡口机</a>产品，从而确保坡口放置地点全方位防水的目的。</p><p>二：坡口机应注意防锈，在坡口机使用一段时间后，我们在放置前应刷机油或者专业的防锈油在上面，从而达到防锈的效果，毕竟若产生大量的铁锈后轻者需要大量时间进行轻型，重者需要从新更换相应的坡口机附件。</p><p>三:坡口机放置地点应注意防尘，在准备长期放置坡口机时，将收捡好坡口机擦干净灰尘和水渍，应该用塑料保护袋套在上面，再把包装木箱罩在上面，从而使散落的灰尘不会溅落在机器上而在木箱上面，下次再次使用坡口机产品时机器也十分的整洁。</p><p>四：长时间应该把机器电源线路断开，上面铁屑擦试干净，从而更好的保护坡口机保证的下次使用。<br/></p><p>五：机器长时间没用的情况下应该检查齿轮内部油量，电线是否缺损。<br/></p>', NULL, 1, '2023-02-10 19:57:26', '张三', NULL, NULL);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户名',
  `account` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '登陆账号',
  `password` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '登陆密码',
  `status` tinyint(4) NOT NULL DEFAULT 1 COMMENT '状态:1正常，2禁用',
  `create_time` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  `create_by` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '创建人',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `update_by` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '修改人',
  `avatar` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '头像',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户表' ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '张三', 'admin123', '202cb962ac59075b964b07152d234b70', 1, '2021-09-15 19:56:37', '-', '2021-09-22 09:42:29', '张三', NULL);
INSERT INTO `user` VALUES (2, 'bin', 'liubin', '202cb962ac59075b964b07152d234b70', 1, '2021-09-22 11:11:22', '张三', '2021-09-23 15:54:31', 'bin', NULL);

-- ----------------------------
-- Table structure for video
-- ----------------------------
DROP TABLE IF EXISTS `video`;
CREATE TABLE `video`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `video_url` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '视频地址',
  `video_image_url` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '视频封面图片',
  `home_recommend` tinyint(1) NULL DEFAULT 0 COMMENT '首页推荐 1:是，2:否',
  `belong_id` bigint(20) NULL DEFAULT NULL COMMENT '分类ID',
  `order_num` int(11) NULL DEFAULT NULL COMMENT '排序（降序）',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '视频表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of video
-- ----------------------------
INSERT INTO `video` VALUES (5, 'https://www.ixigua.com/iframe/7029196197663343141?autoplay=0', NULL, 1, 26, 0);
INSERT INTO `video` VALUES (6, 'https://www.ixigua.com/iframe/7030684275624280590?autoplay=0', NULL, 1, 19, 0);
INSERT INTO `video` VALUES (7, 'https://www.ixigua.com/iframe/7030688319616844302?autoplay=0', NULL, 1, 26, 0);
INSERT INTO `video` VALUES (9, 'https://www.ixigua.com/iframe/7031145865934799368?autoplay=0', NULL, 1, 25, 0);
INSERT INTO `video` VALUES (10, 'https://www.ixigua.com/iframe/7031875436422693412?autoplay=0', NULL, 1, 25, 5);
INSERT INTO `video` VALUES (11, 'https://www.ixigua.com/iframe/7032103637501346318?autoplay=0', NULL, 1, 26, 6);
INSERT INTO `video` VALUES (12, 'https://www.ixigua.com/iframe/7033326798532411934?autoplay=0', NULL, 1, 23, 7);
INSERT INTO `video` VALUES (13, 'https://www.ixigua.com/iframe/7033727272913732126?autoplay=0', NULL, 1, 27, 8);
INSERT INTO `video` VALUES (14, 'https://www.ixigua.com/iframe/7024099875306340895?autoplay=0', NULL, 1, 25, 9);
INSERT INTO `video` VALUES (15, 'https://www.ixigua.com/iframe/7034486662910444039?autoplay=0', NULL, 1, 19, 10);
INSERT INTO `video` VALUES (16, 'https://www.ixigua.com/iframe/7035971809363100174?autoplay=0', NULL, 1, 20, 11);
INSERT INTO `video` VALUES (17, 'https://www.ixigua.com/iframe/7036689990637584927?autoplay=0', NULL, 1, 22, 11);
INSERT INTO `video` VALUES (18, 'https://www.ixigua.com/7036690668399362061', NULL, 0, 21, 0);
INSERT INTO `video` VALUES (19, 'https://www.ixigua.com/iframe/7038559399958282782?autoplay=0', NULL, 0, 17, 0);
INSERT INTO `video` VALUES (20, 'https://www.ixigua.com/iframe/7038561353799303688?autoplay=0', NULL, 0, 18, 0);
INSERT INTO `video` VALUES (21, 'https://www.ixigua.com/iframe/7064729149532799524?autoplay=0\" referrerpolicy=\"unsafe-url\" allowfullscreen></iframe>', NULL, 1, 24, 0);
INSERT INTO `video` VALUES (22, 'https://www.ixigua.com/iframe/7064825560412717598?autoplay=0\" referrerpolicy=\"unsafe-url\" allowfullscreen></iframe>', NULL, 1, 30, 0);

SET FOREIGN_KEY_CHECKS = 1;
