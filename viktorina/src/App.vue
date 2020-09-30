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
						:questions='questions'
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
			questions: [
				{
					question: 'Название «Арктика» переводится с греческого «медведица». Это произошло из-за того, что ...',
					answers: ['Это традиционное место обитания белых медведей.','Древние греки верили, что где-то во льды севера Зевс заточил медведя-титана Арктиотопос. Когда он прогрызет лед, то поднимется на поверхность и съест солнце и тогда наступит конец света.','Арктика находится под созвездием Большой Медведицы.'],
					answerType: 'radio',
					correctAnswer: ['Арктика находится под созвездием Большой Медведицы.'],
					userAnswer: [],
					correctText: 'Вы совершенно правы! Белые медведи и древнегреческие легенды тут ни при чем',
					incorrectText: 'Чуть-чуть промахнулись! На самом деле Арктика находится под созвездием Большой Медведицы',
					bg: 'img/pictures-1.jpg',
					bgMobile: 'img/pictures_mobile-1.jpg',
				},
		{
					question: 'Если стоять на Северном полюсе, в каком часовом поясе вы будете находиться?',
					answers: ['В часовом поясе страны, из которой вы прибыли.','Ни в каком.','Во всех одновременно.'],
					answerType: 'radio',
					correctAnswer: ['Во всех одновременно.'],
					userAnswer: [],
					correctText: 'Верно! На Северном полюсе меридианы сходятся в одной точке, поэтому понятие часовых поясов там теряет смысл.',
					incorrectText: 'Неправильно! Во всех одновременно, потому что на Северном полюсе меридианы сходятся в одной точке, поэтому понятие часовых поясов там теряет смысл.',
					bg: 'img/pictures-2.jpg',
					bgMobile: 'img/pictures_mobile-2.jpg',
				},
		{
					question: 'Можно ли добывать нефть в арктических морях?',
					answers: ['Нефть там не добывается, это технически сложно из-за природных условий.','Да, можно. Нефть на российском арктическом шельфе добывает единственная платформа с соответствующими технологиями – «Приразломная», которая принадлежит компании «Газпром нефть».','Нефть в арктических морях добывали с доисторичеких времен кустарными способами, пробуривая лед и дно самодельными каменными бурами.'],
					answerType: 'radio',
					correctAnswer: ['Да, можно. Нефть на российском арктическом шельфе добывает единственная платформа с соответствующими технологиями – «Приразломная», которая принадлежит компании «Газпром нефть».'],
					userAnswer: [],
					correctText: 'Вы правы! Это единственная платформа, ведущая добычу нефти на российском арктическом шельфе.',
					incorrectText: 'Неверно! Добывать нефть в арктических морях можно благодаря специальным технологиям.',
					bg: 'img/pictures-3.jpg',
					bgMobile: 'img/pictures_mobile-3.jpg',
				},
		{
					question: 'Особые гидрометеорологические условия Арктики требуют специальных инженерных решений. Для освоения Приразломного месторождения была создана стационарная платформа “Приразломная”, с которой начали добывать нефть на шельфе Арктики.  Длина и ширина платформы составляют 126 м, высота – 141 м. А представляете ли вы себе вес этого искусственного острова?',
					answers: ['Более 100 тысяч тонн','Более 200 тысяч тонн','Более 500 тысяч тонн'],
					answerType: 'radio',
					correctAnswer: ['Более 500 тысяч тонн'],
					userAnswer: [],
					correctText: 'Совершенно верно! Вес платформы “Приразломная” более 500 тысяч тонн',
					incorrectText: 'Чуть-чуть промахнулись! На самом деле вес платформы “Приразломная” более 500 тысяч тонн',
					bg: 'img/pictures-4.jpg',
					bgMobile: 'img/pictures_mobile-4.jpg',
		},
		{
					question: 'Кто такие «арктические единороги»?',
					answers: ['Так называют нарвалов – морских млекопитающих с длинным бивнем, напоминающим рог.','Первые арктические исследователи часто видели галлюцинации, в том числе мифических зверей: единорогов, гремлинов и т.д. «Арктический единорог» - симптом переохлаждения.','Покрытые длинным густым мехом единороги – герои сказок чукчей и алеутов.'],
					answerType: 'radio',
					correctAnswer: ['Так называют нарвалов – морских млекопитающих с длинным бивнем, напоминающим рог.'],
					userAnswer: [],
					correctText: 'Вы правы! Но даже немного жаль, что настоящих единорогов не существует',
					incorrectText: 'Не совсем так! На самом деле это морские млекопитающие с длинным бивнем, напоминающим рог',
					bg: 'img/pictures-5.jpg',
					bgMobile: 'img/pictures_mobile-5.jpg',
				},
		{
					question: 'Как транспортируют арктическую нефть в России?',
					answers: ['На специальных танкерах, построенных для работы во льдах.','Через многокилометровый шельфовый нефтепровод, проложенный по дну арктических морей.','Из-за того, что море большую часть года сковано льдами, транспортировка нефти возможна только самолетами.'],
					answerType: 'radio',
					correctAnswer: ['На специальных танкерах, построенных для работы во льдах.'],
					userAnswer: [],
					correctText: 'Правильно! Это специальные танкеры! Нефтепровод и самолеты тут ни при чем',
					incorrectText: 'Неверно! На самом деле для транспортировки используют специальные танкеры',
					bg: 'img/pictures-6.jpg',
					bgMobile: 'img/pictures_mobile-6.jpg',
				},
		{
					question: 'Ледоколы «Андрей Вилькицкий» и «Александр Санников» прокладывают ледовые каналы во льдах Заполярья, по которым проходят танкеры. Оглянитесь на здания вокруг себя и попробуйте представить высоту этого гиганта в этажах?',
					answers: ['3-этажное здание','7-этажное здание','10-этажное здание','12-этажное здание'],
					answerType: 'radio',
					correctAnswer: ['7-этажное здание'],
					userAnswer: [],
					correctText: 'Вы совершенно правы! Высота этих ледоколов сопоставима с 7-этажным зданием',
					incorrectText: 'Чуть-чуть промахнулись! На самом деле высота этих ледоколов сопоставима с 7-этажным зданием',
					bg: 'img/pictures-7.jpg',
					bgMobile: 'img/pictures_mobile-7.jpg',
				},
		{
					question: 'И еще один вопрос по ледоколам. Их часто называют “танцующие”, потому что они могут очень быстро развернуться на 360 градусов на чистой воде. Как вы думаете, сколько для этого им потребуется времени?',
					answers: ['1 минута','10 минут','30 минут','60 минут'],
					answerType: 'radio',
					correctAnswer: ['1 минута'],
					userAnswer: [],
					correctText: 'Верно! Потребуется всего 1 минута, чтобы ледоколы сделали полный поворот',
					incorrectText: 'Вы не правы! На самом деле эти ледоколы могут сделать полный поворот всего за 1 минуту!',
					bg: 'img/pictures-8.jpg',
					bgMobile: 'img/pictures_mobile-81.jpg',
				},
		{
					question: 'Что такое «арктическое хранилище семян»?',
					answers: ['Так называют семена древних растений, хранящиеся под слоем вечной мерзлоты еще с тех времен, когда Арктика не была покрыта вечной мерзлотой.','Это глобальное международное хранилище семян на Шпицбергене, где собраны 980 000 образцов на случай природных или техногенных катастроф.','Над Северным Ледовитым океаном в 1944 году потерпел крушение самолет, перевозивший около тонны гуманитарной помощи, преимущественно семена злаковых растений на посадку. Место его крушения до сих пор не найдено и в прессе получило название "арктическое хранилище семян».'],
					answerType: 'radio',
					correctAnswer: ['Это глобальное международное хранилище семян на Шпицбергене, где собраны 980 000 образцов на случай природных или техногенных катастроф.'],
					userAnswer: [],
					correctText: 'Вы правы! Считается, что оно способно выдержать сильные землетрясения, ядерную войну или глобальное потепление.',
					incorrectText: 'Неверно! На самом деле это международное хранилище семян на случай природных или техногенных катастроф',
					bg: 'img/pictures-9.jpg',
					bgMobile: 'img/pictures_mobile-9.jpg',
				},
		{
					question: '«Газпром нефть» реализует множество экологических инициатив в Арктике. Какой из нижеперечисленных не существует:',
					answers: ['На проекте Мессояха в Ямало-Ненецком автономном округе маршруты трубопровода не пересекает оленьих пастбищ и священных для коренных жителей мест. На пути миграции стад оленей сооружены специальные переходы, а крупные реки Мудуйяху и Индикъяху труба пересекает под землей.','Все животные арктического региона помечены специальными датчиками для отслеживания из космоса.','Вертолеты, отправляющиеся на Приразломное месторождение в Баренцевом море, летят не ниже 500 метров над поверхностью воды, чтобы не пугать животных и птиц.'],
					answerType: 'radio',
					correctAnswer: ['Все животные арктического региона помечены специальными датчиками для отслеживания из космоса.'],
					userAnswer: [],
					correctText: 'Правильно! Из космоса отслеживают далеко не всех животных, а только отдельных особей, участвующих в экологическом мониторинге.',
					incorrectText: 'Неверно! Такая инициатива есть, а вот из космоса отслеживают далеко не всех животных, а только отдельных особей, участвующих в экологическом мониторинге.',
					bg: 'img/pictures-10.jpg',
					bgMobile: 'img/pictures_mobile-10.jpg',
				}
			],
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
			let result = 0;
			//this.questions
			return result;
		}
	},
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
	height: 460px;
	max-height: 100vh;
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
</style>
