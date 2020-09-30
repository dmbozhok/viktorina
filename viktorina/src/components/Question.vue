<template>
	<transition-group name="slide" class="fullscreen question-slide" :key='stage' :style="getBg" tag="div">
		<div class="question-part" v-show="part == 'question'" key="part__question">
			<div class="question-header">{{question}}</div>
			<div class="question-items">
				<div v-for='(item, index) in answers' :key="index" class="answer-item">
					<input :type='answerType'
						:key='index'
						name='question'
						v-model='userAnswer'
						:value='item'
						:id="item"
						:placeholder='item'
						@change.prevent="sendUserData"
					>
					<label :for="item"><div class="num">{{index + 1}}</div><div class="question-text">{{item}}</div></label>
				</div>	
			</div>
		</div>
		<div class="answer-part" v-show="part == 'answer'" key="part__answer">
			<div class="answer-header">{{answerHeader}}</div>
			<div class="answer-text">{{answerText}}</div>
			<div class="btn-container">
				<button class="btn"
					@click.prevent="goNext"
				><span>Далее</span></button>
			</div>
		</div>
	</transition-group>
</template>

<script>
	export default {
		name: "Question",
		props: ['question', 'answers', 'answerType', 'stage', 'bg', 'bgMobile', 'mobile', 'part','correctAnswer','incorrectText','correctText'],
		data() {
			return {
				userAnswer: [],
				animation: false
			}
		},
		computed: {
			getBg: function(){
				const addr = (this.mobile) ? this.bgMobile : this.bg;
				return {
					'background-image': `url(${addr})`
				}
			},
			answerHeader: function () {
				return (this.isCorrectAnswer())? 'Верный ответ':'Неверный ответ'
			},
			answerText: function () {
				return (this.isCorrectAnswer())? this.correctText : this.incorrectText;
			}
		},
		methods: {
			sendUserData(e) {
				this.$emit('answer', {answer: this.userAnswer});
			},
			goNext() {
				this.$emit('next', {});
			},
			isCorrectAnswer() {
				if(Array.isArray(this.userAnswer)) {
					return this.correctAnswer.join() == this.userAnswer.join();
				} else {
					return this.correctAnswer.indexOf(this.userAnswer) !== -1;
				}
			}
		},
		updated() {
		}
		
	} 
	
</script>

<style scoped>
	.question-part {
		text-align: left;
		padding: 67px 65px 0;
		position: absolute;
		top:0;
		left: 0;
		right: 0;
	}
	.question-header {
		font-size: 18px;
		font-weight: bold;
		line-height: 1.2;
		text-align: left;
		margin-bottom: 25px;
	}
	.answer-item {
		margin-bottom: 16px;
	}
	.answer-item:last-child {
		margin-bottom: 0;
	}
	input {
		display: none;
	}
	label {
		display: flex;
		align-items: center;
        cursor: pointer;
	}
	label .num {
		width: 30px;
		height: 30px;
		flex: 0 0 30px;
		border-radius: 50%;
		border: 1px solid #0079c2;
		font-size: 18px;
		text-align: center;
		line-height: 30px;
		margin-right: 13px;
		align-self: start;
	}
	label .question-text {
		font-size: 16px;
		color: #000000;
  		line-height: 1.2;
	}
	.answer-part {
		margin: 67px 65px 0;
		text-align: center;
		position: absolute;
		top:0;
		left: 0;
		right: 0;
	}
	.answer-header {
		font-size: 23px;
		font-weight: bold;
		text-transform: uppercase;
		line-height: 1.2;
		margin-bottom: 25px;
	}
	.answer-text {
		font-size: 18px;
		color: #000000;
		line-height: 1.2;
		margin-bottom: 25px;
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
        font-size: 18px;
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
</style>