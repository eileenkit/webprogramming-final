

Vue.component('word-container', {
    props: ['english', 'spanish', 'id'],
    template: `<div class="flash-card-container" v-cloak>\
       <div class="english-word"><p>English: {{this.english}}</p></div>\
       <div class="spanish-word"><p>Spanish: {{this.spanish}}</p></div></div>`
});



var vm = new Vue({
    el: "#app",
    data: {
        englishWords:"",
        spanishWords:"",
        wordId:"",
        words: [
            {
                english: "hello",
                spanish: "hola",
                id:1
            },{
                english: "pants",
                spanish:"pantalones",
                id:2
            }
        ],
    },
    methods:{
        deleteWord: function(wordObject){
            this.words=this.words.filter(function(word){
                if (word.id !==wordObject.id){
                    return true;
                }else{
                    return false;
                }
                });
            },
        addWord: function(){
            if (this.validateWord()){
            let newWord={
                english: this.englishWords,
                spanish: this.spanishWords,
                id:this.wordId
            };
            this.words.push(newWord);
            this.english=this.spanish=this.id="";
        }
        },
        validateWord: function(){
            if (this.englishWords==="" ||
                this.spanishWords==="" ||
                this.wordId===""){
            alert ("Fill in fields.");
                return false;
            }
            else {return true;}
    }
}
});

