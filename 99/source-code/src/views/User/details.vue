<template>
  <div class="details">
    <div class="details-1">
      <img :src="imgSrc('grxx_user.png')" mode="">
    </div>
    <div class="details-2">
      <div class="title">请完善个人信息</div>
      <div class="content">
        <div class="left">昵称</div>
        <div class="right">
          <div class="right-1"><input type="text" v-model="userInfo.nickName" /></div>
          <img :src="imgSrc('jiantou.png')" mode="">
        </div>
      </div>
      <div class="content" @click="showGender">
        <div class="left">性别</div>
        <div class="right">
          <div class="right-1">{{genderName || '请选择'}}</div>
          <img :src="imgSrc('jiantou.png')" mode="">
        </div>
      </div>
      <div class="content" @click="showDate">
        <div class="left">出生日期</div>
        <div class="right">
          <div class="right-1">{{userInfo.birthday || '请选择'}}</div>
          <img :src="imgSrc('jiantou.png')" mode="">
        </div>
      </div>
      <div class="content" @click="showAddress">
        <div class="left">地区<text style="color: #FF2342;margin-left: .3125rem;">*</text></div>
        <div class="right">
          <div class="right-1">{{address}}</div>
          <img :src="imgSrc('jiantou.png')" mode="">
        </div>
      </div>
    </div>
    <div class="details-3" @click="save">确定</div>
    <!-- #ifndef MP-ALIPAY -->
    <div v-show="mubuKey" class="mubu">
      <div class="picker">
        <picker show-toolbar :columns='multiArray' @change="changePicker" @confirm="confirm" @cancel="onCancel">
        </picker>
      </div>
    </div>
    <!-- #endif -->
    <!-- #ifndef MP-ALIPAY -->
    <div v-show="mubuKey1" class="mubu">
      <div class="picker">
        <datetime-picker
          v-model="birthday"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="confirmDate"
          @cancel='closeDate'
        />
      </div>
    </div>
    <!-- #endif -->
    <!-- <picker ref="picker" mode="date" :end="endDate" @change="bindDateChange">
    </picker>
    <picker ref="address" mode="multiSelector" @columnchange="bindMultiPickerColumnChange" @change="changePicker"
      :value="multiIndex" :range="multiArray">
    </picker> -->
    <gender-select ref="gender" :showKey="genderKey" @change="changeSex"></gender-select>
  </div>
</template>

