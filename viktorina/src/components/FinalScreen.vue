<template>
	<div class="fullscreen" :style="getBg">
		<div class="final-slide">
			<div class="slide-title"><span>{{result.title}}</span></div>
			<div class="slide-text" v-html="result.html"></div>
		</div>
	</div>
</template>

<script>

	export default {
		name: "FinalScreen",
		props: ['result','bg', 'bgMobile', 'mobile'],
		data() {
			return {
				isCorrectClass: [],
			}
		},
		computed: {
			getBg: function(){
				const addr = (this.mobile) ? this.bgMobile : this.bg;
				return {
					'background-image': `url(${addr})`
				}
			}
		},
		methods: {

		}		
	}	
</script>

<style scoped>
	.final-slide {
		text-align: left;
		padding: 67px 65px 0;
		position: absolute;
		top:0;
		left: 0;
		right: 0;
	}
    .slide-title {
        font-size: 23px;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 1.2;
        text-align: center;
        margin-bottom: 38px;
    }
	.slide-text {
		font-size: 15px;
		font-family: "Roboto";
		color: #000000;
		line-height: 1.2;
		text-align: left;
	}
</style>