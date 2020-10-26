<template>
    <div class="recommendPage">
        <swiper class="mySwiper" :options="swiperOption" ref="mySwiper">
            <!--<swiper-slide>I'm Slide 1</swiper-slide>-->
            <!--<swiper-slide>I'm Slide 2</swiper-slide>-->
            <!--<swiper-slide>I'm Slide 3</swiper-slide>-->
            <swiper-slide v-for="(item, index) in listImg" :key="index">
                <img :src="item" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>

        <swiper class="bottomSwiper" :options="swiperOption2" ref="bottomSwiper">
            <swiper-slide v-for="(item, index) in listImg" :key="index">
                <img :src="item" />
            </swiper-slide>
            <!--<swiper-slide>I'm Slide 1</swiper-slide>-->
            <!--<swiper-slide>I'm Slide 2</swiper-slide>-->
            <!--<swiper-slide>I'm Slide 3</swiper-slide>-->
        </swiper>
    </div>
</template>

<script>
    // 引入插件
    import { swiper, swiperSlide } from "vue-awesome-swiper";
    import "swiper/dist/css/swiper.css";

    export default {
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                isInit: 1,
                listImg: [
                    'https://ftp.bmp.ovh/imgs/2020/10/39899d67391f9d3e.jpg',
                    'https://ftp.bmp.ovh/imgs/2020/10/bcfea7c3887a0aeb.jpg',
                    'https://cn.bing.com/th?id=OHR.BCPumpkins_ZH-CN7878617476_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                ],
                swiperOption: {
                    loop: true,
                    spaceBetween: 10,
                    loopedSlides: 3,
                    // autoplay: {
                    //     delay: 3000,
                    //     stopOnLastSlide: false,
                    //     disableOnInteraction: false
                    // },
                    // 显示分页
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true //允许分页点击跳转
                    },
                    // 设置点击箭头
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }
                },
                swiperOption2: {
                    loop: true,
                    loopedSlides: 3, // looped slides should be the same
                    spaceBetween: 10,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    slideToClickedSlide: true,
                    // autoplay: {
                    //     delay: 3000,
                    //     stopOnLastSlide: false,
                    //     disableOnInteraction: false
                    // }
                }
            };
        },
        // computed: {
        //     swiper() {
        //         this.swiperOption2 = {
        //             loop: true,
        //             spaceBetween: 10,
        //             controller: {
        //                 control: this.$refs.mySwiper.swiper,
        //             }
        //         };
        //         console.log('this.$refs.mySwiper.swiper: ', this.$refs.mySwiper.swiper);
        //         return this.$refs.mySwiper.swiper;
        //     }
        // },
        updated() {
            const mySwiper = this.$refs.mySwiper.swiper
            const bottomSwiper = this.$refs.bottomSwiper.swiper
            mySwiper.controller.control = bottomSwiper
            bottomSwiper.controller.control = mySwiper
        },
        mounted() {
            // current swiper instance
            // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
            // console.log("this is current swiper instance object", this.swiper);
            // this.mainSwiper = this.swiper;
            // this.swiper.slideTo(3, 1000, false);
            const mySwiper = this.$refs.mySwiper.swiper
            const bottomSwiper = this.$refs.bottomSwiper.swiper
            mySwiper.controller.control = bottomSwiper
            bottomSwiper.controller.control = mySwiper

            console.log('this.$refs.mySwiper.swiper: ', this.$refs.mySwiper.swiper);
            console.log('this.$refs.bottomSwiper.swiper: ', this.$refs.bottomSwiper.swiper);
        }
    };
</script>
<style scoped >
    .recommendPage {
        width: 700px;
        height: 300px;
    }

    .recommendPage .mySwiper {
        height: 80%;
        width: 100%;
    }
    .recommendPage .mySwiper .swiper-slide{
         width: 100%;
         line-height: 200px;
         background: yellowgreen;
         color: #000;
         font-size: 16px;
         text-align: center;
     }

    .recommendPage .mySwiper .swiper-slide img {
        height: 100%;
        width: auto;
    }

    .recommendPage .bottomSwiper {
         height: 100px;
         box-sizing: border-box;
     }
    .recommendPage .bottomSwiper .swiper-slide {
         width: 25%;
         height: 100%;
         opacity: 0.4;
     }
    .recommendPage .bottomSwiper .swiper-slide img {
        height: 100%;
        width: auto;
    }
    .recommendPage .bottomSwiper .swiper-slide-active {
         opacity: 1;
     }
</style>