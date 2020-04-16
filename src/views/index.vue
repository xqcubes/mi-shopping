<template>
  <div class="index">
    <div class="container">

      <div class="swiper-box">
        <div class="nav-menu">

          <ul class="menu-list">
            <li
              v-for="(item,index) in navList"
              :key="index"
            >
              <a href="javascript:;">{{ item.name }}</a>
              <div class="children">
                <ul
                  v-for="(item1,index1) in navList[index].children"
                  :key="index1"
                >
                  <li
                    v-for="(item2,index2) in item1"
                    :key="index2"
                  >
                    <a>
                      <img :src="item2.img">
                      <span>{{ item2.name }}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

          </ul>

        </div>

        <swiper
          ref="mySwiper"
          :options="swiperOptions"
          class="my-swiper"
        >
          <swiper-slide
            v-for="(slider,index) in sliderList"
            :key="index"
          >
            <a :href="'/product:'+slider.id">
              <img :src="slider.img">
            </a>
          </swiper-slide>

          <div
            slot="pagination"
            class="swiper-pagination"
          />
          <!-- 左右箭头 -->
          <div
            slot="button-prev"
            class="swiper-button-prev"
          />
          <div
            slot="button-next"
            class="swiper-button-next"
          />
        </swiper>
      </div>
      <div class="ads-box">
        <div class="container">
          <a
            v-for="ad in adsData"
            :key="ad.id"
            href="javascript:;"
          >
            <img v-lazy="ad.img">
          </a>

        </div>
      </div>
      <div class="banner">
        <div class="container">
          <a><img v-lazy="'imgs/banner-1.png'"></a>
        </div>
      </div>

    </div>
    <div class="product-box">
      <div class="container">
        <div class="title">
          <span class="title-content">手机</span>
          <a class="more">
            <span>查看全部</span>
          </a>
        </div>
        <div class="wrapper clearfix">
          <div class="banner-left fl">
            <a>
              <img v-lazy="'/imgs/mix-alpha.jpg'">
            </a>
          </div>
          <div class="list-box fl">
            <ul>
              <li
                v-for="product in productData"
                :key="product.id"
                class="list-item fl"
              >
                <a>
                  <span class="pro">新品</span>
                  <img v-lazy="product.mainImage">
                  <div class="name">{{ product.name }}</div>
                  <div class="info">{{ product.subtitle }} </div>
                  <div class="price">{{ product.price }}元</div>
                </a>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { getProduct } from '@/api'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      headerData: [],
      // 轮播图数据
      sliderList: [
        {
          id: 42,
          img: '/imgs/slider/slide-1.jpg'
        },
        {
          id: 45,
          img: '/imgs/slider/slide-2.jpg'
        },
        {
          id: 46,
          img: '/imgs/slider/slide-3.jpg'
        }
      ],
      // 轮播图配置项
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 2000,
          // 当用户滑动图片后继续自动轮播
          disableOnInteraction: false
        },

        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }

        // Some Swiper option/callback...
      },
      // 导航面板数据
      navList: [
        {
          id: 1,
          name: '手机 电话卡',
          children: [
            [
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ],
            [
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ],
            [
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ],
            [
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ],
            [
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ],
            [
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ]
          ]
        },
        {
          id: 2,
          name: '电视 盒子',
          children: [
            [
              { img: '/imgs/item-box-1.png', name: '2小米CC9' },
              { img: '/imgs/item-box-2.png', name: '2 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '2小米CC9' },
              { img: '/imgs/item-box-2.png', name: '2小米CC9' }
            ],
            [
              { img: '/imgs/item-box-1.png', name: '2小米CC9' },
              { img: '/imgs/item-box-2.png', name: '2 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '2小米CC9' },
              { img: '/imgs/item-box-2.png', name: '2小米CC9' }
            ],
            [
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ],
            [
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ],
            [
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ],
            [
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ]
          ]
        },
        {
          id: 3,
          name: '笔记本 显示器 平板',
          children: [
            [
              { img: '/imgs/item-box-1.png', name: '3小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ],
            [
              { img: '/imgs/item-box-1.png', name: '3小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ],
            [
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ],
            [
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ],
            [
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ],
            [
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ]
          ]
        },
        {
          id: 4,
          name: '家电 插线板',
          children: [
            [
              { img: '/imgs/item-box-1.png', name: '4小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ],
            [
              { img: '/imgs/item-box-1.png', name: '4小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ],
            [
              { img: '/imgs/item-box-1.png', name: '4小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ],
            [
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ],
            [
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ],
            [
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ]
          ]
        },
        {
          id: 5,
          name: '出行穿戴 只能路由器',
          children: [
            [
              { img: '/imgs/item-box-1.png', name: '5小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ],
            [
              { img: '/imgs/item-box-1.png', name: '5小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ],
            [
              { img: '/imgs/item-box-1.png', name: '5小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ],
            [
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ],
            [
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ],
            [
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: ' 小米8青春版 ' },
              { img: '/imgs/item-box-1.png', name: '小米CC9' },
              { img: '/imgs/item-box-2.png', name: '小米CC9' }
            ]
          ]
        }
      ],
      // 广告数据
      adsData: [
        { id: 1, href: '', img: '/imgs/ads/ads-1.png' },
        { id: 2, href: '', img: '/imgs/ads/ads-2.jpg' },
        { id: 3, href: '', img: '/imgs/ads/ads-3.png' },
        { id: 4, href: '', img: '/imgs/ads/ads-4.jpg' }
      ],
      // 产品数据
      productData: []
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  async mounted() {
    this.swiper.slideTo(3, 1000, false)
    this.getIndexProduct()
  },
  methods: {
    async getIndexProduct() {
      var data = await getProduct({ categoryId: 100012, pageSize: 8 })
      this.productData = data.list
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/style/config.styl';
@import '../assets/style/mixin.styl';

.index {
  .swiper-box {
    height: 450px;
    position: relative;

    .nav-menu {
      position: absolute;
      z-index: 9;
      height: 100%;

      .menu-list {
        width: 264px;
        padding: 26px 0;
        height: 100%;
        box-sizing: border-box;
        background: rgba(85, 88, 90, 0.6);
        color: #fff;

        &>li {
          height: 50px;
          line-height: 50px;
          font-size: 16px;

          &:hover {
            background-color: rgba(255, 102, 0, 1);

            .children {
              display: block;
            }
          }

          &>a {
            display: inline-block;
            width: 100%;
            height: 100%;
            padding: 0 30px;
            background: url('/imgs/icon-arrow.png') no-repeat 220px 17px;
            background-size: 10px 15px;
            box-sizing: border-box;
            color: #fff;
          }

          .children {
            display: none;
            position: absolute;
            left: 264px;
            width: 962px;
            top: 0;
            height: 450px;
            background-color: #fff;
            font-size: 14px;

            ul {
              float: left;

              li {
                float: left;
                display: inline-block;
                width: 240.5px;
                height: 76px;
                line-height: 76px;
                box-sizing: border-box;
                padding: 5px 10px;

                a {
                  display: block;
                  width: 100%;
                  height: 100%;

                  &:hover {
                    color: $B;
                  }

                  img {
                    height: 42px;
                    vertical-align: middle;
                    margin-right: 5px;
                  }
                }
              }
            }
          }
        }
      }
    }

    .my-swiper {
      height: 450px;

      .swiper-button-prev {
        left: 274px;
      }

      a {
        img {
          width: 100%;
          height: 450px;
        }
      }
    }
  }

  .ads-box {
    margin: 15px 0;

    a {
      display: inline-block;
      margin-right: 14px;
      width: 296px;
      height: 167px;

      &:last-child {
        margin-right: 0;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .banner {
    margin-bottom: 50px;

    a {
      display: block;

      img {
        width: 100%;
        height: 130px;
      }
    }
  }

  .product-box {
    background: rgba(245, 245, 245, 1);

    .title {
      height: 60px;

      .title-content {
        float: left;
        font-size: 22px;
        color: #333333;
        font-family: FZLanTingHeiS-R-GB;
        font-weight: bold;
      }

      .more {
        float: right;
        font-size: 16px;
        color: #424242;

        &:after {
          content: '>';
          margin-left: 8px;
          display: inline-block;
          width: 24px;
          height: 24px;
          background-color: #B0B0B0;
          border-radius: 50%;
          text-align: center;
          line-height: 24px;
          color: #fff;
        }

        &:hover {
          color: $B;

          &:after {
            background-color: $B;
          }
        }
      }
    }

    .wrapper {
      .banner-left {
        img {
          width: 224px;
          height: 619px;
        }
      }

      .list-box {
        width: 1002px;

        .list-item {
          margin-left: 14px;
          margin-bottom: 14px;

          a {
            width: 236px;
            height: 302px;
            box-sizing: border-box;
            background-color: #fff;
            display: block;
            text-align: center;

            .pro {
              display: inline-block;
              height: 24px;
              line-height: 24px;
              font-size: 14px;
              padding: 0 30px;
              background: #7ECF68;
              color: #fff;
            }

            .pro-new {
              background: #7ECF68;
            }

            .pro-kill {
              background: #E82626;
            }

            img {
              width: 236px;
              height: 195px;
              display: block;
            }

            .name {
              font-size: 14px;
              color: #333333;
              margin-bottom: 8px;
            }

            .info {
              font-size: 12px;
              color: #999999;
              margin-bottom: 6px;
            }

            .price {
              font-size: 14px;
              color: #F20A0A;
            }
          }
        }
      }
    }
  }
}
</style>
