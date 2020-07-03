let vueApp = document.querySelector('#vue-app');

let app = new Vue({
    el: vueApp,
    data: {
       ingredients:[
           {
               name: "Грибы",
               price: 35,
               selected: false
           },
           {
               name: "Сыр Гауда",
               price: 35,
               selected: false
           },
           {
               name: "Креветки тигровые",
               price: 79,
               selected: false
           },
           {
               name: "Лосось",
               price: 139,
               selected: false
           },
           {
               name: "Соус острый",
               price: 139,
               selected: false
           },
       ]
    },
    computed:{
        getTotalPrice(){
            let arr = this.ingredients.filter(i => i.selected);
            let totalPrice = arr.reduce((a,b) => a + b.price, 0);
            return totalPrice;
        }
    }
})