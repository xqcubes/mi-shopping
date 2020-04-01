<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <ul class="topbar-menu fl">
          <li class="fl">
            <a href="javascript:;">松果出行</a>
          </li>
          <li class="fl">
            <a href="javascript:;">MIUI</a>
          </li>
          <li class="fl">
            <a href="javascript:;">云服务</a>
          </li>
          <li class="fl">
            <a href="javascript:;">协议规则</a>
          </li>
        </ul>
        <ul class="top-user fr">
          <li class="fr">
            <a
              class="user-cart"
              href="javascript:;"
            >购物车(0)</a>
          </li>
          <li class="fr">
            <a href="javascript:;">注册</a>
          </li>
          <li class="fr">
            <a href="javascript:;">登录</a>
          </li>

        </ul>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="javascript:;"></a>
        </div>
        <div class="header-menu">
          <div class="header-menu-item">
            <a>小米手机</a>
            <ul class="children">
              <li class="product">
                <a>
                  <img
                    class="pro-img"
                    src="/imgs/nav-img/nav-1.png"
                  >
                  <span class="pro-name">小米CC9</span>
                  <span class="pro-price">￥1779.00元</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="header-menu-item">
            <a>RedMi红米</a>
            <ul class="header-submenu">
              <li>
                <a></a>
              </li>
            </ul>
          </div>
          <div class="header-menu-item">
            <a>电视</a>
            <ul class="header-submenu">
              <li>
                <a></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="header-search"></div>
      </div>
    </div>
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
      line-height: 39px;

      a {
        height: 100%;
        display: inline-block;
      }

      .topbar-menu {
        height: inherit;

        li {
          height: inherit;
          margin-right: 10px;
        }
      }

      .top-user {
        height: inherit;

        li {
          height: inherit;
          margin-left: 10px;

          .user-cart {
            padding-left: 20px;
            background: url('/imgs/icon-cart.png') no-repeat left center;
            background-size: 16px 12px;

            &:hover {
              background: url('/imgs/icon-cart-hover.png') no-repeat left center;
              background-size: 16px 12px;
            }
          }
        }
      }
    }
  }

  .nav-header {
    .container {
      position: relative;
      height: 112px;

      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        position: absolute;
        top: 50%;
        margin-top: -23px;

        a {
          display: inline-block;
          width: 55px;
          height: 55px;
          background: url('/imgs/mi-logo.png') no-repeat center $B;

          // transition: 0.2s;
          &:hover {
            background: url('/imgs/mi-home.png') no-repeat center $B;
          }
        }
      }

      .header-menu {
        position: absolute;
        top: 50%;
        left: 200px;
        height: 30px;
        line-height: 30px;
        margin-top: -15px;

        .header-menu-item {
          display: inline-block;
          margin-right: 20px;
          color: $A;
          font-weight: bold;
          font-size: 16px;
        }
      }

      .header-search {
        width: 300px;
        height: 50px;
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -25px;
        border: 1px solid #000;
      }
    }
  }
}
</style>
