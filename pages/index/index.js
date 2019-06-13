//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    videoPay: false, //播放器播放状态
    videoEnd: false, //播放器的内容进度 默认为false 未播放完毕 播放完毕时未true 已播放完毕
    initShow: true //播放器是否为初始状态
  },
  /**事件处理函数**/
  videoPay: function() {
    if (this.data.initShow) {
      this.setData({
        initShow: false
      })
    }
    //我
    if (this.data.videoEnd) {
      this.setData({
        videoEnd: false
      })
      wx.createVideoContext("myVideo").play();
      return;
    }
     
    //更新当前播放状态
    this.setData({
      videoPay: !this.data.videoPay
    });

    if (this.data.videoPay === true) {
      wx.createVideoContext("myVideo").play();
    } else {
      wx.createVideoContext("myVideo").pause();
    }
  },
  /**视频截止**/
  videoEnd() {
    this.setData({
      videoEnd: true
    })
  },
  /**视频播放**/
  videoPlay() {
    if (!this.data.videoPay) {
      this.setData({
        videoPay: true
      })
    }
  },
  /*视频暂停*/
  videoPause() {
    if (this.data.videoPay) {
      this.setData({
        videoPay: false
      })
    }
  }
})