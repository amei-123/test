//index.js
//获取应用实例

const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../img/1.jpg',
      '../../img/2.jpg',
      '../../img/3.jpg',
      '../../img/4.jpg'
    ],
    
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    detail : [
      {
        src: '../../img/jd4.png',
        head: "故事漫画西游记",
        title: "西游记 - 第003集",
        time: "05-07 18:04更新",
        free: "免费"
      },
      {
        src: '../../img/jd4.png',
        head: "故事漫画西游记",
        title: "西游记 - 第003集",
        time: "05-07 18:04更新",
        free: "免费"
      },

      {
        src: '../../img/jd4.png',
        head: "故事漫画西游记",
        title: "西游记 - 第003集",
        time: "05-07 18:04更新",
        free: "免费"
      }
    ],
    course:[
      {
        h:"php",
        src: '../../img/jd4.png',
        head: "启蒙国学动漫三字经",
        title: "9.90 ",
        count:"689人已学习" ,
        more:"查看更多>>"
      },
      {
        h: "java",
        src: '../../img/jd4.png',
        head: "启蒙国学动漫三字经",
        title: "9.90 ",
        count: "689人已学习",
        more: "查看更多>>"
      },
      {
        h: "c++",
        src: '../../img/jd4.png',
        head: "启蒙国学动漫三字经",
        title: "9.90 ",
        count: "689人已学习",
        more: "查看更多>>"
      },
      {
        h: "css",
        src: '../../img/jd4.png',
        head: "启蒙国学动漫三字经",
        title: "9.90 ",
        count: "689人已学习",
        more: "查看更多>>"
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
