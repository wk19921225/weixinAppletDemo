Page({
  data:{
      "date" : "Mon 18 2017" ,
      "title": "你好 世界"
  },
  process:function(){
  }
  ,
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    console.log("onload");
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    console.log("onready");
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
      console.log("onshow");
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
     console.log("onhiden");
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    console.log("onunload");
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
     console.log("onpull");
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
     console.log("onreach");
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})