<script>
  import {
    Picker,
    Toast,
    DatetimePicker 
  } from 'vant';
  import {
    imgUrl
  } from '../../api/config.js'
  import {
    nonce,
    timestamp
  } from '../../util/random.js'
  import {
    counties
  } from '../../util/counties.js'
  import GenderSelect from './component/GenderSelect.vue'
  export default {
    components: {
      GenderSelect,
      Picker,
      DatetimePicker
    },
    data() {
      return {
        birthday:new Date(),
        mubuKey:false,
        mubuKey1:false,
        genderName: '',
        userInfo: {
          nickName: ''
        },
        multiIndex: ['', '', '无'],
        multiArray: [{
          values: [],
          defaultIndex: 0
        }, {
          values: [],
          defaultIndex: 0
        }, {
          values: ['无'],
          defaultIndex: 0
        }],
        genderKey: false,
        ajax: false,
        type: '',
        minDate: new Date(1900,0,1),
        maxDate: new Date()
      }
    },
    created() {
      let option = this.$route.query
      this.type = option.type
      this.getUserInfo()
      this.multiArray[0].values = [...counties.map(res => res.Name)]
      this.multiArray[1].values = [...counties[0].Child.map(res => res.Name)]
      this.multiArray[2].values = [...counties[0].Child[0].Child.map(res => res.Name)]
    },
    computed: {
      imgSrc() {
        return (name) => {
          return imgUrl + name
        }
      },
      endDate() {
        let date = new Date()
        let m = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
        let d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        console.log(`${date.getFullYear()}-${m}-${d}`);
        return `${date.getFullYear()}-${m}-${d}`
      },
      address() {
        if (this.userInfo.province && this.userInfo.city) {
          return this.userInfo.province + this.userInfo.city + (this.userInfo.county || '')
        } else {
          return '请选择'
        }
      }
    },
    methods: {
      confirmDate(e){
        let t = new Date(e)
        let y = t.getFullYear();
        let m = t.getMonth()+1;
        let d = t.getDate()
        m = m<10?'0'+m:m;
        d = d<10?'0'+d:d;
        this.userInfo.birthday = `${y}-${m}-${d}`
        this.closeDate()
      },
      closeDate(){
        this.mubuKey1 = false
      },
      onCancel(){
        this.mubuKey = false
      },
      confirm(value, index){
        this.multiIndex = value
        this.name1 = ''
        let one = index[0];
        let two = index[1];
        let three = index[2];
        this.userInfo.provinceId = counties[one].Id;
        this.userInfo.cityId = counties[one].Child[two].Id;
        this.userInfo.countyId = counties[one].Child[two].Child?counties[one].Child[two].Child[three].Id:'';
        this.userInfo.province = counties[one].Name;
        this.userInfo.city = counties[one].Child[two].Name;
        this.userInfo.county = counties[one].Child[two].Child?counties[one].Child[two].Child[three].Name:'';
        this.onCancel()
      },
      changeSex(name, data) {
        this.genderName = name;
        this.userInfo.gender = data
      },
      showGender() {
        this.$refs.gender.showKey = true;
      },
      showAddress() {
        this.mubuKey = true
      },
      bindDateChange(data) {
        console.log(data.detail.value);
        this.userInfo.birthday = data.detail.value
      },
      showDate() {
        this.mubuKey1 = true
        // this.$refs.picker.$el.click();
      },
      async getUserInfo() {
        let res = await this.$http.post('/api/v1/UserProfile/GetUserInfo', {
          type: 1
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        if (res) {
          if (res.data.code === 1) {
            this.genderName = res.data.data.genderText
            this.userInfo = res.data.data
            let date = new Date(res.data.data.birthday)
            this.userInfo.birthday =
              `${date.getFullYear()}-${(date.getMonth()+1)<10?'0'+(date.getMonth()+1):date.getMonth()+1}-${date.getDate()<10?'0'+date.getDate():date.getDate()}`
          }
        }
      },
      changePicker: function (data, value, index) {
        this.multiIndex[index] = value[index]
        let list = null
        switch (index) {
          case 0: //拖动第1列
            this.multiArray.splice(1,1,{
              values:[ ...counties.find(res=>res.Name === this.multiIndex[0]).Child.map(res => res.Name)],
              defaultIndex:0
            })
            list=counties.find(res=>res.Name === this.multiIndex[0]).Child[0].Child
            this.multiArray.splice(2,1,{
              values:(!list || list.length === 0)?[]:[ ...list.map(res => res.Name)],
              defaultIndex:0
            })
            break
          case 1: //拖动第1列
            list=counties.find(res=>res.Name === this.multiIndex[0]).Child.find(res=>res.Name === this.multiIndex[1]).Child
            this.multiArray.splice(2,1,{
              values:(!list || list.length === 0)?[]:[ ...list.map(res => res.Name)],
              defaultIndex:0
            })
            // this.multiArray.splice(1,1,{
            //   values:[ ...counties.find(res=>res.Name === this.multiIndex[0]).Child.map(res => res.Name)],
            //   defaultIndex:0
            // })
            break
        }
        // this.$forceUpdate()
      },
      bindMultiPickerColumnChange: function (e) {
        this.multiIndex[e.detail.column] = e.detail.value
        switch (e.detail.column) {
          case 0: //拖动第1列
            this.multiArray[1] = [...counties[this.multiIndex[0]].Child.map(res => res.Name)]
            this.multiIndex.splice(1, 1, 0)
            this.multiArray[2] = [...counties[this.multiIndex[0]].Child[this.multiIndex[1]].Child.map(res => res
              .Name) || []]
            this.multiIndex.splice(2, 1, 0)
            break
          case 1: //拖动第1列
            this.multiArray[2] = [...counties[this.multiIndex[0]].Child[this.multiIndex[1]].Child.map(res => res
              .Name) || []]
            this.multiIndex.splice(2, 1, 0)
            break
        }
        this.$forceUpdate()
      },
      async save() {
        if (this.ajax) return
        if (!this.userInfo.provinceId || !this.userInfo.cityId) {
          Toast('请填写地区');
          return
        }
        this.ajax = true
        Toast.loading({
          duration: 0,
          message: '信息保存中...',
          forbidClick: true,
        });
        let res = await this.$http.post('/api/v1/UserProfile/UpdateProfile', {
          nickName: this.userInfo.nickName,
          gender: this.userInfo.gender,
          birthday: this.userInfo.birthday,
          county: `${this.userInfo.provinceId},${this.userInfo.cityId},${this.userInfo.countyId}`
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        this.ajax = false
        if (res) {
          if (res.data.code === 1) {
            Toast('个人信息修改成功');
            setTimeout(() => {
              if (this.type === 'login') {
                this.$router.push('/index')
              } else {
                this.$router.go(-1)
              }
            }, 1000)
          }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .details {
    height: calc(100vh - 2.75rem);
    background-color: #F3F4F8;

    .details-1 {
      padding-top: 1.875rem;
      padding-bottom: 2.96875rem;
      text-align: center;
      background-color: #fff;

      img {
        width: 5.625rem;
        height: 5.625rem;
      }
    }

    .details-2 {
      padding: 0 .625rem;
      background-color: #fff;

      .title {
        margin-bottom: 1.5rem;
        font-size: .875rem;
        color: #6CBFFF;
      }

      .content {
        display: flex;
        flex-wrap: wrap;
        height: 3.0625rem;
        border-bottom: .0625rem solid #E5E5E5;
        line-height: 3.0625rem;
        font-size: .9375rem;

        .left {
          width: 30%;
          color: #666;
        }

        .right {
          position: relative;
          width: 70%;
          color: #333;
          text-align: right;

          .right-1 {
            padding-right: 1.25rem;

            input {
              height: 2.75rem;
              line-height: unset;
              border: unset;
              text-align: right;
            }
          }

          img {
            position: absolute;
            top: 1.1875rem;
            right: 0;
            width: .4375rem;
            height: .75rem;
          }
        }
      }

      .content:last-child {
        border-bottom: unset;
      }
    }

    .details-3 {
      position: absolute;
      bottom: .625rem;
      width: calc(100% - 1.25rem);
      height: 3.0625rem;
      border-radius: .5rem;
      margin: 0 .625rem;
      line-height: 3.0625rem;
      font-size: 1.125rem;
      font-weight: bold;
      text-align: center;
      color: #FF2342;
      background-color: #fff;
    }
  }
  .mubu{
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    .picker {
      position: absolute;
      bottom: 0;
      width: 100vw;
    }
  }
</style>