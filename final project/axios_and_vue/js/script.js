function hideTable() {
   var element = document.getElementById("main-content");
   element.classList.toggle("card-game");
   var elementGame = document.getElementById("flash-card-game-toggle");
   elementGame.classList.toggle("card-game");
   var buttonText = document.getElementById("toggle-cards");
   if (buttonText.innerHTML === "Practice with flash cards!"){
    buttonText.innerHTML = "Back to word list";
    } else {
        buttonText.innerHTML = "Practice with flash cards!";
    }
   }




var baseURL = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190511T180950Z.3e96c4565fd94a6b.b5fb4d1be8738d21f626c7340641002a8e8428e3";

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


var vm = new Vue({
    el: "#app",
    data: {
        //isActive: true,
        translates: [],
        englishWords:"",
        spanishWords:"",
        wordId:"",
        words:[
        {
            english:"hello",
            spanish:'["hola"]',
            id:1
        }],
    },
    methods: {
        //toggleClass: function(event){
       // Check value
       //if(this.isActive){
         //this.isActive = false;
       //}else{
        // this.isActive = true;
       //}},
        getTranslates: function() { 
        axios.get(baseURL + "&text=" + this.englishWords + "&lang=en-es").then(function(response){ //get the translation and then create a response
                console.log(response); //console log the response
                vm.translates = response.data; //set the response as the data for 'translates'
            })
        },
        deleteWord: function(wordObject){ //pass wordObject through function
            this.words=this.words.filter(function(word){ //set words to be filtered
                if (word.id !==wordObject.id){  //if word id is not wordOject id (??)
                    return true; //then do not delete
                }else{
                    return false; //otherwise delete?
                }
                });
            },
        addWord: function(){
            if (this.validateWord()){  //if word is validated  
            let newWord={ //then let the newWord equal 
                english: this.englishWords, //let submitted 'englishWords' be set as the 'english' data 
                spanish: this.translates.text, //let submitted 'translates' to be equal to the 'spanish' data !!!! DO SOMETHING HERE
                id:this.englishWords //let the 'englishWords' submission be set as the id
            };
            this.words.push(newWord); //and now push this words as the newWord
            this.english=this.spanish=this.id=""; //now reset the english, spanish, and id to be blank
        }
        },
        validateWord: function(){
            if (this.englishWords===""){ //if englishWords is blank
            alert ("Fill in fields."); //then alert fill in fields
                return false; //and do not validate word
            }
            else {return true;} //othwerise, do validate word
            },
    },
    created: function() { //not sure what this does
        this.getTranslates();
    }
});