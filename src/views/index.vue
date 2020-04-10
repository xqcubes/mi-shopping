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
    </div>

  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
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
      ]
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  async mounted() {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  },
  methods: {}
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
          }

          .children {
            display: block;
            position: absolute;
            left: 264px;
            top: 0;
            height: 450px;
            background-color: #fff;
            font-size: 14px;

            ul {
              overflow: hidden;

              li {
                display: inline-block;
                width: 240.5px;
                height: 76px;
                line-height: 76px;
                box-sizing: border-box;
                padding: 5px 10px;
                float: left;

                a {
                  display: block;
                  width: 100%;
                  height: 100%;

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
}
</style>
