<template>
  <div id="app">
    <div class="container-fluid">
        <Question v-if='state == "start"'
          :question='questions[stage].question'
          :answers='questions[stage].answers'
          :answerType='questions[stage].answerType'
          :stage='stage'
          :questionsLength='questions.length'
        @answer="getAnswer"
        ></Question>
        <FinalScreen v-else-if='state == "results"'
               :questions='questions'
               @again='restart'
        >
        </FinalScreen>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      questions: [
        {
          question: 'Самая высокая гора в мире?',
          answers: ['Фудзияма','Эверест','Килиманджаро'],
          answerType: 'radio',
          correctAnswer: ['Эверест'],
          userAnswer: [],
        },
        {
          question: 'Какие теги являются строковыми?',
          answers: ['a','span','div', 'select'],
          answerType: 'checkbox',
          correctAnswer: ['a','span'],
          userAnswer: [],
        },
        {
          question: 'Кто написал пьесу "На дне"?',
          answers: ['Горький','Достоевский','Гоголь', ],
          answerType: 'radio',
          correctAnswer: ['Горький'],
          userAnswer: [],
        },
        {
          question: 'На какой широте расположен Санкт-Петербург?',
          answers: ['59 с.ш','67 с.ш','63 с.ш', '69 с.ш'],
          answerType: 'radio',
          correctAnswer: ['59 с.ш'],
          userAnswer: [],
        },
        {
          question: 'Выберите страны входящие в БРИКС',
          answers: ['Бразилия','Иран','ЮАР', 'Россия', 'Индия', 'Белоруссия'],
          answerType: 'checkbox',
          correctAnswer: ['Бразилия','ЮАР','Россия','Индия'],
          userAnswer: [],
        },
        {
          question: 'Столица Австралии ?',
          answers: ['писать тут'],
          answerType: 'text',
          correctAnswer: ['Канберра'],
          userAnswer: [],
        },         

      ],
      stage: 0,
      state: 'start'
    }
  },

  methods: {
  	getAnswer(data) {
  		let object = this.questions[this.stage];
  		if ( Array.isArray(data.answer) ) {
  			object.userAnswer = data.answer
  		} else {
  			object.userAnswer.push(data.answer);
  		}
  		object.userAnswer.sort();
  		object.correctAnswer.sort();
  		if (this.stage == this.questions.length-1) {
  			this.state = 'results'
  		} else {
  			this.stage++; 
  		}
  	},
  	restart() {
  		this.stage = 0;
  		this.state = 'start'
  		this.questions.forEach((item) => {
  			item.userAnswer.length = 0;
  		})
  	}
  },
  computed: {

  },
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
