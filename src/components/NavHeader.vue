<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <ul class="topbar-menu fl">
          <li class="fl">
            <a href="javascript;">松果出行</a>
          </li>
          <li class="fl">
            <a href="javascript;">MIUI</a>
          </li>
          <li class="fl">
            <a href="javascript;">云服务</a>
          </li>
          <li class="fl">
            <a href="javascript;">协议规则</a>
          </li>
        </ul>
        <ul class="top-user">
          <li>
            <a href="javascript;"></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav-headaer"></div>
  </div>
</template>

<script>
export default {
  name: 'nav-header'
}
</script>

<style lang="stylus">
@import '../assets/style/config.styl';

.header {
  .nav-topbar {
    background-color: $A;

    .container {
      height: 39px;

      .topbar-menu {
        li {
          line-height: 39px;
          height: 39px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
