<template>
	<div>
		<div class="row">
			<div class='col'>
				{{howManyCorrect}}
				<div class="progress">
				  <div class="progress-bar" role="progressbar" :style='progressWidth'>
				  	
				  </div>
				</div>
				
				<hr>
				<div v-for='(item,i) in questions'
				>
					<div class="row answer" :class='questionClass(i)' :key='i'>
						<div class="col"> №{{i+1}} {{item.question}}</div>
						<div class="col">Ваш ответ: {{ extractAnswers(item.userAnswer) }}</div>
						<div class="col">Правильный ответ: {{ extractAnswers(item.correctAnswer) }}</div>
						
					</div>
				</div>
			</div>
		</div>
		<div class="row ">
			<div class="col justify-content-center">
				<button class="btn btn-success"
					@click='again'
				>Заново</button>
			</div>
		</div>	
	</div>
</template>

<script>
	export default {
		props: ['questions'],
		data() {
			return {
				isCorrectClass: [],


			}
		},
		computed: {
			progressWidth(){
				let correct = 0;
				let width = 0;
				let that = this;
				this.questions.forEach( (item, index) => {
					if (that.arraysEqual(String.prototype.toUpperCase.call(item.correctAnswer),String.prototype.toUpperCase.call(item.userAnswer)) ) {
						correct++;
						this.$set(this.isCorrectClass, index, true)
					} else this.$set(this.isCorrectClass, index, false)
				})
				width = (correct / this.questions.length ) *100;
				return `width:${width}%`
			},
			howManyCorrect() {
				let correct = 0;
				this.isCorrectClass.forEach( (item) => {
					item ? correct++ : '';
				})
				return `Вы ответили правильно на ${correct} из ${this.isCorrectClass.length} вопросов`;
			}


		},
		methods: {
			questionClass(i) {
				return this.isCorrectClass[i] ? 'text-success' : 'text-danger'
			},
			again() {
				this.$emit('again');
			},
			extractAnswers(arr) {
				return arr.join(', ');
			}

		},
		
		
	}	
</script>

<style scoped>
	.row.answer {
		text-align: left;
	}
</style>