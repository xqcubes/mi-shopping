<template>
  <div class="footer">
    <div class="logo">
      <a>
        <span />
        <p>小米商城</p>
      </a>
    </div>
    <div class="footer-link">
      <div><a>小米商城主页</a></div>
      <div><a>Vue全栈课程</a></div>
      <div><a>React</a></div>
      <div><a>微信小程序</a></div>
      <div><a>小米商城主页</a></div>

    </div>
    <div class="copy">
      Copyright ©2019 <span class="domain">mi.futurefe.com</span> All Rights Reserved.
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavFooter'
}
</script>

<style lang="stylus" scoped>
@import '../assets/style/config.styl';
@import '../assets/style/mixin.styl';

.footer {
  background: $A;
  height: 234px;
  border-top: 4px solid #FF7301;
  text-align: center;
  font-size: 16px;
  color: #999999;

  .logo {
    margin-top: 46px;

    a {
      display: inline-block;

      span {
        display: inline-block;
        bgImg('/imgs/logo-footer.png', 53px, 36px);
        margin-bottom: 13px;
      }
    }
  }

  .footer-link {
    div {
      display: inline-block;

      a {
        position: relative;
        margin-right: 15px;

        &:after {
          content: '';
          border-right: 1px solid #999999;
          position: absolute;
          right: -10px;
          height: 100%;
          top: 0;
        }
      }

      &:last-child >a:after {
        border-right: none;
        margin-right: 0;
      }
    }
  }

  .copy {
    margin-top: 20px;

    .domain {
      color: $B;
    }
  }
}
</style>
