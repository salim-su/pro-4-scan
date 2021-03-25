<template>

  <div class="content">
    <div class="t-bg">
      <van-tabs class="tab-style" color="#1B3897" title-active-color="#1B3897" v-model="active">
        <van-tab title="安全网格"></van-tab>
        <van-tab title="网格责任"></van-tab>
      </van-tabs>
    </div>

    <div class="body">
      <div v-show="active === 0">

        <img :src="info.path" alt="" class="imgs" v-show="info.path">

        <div class="info">

          <div class="part1 mb20">
            <div class="info-title flex align-items-center mb15">
              <div class="dot dot-1 mr10"></div>
              <div class="fs16 fw">网格位置</div>
            </div>

            <div class="info-list">
              <div class="flex mb15">
                <div class="info-list-left ABB2CA fs14  flex1">网格名称</div>
                <div class="info-list-right fs14 flex3">{{info.gridName?info.gridName:'无'}}</div>
              </div>

              <div class="flex mb15">
                <div class="info-list-left ABB2CA fs14  flex1">网格名称</div>
                <div class="info-list-right fs14 flex3">{{info.adjacentGrid?info.adjacentGrid:'无'}}</div>
              </div>
            </div>
          </div>
          <div class="part2 mb20">
            <div class="info-title flex align-items-center mb15">
              <div class="dot dot-2 mr10"></div>
              <div class="fs16 fw">网格分管领导</div>
            </div>

            <div class="info-list">
              <div class="flex mb15">
                <div class="info-list-left ABB2CA fs14  flex1">分管领导</div>
                <div class="info-list-right fs14 flex3">{{info.gridLeadership?info.gridLeadership:'无'}}</div>
              </div>

              <div class="flex mb15">
                <div class="info-list-left ABB2CA fs14  flex1">职责</div>
                <div class="info-list-right fs14 flex3">{{info.obligation?info.obligation:'无'}}</div>
              </div>
            </div>
          </div>

          <div class="part3">
            <div class="info-title flex align-items-center mb15">
              <div class="dot dot-3 mr10"></div>
              <div class="fs16 fw">区域网格员</div>
            </div>

            <div class="info-list">
              <div class="flex mb15">
                <div class="info-list-left ABB2CA fs14  flex1">姓名</div>
                <div class="info-list-right fs14 flex3">{{info.primaryGridMember?info.primaryGridMember:'无'}}</div>
              </div>

              <div class="flex mb15">
                <div class="info-list-left ABB2CA fs14  flex1">副网格员</div>
                <div class="info-list-right fs14 flex3">
                  <div class="mb5">{{info.deputyGridMember?info.deputyGridMember:'无'}}</div>
                </div>
              </div>

              <div class="flex mb15">
                <div class="info-list-left ABB2CA fs14  flex1">职责</div>
                <div class="info-list-right fs14 flex3">{{info.gridMemberObligation?info.gridMemberObligation:'无'}}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div v-if="active === 1">
        <div :key="index" v-for="(item,index) in info.gridAreaManagementGroupList" class="mb15">
          <div class="flex align-items-center mb15">
            <div class="flex1 line"></div>
            <div class="text-gradient fs18 line-title fw">{{item.managementGroupName}}</div>
            <div class="flex1 line"></div>
          </div>

          <div class="info">
            <div class="info-top flex mb15">
              <img v-if="!item.avatar" alt="" class="imgs-avtor" src="../../../static/img/no-avtor.png">
              <img v-if="item.avatar" alt="" class="imgs-avtor" :src="item.avatar">

              <div class="flex1 flex flex-column justify-content-evenly pl20">
                <div class="fs16">{{item.leaderUserName?item.leaderUserName:'-'}}</div>
                <div class="fs14 c666">
                  <span>{{item.dept}}</span>
                  <span>{{item.mobilePhoneNo}}</span>
                </div>
              </div>
            </div>

            <div class="info-center row">
              <div :key="index" class="col-1-2 info-center-item" v-for="(i,index) in item.gridAreaManagementPersonList">
                <div class="card">
                  <div class="fs14 C3997 fw mb5">{{i.job}}</div>
                  <div>{{i.chargePersonName}}</div>
                  <div>{{i.personMobilePhoneNo}}</div>
                </div>
              </div>
            </div>

            <pre class="fs14" style="white-space: pre-wrap;word-break: break-all">{{item.leaderObligation}}
          </pre>

          </div>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
  import { getgridarealist } from '../../api/user'

  export default {
    name: 'show-card',
    data() {
      return {
        active: 1,
        info: ''
      }
    },
    mounted() {
      this.getgridarealistInfo()
    },
    methods: {
      getgridarealistInfo() {
        const postData = {
          gridAreaSignManagementId: this.$route.query.id
        }
        console.log(postData)
        getgridarealist(postData).then(res => {
          this.info = res
          console.log(this.info)
        })
      }
    },
    watch: {
      $route(to, from) {
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    padding: 20px;
    background-color: #F2F4F9;
    min-height: 100vh;
  }

  .t-bg {
    height: 148px;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    padding-left: 20px;
    padding-right: 20px;
    background-image: url('../../../static/img/t-bg.png');
    background-size: cover;
  }

  .body {
    padding-top: 155px;
  }

  .tab-style {
    margin-top: 105px;
  }

  .imgs {
    width: 100%;
    height: auto;
    box-shadow: #dddddd 0px 0px 6px;
    margin-bottom: 20px;
  }

  .imgs-avtor {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: #dddddd 0px 0px 6px;
  }

  .info {
    width: 100%;
    padding: 15px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: #dddddd 0px 0px 6px;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  .dot-1 {
    background-color: #FF2764;
    box-shadow: 0px 0px 3px 0px #FF2764;
  }

  .dot-2 {
    background-color: #5492EF;
    box-shadow: 0px 0px 3px 0px #5492EF;
  }

  .dot-3 {
    background-color: #FF6C00;
    box-shadow: 0px 0px 3px 0px #FF6C00;
  }

  .ABB2CA {
    color: #ABB2CA;
  }

  .C3997 {
    color: #1C3997;
  }

  .text-gradient {
    display: inline-block;
    color: blue;
    font-family: '微软雅黑';
    background-image: linear-gradient(to right, #5A9CED, #0a3f7b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /*font-style: italic;*/
    transform: skewX(-5deg);
  }

  .line {
    height: 1px;
    background-color: #D5DAEB;
  }

  .line-title {
    width: 100px;
    text-align: center;
  }

  .info-center-item {
    width: 1005px;
  }

  .card {
    padding: 10px;
    width: 100%;
    background-color: #EAF0FA;
    border-radius: 5px;
    height: 70px;
    margin-bottom: 10px;
  }

  .col-1-2:nth-child(2n+1) {
    padding-right: 7.5px !important;
  }

  .col-1-2:nth-child(2n) {
    padding-left: 7.5px !important;
  }
</style>
