var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * type 文章分类
 * 1: technical 技术文章
 * 2: journal 日志
 * 
 * tags 标签，自定义任何标签
 * 
 * cover 封面
 * 
 * about 简介
 * 
 * content 内容
 * 
 * views 阅读数
 * 
 * isTop 置顶文章
 * 
 * isShow 隐藏文章，不存在删除数据操作，前台是否展示靠isShow
 */
var articleSchema = new Schema({
    author: String,
    title: String,
    about: String,
    content: String,
    type: String,
    tags: Array,
    cover: String,
    views: Number,
    isTop: {
      type: Boolean,
      default: false
    },
    isShow: {
      type: Boolean,
      default: true
    },
    updateTime: {
      type: Date,
      default: Date.now
    },
    createTime: Date
});

module.exports = mongoose.model('Article', articleSchema);
