Vue.component('flashcard', {
  template: '#word',
  
  props: ['wordData'],
  
  data: function() {
    return {
      toggled: false,
    }
  },
  
  methods: {
    toggleWord: function() {
      this.toggled = !this.toggled;
    }
  }
  
})
