// pages/my/index.js
import {
  records
} from '../../utils/common'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    records: []
  },

  getRecords() {
    // const records = [{
    //     id: '1',
    //     img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
    //     title: '计算机专业毕业，不从事程序员工作',
    //     author: {
    //       username: '小红薯669D477F',
    //       avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg'
    //     },
    //     like: 2447
    //   },
    //   {
    //     id: '2',
    //     img: 'https://sns-webpic-qc.xhscdn.com/202412111847/4fb1364ab1910086ec6ce43d81dde321/1040g00831a5rgdt07a0049pi4tcoh0shbkqv958!nd_dft_wlteh_webp_3',
    //     title: '计算机专业毕业，不从事程序员工作',
    //     author: {
    //       username: '小土豆669D477F',
    //       avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg'
    //     },
    //     like: 2449
    //   },
    //   {
    //     id: '3',
    //     img: 'https://sns-webpic-qc.xhscdn.com/202412111842/a4356b0260957adfef6a42a414769efa/spectrum/1040g0k031a370702mo005po11o8nc9t4c7kpfu8!nd_dft_wlteh_webp_3',
    //     title: '计算机专业毕业，不从事程序员工作',
    //     author: {
    //       username: '小玉米669D477F',
    //       avatar: 'https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo312v8resr6a5g5nq3q2f092p1emr2dso?imageView2/2/w/120/format/jpg|imageMogr2/strip'
    //     },
    //     like: 2247
    //   },
    //   {
    //     id: '4',
    //     img: 'https://sns-webpic-qc.xhscdn.com/202412111842/1a8e1c0eaa9200f8b72f977e07ddc896/spectrum/1040g34o31a37098rmu0g5po11o8nc9t4k2muc5g!nd_dft_wlteh_webp_3',
    //     title: '计算机专业毕业，不从事程序员工作',
    //     author: {
    //       username: '小豆角669D477F',
    //       avatar: 'https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo3193pcbqi58005p836ac0i75vngq8ck8?imageView2/2/w/120/format/jpg|imageMogr2/strip'
    //     },
    //     like: 2457
    //   }
    // ]
    this.setData({
      records: records
    })
  },

  onTabsChange(event) {
    console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
  },

  onTabsClick(event) {
    console.log(`Click tab, tab-panel value is ${event.detail.value}.`);
  },

  onStickyScroll(event) {
    console.log(event.detail);
  },

  onToDetail(event) {
    const id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/note/detail/index?id=${id}`
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getTabBar().init()
    this.getRecords()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})