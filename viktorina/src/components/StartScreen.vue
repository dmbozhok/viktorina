<template>
    <div class="fullscreen" :style="getBg">
        <div class="slide-title"><span>{{title}}</span></div>
        <button
            class="btn"
            @click.prevent="start"
            ><span>Начать тест</span></button>
    </div>
</template>

<script>
export default {
    name: "StartScreen",
    props: ['bg', 'bgMobile', 'mobile','title'],
    data() {
        return {

        }
    },
    methods: {
        start: function start() {
            this.$emit('start');
        }
    },
    computed: {
        getBg: function(){
            const addr = (this.mobile) ? this.bgMobile : this.bg;
            return {
                'background-image': `url(${addr})`
            }
        }
    }
}
</script>

<style scoped>
    .slide-title {
        font-size: 30px;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 1.2;
        text-align: center;
        margin: 65px auto 38px;
    }
    .slide-title span {
        -moz-transform: matrix( 1.22381787295158,0,0,1.22381787295158,0,0);
        -webkit-transform: matrix( 1.22381787295158,0,0,1.22381787295158,0,0);
        -ms-transform: matrix( 1.22381787295158,0,0,1.22381787295158,0,0);
        transform: matrix( 1.22381787295158,0,0,1.22381787295158,0,0);
    }
    .btn {
        background-color: #0079c2;
        margin: 0 auto;
        display: block;
        width: 200px;
        height: 56px;
        border: none;
        outline: 0;
        line-height: 56px;
        font-size: 20px;
        font-family: "Roboto";
        color: #ffffff;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        cursor: pointer;
    }
    .btn span {
        -moz-transform: matrix( 1.14414414414414,0,0,1.14292177121417,0,0);
        -webkit-transform: matrix( 1.14414414414414,0,0,1.14292177121417,0,0);
        -ms-transform: matrix( 1.14414414414414,0,0,1.14292177121417,0,0);
        transform: matrix( 1.14414414414414,0,0,1.14292177121417,0,0);
    }
	@media screen and (max-width: 500px) {
        .slide-title {
            font-size: 28px;
        }
        .btn {
            font-size: 18px;
        }
    }
</style>