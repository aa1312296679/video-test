//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    videoPay: false,
    videoShow: true
  },
  /**事件处理函数**/
  videoPay: function() {
    //更新当前播放状态
    this.data.videoPay = !this.data.videoPay;
    this.setData({
      videoPay: this.data.videoPay
    })
    if (this.data.videoPay === true) {
      wx.createVideoContext("myVideo").play();
    } else {
      wx.createVideoContext("myVideo").pause();
    }
  },
  videoEnd() {
    this.setData({
      videoShow: false
    })
  },
  onLoad: function() {

  },
  getUserInfo: function(e) {

  }
})