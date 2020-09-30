<template>
	<transition enter-active-class="flipInX">
		<div class='row justify-content-center' :key='stage'>
			<div class="col col-lg-4 ">
				<div class="progress">
				  <div class="progress-bar" role="progressbar" :style='questionStage' ref='progressbar'></div>
				</div>
				<div class="label-name">{{question}}</div>
				<hr>
				<div class="question-item">
					<div v-for='(item, index) in answers'>
						<input :type='answerType'
							   :key='index'
							   name='question'
							   v-model='userAnswer'
							   :value='item'
							   :id="item"
							   :placeholder='item'
						>
						<label :for="item" >{{item}}</label>
					</div>	
				</div>
				<hr>
				<button  class="btn btn-success"
				type="button"
				:class="btnClass"
				@click.prevent='sendUserData'
				ref="nextQuestionBtn"
				>Далее</button>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		props: ['question', 'answers', 'answerType', 'stage', 'questionsLength'],
		data() {
			return {
				userAnswer: [],
				animation: false,

			}
		},
		computed: {
			btnClass(){
				return this.userAnswer.length ? '' : 'disabled'
			},
			questionStage () {
				let progress = (this.stage / this.questionsLength) * 100;
				return `width:${progress}%`
			},
		},
		methods: {
			sendUserData(e) {
				if (e.target.classList.contains('disabled')) return;

				this.$emit('answer', {answer: this.userAnswer})
				this.userAnswer = [];
			}
		},
		updated() {
			console.log(1);
		}
		
	} 
	
</script>

<style scoped>
	.question-item {
		text-align: left;
	}
	input[type='text'] {
		display:block;
		margin: 0 auto;
		margin-bottom: 10px;
	}
	input[type='text'] ~ label {
		display:none;
	}

@-webkit-keyframes flipInX {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

@keyframes flipInX {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

.flipInX {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInX;
  animation-name: flipInX;
 -webkit- animation-duration: .8s;
  animation-duration: .8s;
}
	
</style>