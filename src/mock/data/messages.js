const Mock = require('mockjs')
const Random = Mock.Random;

const messages = [
  {
    id:1,
    type:'other',
    avatar:Random.image('200x200','#ffcc33'),
    nickname:'喵喵',
    msg:'你好呀',
    msgType:'msg',
    time:'1/12'
  },
  {
    id:2,
    type:'other',
    avatar:Random.image('200x200','#ffcc33'),
    nickname:'喵喵呜',
    msg:'你好啊 记得添加文本超出展示省略号的效果哦',
    msgType:'msg',
    time:'1/12'
  },
  {
    id:3,
    type:'other',
    avatar:Random.image('200x200','#EFF1F3'),
    nickname:'一只菜喵',
    msg:'你好啊 记得根据页面的resize调整聊天室滚动条高度以及列表高度哦',
    msgType:'msg',
    time:'1/13'
  },
  {
    id:4,
    type:'other',
    avatar:Random.image('200x200','#F7DE1F'),
    nickname:'孤独的狼',
    msg:Random.image('200x200','#EFF1F3'),
    msgType:'pic',
    time:'1/14'
  },
  {
    id:5,
    type:'other',
    avatar:Random.image('200x200','#EFF1F3'),
    nickname:'一只菜喵',
    msg:'记得限制消息框宽度',
    msgType:'msg',
    time:'1/14'
  },
  {
    id:6,
    type:'self',
    avatar:Random.image('200x200','#F7DE1F'),
    nickname:'小黑',
    msg:'@一只菜喵 好的哦',
    msgType:'msg',
    time:'1/14'
  },
  {
    id:7,
    type:'other',
    avatar:Random.image('200x200','#F7DE1F'),
    nickname:'孤独的狼',
    msg:'嗷呜~~~',
    msgType:'msg',
    time:'1/14'
  },
  {
    id:8,
    type:'other',
    avatar:Random.image('200x200','#D09000'),
    nickname:'桃子',
    msg:'hello',
    msgType:'msg',
    time:'1/14'
  },
  {
    id:9,
    type:'self',
    avatar:Random.image('200x200','#F7DE1F'),
    nickname:'小黑',
    msg:Random.image('200x200','#EFF1F3'),
    msgType:'pic',
    time:'1/14'
  },
  {
    id:10,
    type:'self',
    avatar:Random.image('200x200','#F7DE1F'),
    nickname:'小黑',
    msg:'记得添加聊天室页面关闭功能',
    msgType:'msg',
    time:'1/14'
  }
]


module.exports = {
  messages
}