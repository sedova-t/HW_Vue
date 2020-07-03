let vueApp = document.querySelector('#vue-app');

let app = new Vue({
    el: vueApp,
    data: {
        description: "Состав: Баклажаны, шампиньоны, запеченный сладкий перец, стручковая фасоль, вяленые томаты, " +
            "салатный лук, томаты \"Черри\", томатный соус и руккола",
        image: "https://royalpizza.ru/upload/iblock/1e5/1e58bdc19a4aa5c4f9454aa129210b1b.jpg",
        sizes: [
            {
                size: 30,
                title: "Средняя - 560 гр.",
                active: true,
                price: 580
            },
            {
                size: 40,
                title: "Большая - 1080 гр.",
                active: false,
                price: 1050
            }
        ],
        price: 0,
        text: 'Баклажаны, шампиньоны, запеченный сладкий перец, стручковая фасоль, вяленые томаты, салатный лук, томаты "Черри", томатный соус и руккола',
        nutritious: {
            calories: 250,
            proteins: 20,
            fats: 40,
            carbo: 40
        },
        activeDescription: true,
        activeNutritious: false,
        showMore: false,
        showMoreHideText: false,
        activeMain: true,
        user: {
            name: 'Mikhail',
            secondName: 'Alekseev',
            login: 'Alexeev123',
            eMail: 'alexeev@gmail.com',
            photo: 'https://www.kino-teatr.ru/news/19038/171449.jpg'
        }
    },
    created(){
        this.checkText();
    },
    computed: {
        getPrice(){
            let temp = this.sizes.filter(i => i.active);
            let activePrice = temp[0].price;
            this.price = activePrice;

            return this.price;
        },
        arrayText(){
            let arrText = this.text.split(" ");

            if (arrText.length > 5 && this.showMore) {
                let newArrText = arrText.slice(0,5);
                return newArrText.join(' ');
            } else {
                return this.text;
            }
        }
    },
    methods:{
        selectSize(index){
            this.sizes.forEach(item => item.active = false);
            this.sizes[index].active = true;
        },
        showDescription(){
            this.activeDescription = true;
            this.activeNutritious = false;
        },
        showNutritious(){
            this.activeDescription = false;
            this.activeNutritious = true;
        },
        showAll(){
            this.showMore = false;
            this.showMoreHideText = true;
        },
        checkText(){
            let arrText = this.text.split(" ");
            if (arrText.length > 5) {
                this.showMore = true;
            }
        },
        hideText() {
            this.showMore = true;
            this.showMoreHideText = false;
        },
        showMain() {
            this.activeMain = true;
        },
        showCabinet() {
            this.activeMain = false;
        }
    }

})