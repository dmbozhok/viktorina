<template>
	<div class="fullscreen" :style="getBg">
		<div>
			
		</div>
	</div>
</template>

<script>

	export default {
		name: "FinalScreen",
		props: ['questions','bg', 'bgMobile', 'mobile'],
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
	
</style>