<template>
	<div class="fullscreen">
        <div class="bg-part" :style="getBg"></div>
        <div class="slide-content">
			<div class="slide-title1">Ваш результат:</div>
			<div class="slide-title2"><span>{{result.title}}</span></div>
			<div class="slide-text" v-html="result.html"></div>
			<button class="btn" @click.prevent="restart">Пройти еще раз</button>
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
			restart() {
				this.$emit('restart');
			}
		}		
	}	
</script>

<style scoped>
    .slide-title1 {
        font-size: 25px;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 1.2;
        text-align: center;
    }
    .slide-title2 {
        font-size: 27px;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 1.2;
        text-align: center;
        margin-bottom: 38px;
    }
	.slide-text {
		font-size: 17px;
		font-family: "Roboto";
		color: #000000;
		line-height: 1.2;
		text-align: left;
	}
	.btn {
		background-color: #0079c2;
		margin: 30px auto 0;
		display: block;
		width: 300px;
		height: 56px;
		border: none;
		outline: 0;
		line-height: 56px;
		font-size: 20px;
		color: #ffffff;
		font-weight: bold;
		text-transform: uppercase;
		text-align: center;
		cursor: pointer;
		margin-top: 30px;
	}
	.btn span {
		-moz-transform: matrix( 1.14414414414414,0,0,1.14292177121417,0,0);
		-webkit-transform: matrix( 1.14414414414414,0,0,1.14292177121417,0,0);
		-ms-transform: matrix( 1.14414414414414,0,0,1.14292177121417,0,0);
		transform: matrix( 1.14414414414414,0,0,1.14292177121417,0,0);
	}
	@media screen and (max-width: 500px) {
		.final-slide {
			padding: 40px 20px 0;
		}
		.slide-title1 {
			font-size: 23px;
		}
		.slide-title2 {
			font-size: 25px;
		}
		.slide-text {
			font-size: 15px;
		}
		.btn {
			font-size: 18px;
		}
	}
</style>