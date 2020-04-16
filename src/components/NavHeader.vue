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
          <a
            id="qq"
            href="javascript:;"
          />
        </div>
        <div class="header-menu">
          <div class="header-menu-item">
            <a>小米手机</a>

            <ul class="children">
              <li
                v-for="(product,index) in headerData"
                :key="index"
                class="product"
              >
                <a>
                  <img
                    class="pro-img"
                    :src="product.mainImage"
                  >
                  <div class="pro-name">{{ product.name }}</div>
                  <div class="pro-price">￥{{ product.price | priceFilter }} 元</div>
                </a>
              </li>

            </ul>
          </div>
          <div class="header-menu-item">
            <a>RedMi红米</a>
            <ul class="header-submenu">
              <li>
                <a />
              </li>
            </ul>
          </div>
          <div class="header-menu-item">
            <a>电视</a>
            <ul class="header-submenu">
              <li>
                <a />
              </li>
            </ul>
          </div>
        </div>
        <div class="header-search">
          <input class="search-input">
          <span class="search-btn" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProduct } from '@/api'
export default {
  name: 'NavHeader',
  filters: {
    priceFilter(v) {
      return v.toFixed(2)
    }
  },
  data() {
    return {
      headerData: []
    }
  },
  async mounted() {
    this.getHeaderData()
  },
  methods: {
    async getHeaderData() {
      var headerData = await getProduct({
        categoryId: '100012',
        pageSize: 6
      })
      this.headerData = headerData.list
    }
  }
}
</script>

<style lang="stylus" >
@import '../assets/style/config.styl';
@import '../assets/style/mixin.styl';

.header {
  .nav-topbar {
    background-color: $A;

    .container {
      height: 39px;
      line-height: 39px;

      a {
        height: 100%;
        display: inline-block;

        &:hover {
          color: $B;
        }
      }

      .topbar-menu {
        height: inherit;

        li {
          margin-right: 10px;
        }
      }

      .top-user {
        li {
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
        background: $B;
        overflow: hidden;

        a {
          display: inline-block;
          width: 110px;
          height: 55px;

          &:before {
            display: inline-block;
            content: '';
            width: 55px;
            height: 55px;
            background: url('/imgs/mi-logo.png') no-repeat center;
            transition: margin 0.2s;
          }

          &:after {
            display: inline-block;
            content: '';
            width: 55px;
            height: 55px;
            background: url('/imgs/mi-home.png') no-repeat center;
          }

          &:hover:before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }

      .header-menu {
        float: left;
        margin-left: 200px;
        height: 100%;

        .header-menu-item {
          display: inline-block;
          padding: 41px 10px;
          margin-right: 20px;
          color: $A;
          font-weight: bold;
          font-size: 16px;

          &>a {
            display: inline-block;
            height: 30px;
            line-height: 30px;
          }

          &>a:hover {
            color: $B;
          }

          &:hover>a+ul {
            height: 220px;
            transition: height 0.4s;
          }

          .children {
            transition: height 0.4s;
            position: absolute;
            width: 1226px;
            height: 0;
            left: 0;
            top: 112px;
            overflow: hidden;
            z-index: 10;
            background: #fff;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);

            // border: 1px solid #000;
            .product {
              width: 16.6%;
              float: left;
              height: 100%;
              box-sizing: border-box;
              padding-top: 26px;
              padding-bottom: 14px;

              &:last-child>a:after {
                border: none;
              }

              a {
                display: block;
                text-align: center;
                padding: 0 10px;
                height: 100%;
                position: relative;
                font-size: 12px;

                &:after {
                  content: ' ';
                  display: block;
                  border-left: 1px solid #D7D7D7;
                  height: 93px;
                  position: absolute;
                  right: 0;
                  top: 0;
                }

                .pro-img {
                  height: 112px;
                }

                .pro-name {
                  margin: 5px 0;
                }

                .pro-price {
                  color: $B;
                }
              }
            }
          }
        }
      }

      .header-search {
        width: 300px;
        height: 50px;
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -25px;
        border: 1px solid #E0E0E0;

        .search-input {
          width: 224px;
          height: 50px;
          padding-left: 20px;
          line-height: 50px;
          float: left;
        }

        .search-btn {
          display: inline-block;
          bgImg('/imgs/icon-search.png', 55px, 50px, 18px);
          border-left: 1px solid #E0E0E0;

          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
