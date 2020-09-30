import Vue from 'vue'
import App from './App.vue'
import Question from './Question.vue'
import FinalScreen from './FinalScreen.vue'

//require('../index.html')

Vue.component('Question', Question)
Vue.component('FinalScreen', FinalScreen)

Vue.mixin({
  methods: {
    alertSome(text) { alert(text)},
    arraysEqual(a, b) {
				console.log(1);
			  if (a === b) return true;
			  if (a == null || b == null) return false;
			  if (a.length != b.length) return false;

			  // If you don't care about the order of the elements inside
			  // the array, you should sort both arrays here.

			  for (var i = 0; i < a.length; ++i) {
			    if (a[i] !== b[i]) return false;
			  }
			  return true;
	},

  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
