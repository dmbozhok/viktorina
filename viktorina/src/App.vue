<template>
	<div id="app">
		<div class="container">
				<ProgressBar v-if='state == "quiz"'
					:number="stage"
					:total="questions.length"
				/>
				<transition-group name="slide" tag="div">
					<StartScreen v-if="state == 'start'"
						:bg='defaultBg'
						:bgMobile='defaultBgMobile'
						:mobile='isMobile'
						:title='title'
						@start='goToQuiz'
						key="start"
					/>
					<Question v-else-if='state == "quiz"'
						:question='currentQuestion.question'
						:answers='currentQuestion.answers'
						:correctAnswer='currentQuestion.correctAnswer'
						:correctText='currentQuestion.correctText'
						:incorrectText='currentQuestion.incorrectText'
						:answerType='currentQuestion.answerType'
						:stage='stage'
						:part='part'
						:bg='currentQuestion.bg || defaultBg'
						:bgMobile='currentQuestion.bgMobile || defaultBgMobile'
						:mobile='isMobile'
						@answer="getAnswer"
						@next="next"
						:key='stage'
					/>
					<FinalScreen v-else-if='state == "results"'
						:result='testResult'
						:mobile='isMobile'
						:bg='defaultBg'
						:bgMobile='defaultBgMobile'
						@again='restart'
						key="finish"
					/>
				</transition-group>
		</div>
	</div>
</template>

<script>
import Question from "./components/Question";
import StartScreen from "./components/StartScreen";
import FinalScreen from "./components/FinalScreen";
import ProgressBar from "./components/ProgressBar";

export default {
	name: 'app',
	components: {
		"ProgressBar":ProgressBar,
		"Question": Question,
		"StartScreen": StartScreen,
		"FinalScreen": FinalScreen
	},
	data () {
		return {
			defaultBg: 'img/pictures-1.jpg',
			defaultBgMobile: 'img/pictures_mobile-1.jpg',
			questions: [],
			resultTexts: [],
			stage: 0,
			state: 'start',
			part: "question",
			title: 'Насколько хорошо вы знаете Арктику?',
			timeout: null
		}
	},

	methods: {
		goToQuiz(){
			this.stage = 0;
			this.state = 'quiz';
		},
		getAnswer(data) {
			let object = this.questions[this.stage];
			if ( Array.isArray(data.answer) ) {
				object.userAnswer = data.answer
			} else {
				object.userAnswer.push(data.answer);
			}
			object.userAnswer.sort();
			object.correctAnswer.sort();
			this.part = "answer";
			this.timeout = setTimeout(this.next,5000);
		},
		next(){
			if(this.timeout) {
				clearTimeout(this.timeout);
				this.timeout = null;
			}
			if (this.stage == this.questions.length-1) {
				this.state = 'results'
			} else {
				this.part = "question";
				this.stage++;
			}
		},
		restart() {
			this.stage = 0;
			this.state = 'start';
			this.part = "question";
			this.questions.forEach((item) => {
				item.userAnswer.length = 0;
			})
		},
		checkAnswer(question) {
			if(Array.isArray(question.userAnswer)) {
					return question.correctAnswer.join() == question.userAnswer.join();
				} else {
					return question.correctAnswer.indexOf(question.userAnswer) !== -1;
				}
		}
	},
	computed: {
		currentQuestion: function() {
			return this.questions[this.stage] || {};
		},
		isMobile: function() {
			const isMobileVar = {
				Android: function () {
						return navigator.userAgent.match(/Android/i);
				},
				BlackBerry: function () {
						return navigator.userAgent.match(/BlackBerry/i);
				},
				iOS: function () {
						return navigator.userAgent.match(/iPhone|iPad|iPod/i);
				},
				Opera: function () {
						return navigator.userAgent.match(/Opera Mini/i);
				},
				Windows: function () {
						return navigator.userAgent.match(/IEMobile/i);
				},
				any: function () {
						return (isMobileVar.Android() || isMobileVar.BlackBerry() || isMobileVar.iOS() || isMobileVar.Opera() || isMobileVar.Windows());
				}
			};
			return isMobileVar.any();
		},
		correctAnswersCount: function() {
			return this.questions.filter(this.checkAnswer).length;
		},
		testResult: function() {
			return this.resultTexts.filter((v) => v.from <= this.correctAnswersCount && this.correctAnswersCount <= v.to)[0];
		}
	},
	created: function () {
		const testData = window.testData;
		if(typeof testData !== 'undefined') {
			if(Array.isArray(testData.questions) && testData.questions.length) {
				this.questions = testData.questions;
			}
			if(Array.isArray(testData.resultTexts) && testData.resultTexts.length) {
				this.resultTexts = testData.resultTexts;
			}
		}
	}
}
</script>

<style>
#app {
	font-family: 'Roboto', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #0079c2;
	margin-top: 0;
	width: 600px;
	max-width: 100%;
	height: 600px;
	position: relative;
}
.container {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	overflow: hidden;
	background-color: #fefefe;
}
.fullscreen {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-size: cover;
	background-repeat: no-repeat;
	z-index: 1;
}
.fullscreen > * {
	position: relative;
	z-index: 3;
}
.fullscreen::before {
	position: absolute;
	display: block;
	content: '';
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(255,255,255,0.6);
	z-index: 2;
}

.slide-leave-active,
.slide-enter-active {
	transition: 0.5s;
}
.slide-enter {
	transform: translate(100%, 0);
}
.slide-leave-to {
	transform: translate(-100%, 0);
}
a {
	color: #0079c2;
}
</style>
