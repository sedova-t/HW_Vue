let vueApp = document.querySelector('#vue-app');

let app = new Vue({
    el: vueApp,
    data: {
        pages: [
            {
                name: "Замок Хогвартс",
                url: "https://mir-kubikov.ru/lego/71043/",
                description: "Исследуй волшебный замок Хогвартс! Открой для себя комнаты с затейливым интерьером, башни и классы и многие другие потайные уголки замка и места, где происходит действие фильмов о Гарри Поттере.",
                img: "https://mir-kubikov.ru/upload/resize_cache/iblock/ba2/670_520_140cd750bba9870f18aada2478b24840a/ba20067bca9fc657d254e863d86c54dc.jpg",
                inputActive: false,
            },
            {
                name: "Звезда смерти",
                url: "https://mir-kubikov.ru/lego/zvezda-smerti-75159/",
                description: "Потрясающий коллекционный набор «Звезда Смерти» из серии LEGO® Star Wars. Выбирай, на чью сторону ты встанешь в великом межпланетном противостоянии, как только конструктор Лего «Звезда Смерти» будет собран. ",
                img: "https://mir-kubikov.ru/upload/resize_cache/iblock/320/670_520_140cd750bba9870f18aada2478b24840a/320fc5d6c86b81d1285efc1c20dcf894.jpg",
                inputActive: false,

            },
            {
                name: "Фиат 500",
                url: "https://mir-kubikov.ru/lego/10271/",
                description: "Ощутите вкус роскошной жизни с классическим итальянским автомобилем Fiat 500. Собери модель легендарного итальянского автомобиля из элементов набора «Fiat 500» LEGO® Creator Expert. ",
                img: "https://mir-kubikov.ru/upload/resize_cache/iblock/403/670_520_140cd750bba9870f18aada2478b24840a/403432e64bb888b92d0328ba1dbb3fc6.jpg",
                inputActive: false,

            },
            {
                name: "Лондонский автобус",
                url: "https://mir-kubikov.ru/lego/10258/",
                description: "Лондонский автобус Routemaster от LEGO — это модель знаменитого красного двухэтажного автобуса, которая была разработана английской автомобилестроительной компанией AEC в 1954 году.",
                img: "https://mir-kubikov.ru/upload/resize_cache/iblock/a8e/670_520_140cd750bba9870f18aada2478b24840a/a8e46fcc1d085d3c9ec64ab399af13cd.jpg",
                inputActive: false,

            },
            {
                name: "Автобус Фольксваген",
                url: "https://mir-kubikov.ru/lego/turisticheskiy-treyler-folksvagen-t1/",
                description: "Набор LEGO Туристический трейлер Фольксваген Т1 станет настоящим украшением твоей коллекции и любимой игрушкой. Модель в точности повторяет раритетный минивэн Фольксваген Кампер Вэн 1962 года выпуска.",
                img: "https://mir-kubikov.ru/upload/resize_cache/iblock/574/670_520_140cd750bba9870f18aada2478b24840a/574c5872187070f662240328d079152b.jpg",
                inputActive: false,

            },
            {
                name: "Сокол тысячелетия",
                url: "https://mir-kubikov.ru/lego/75192/",
                description: "Корабль LEGO® Star Wars «Сокол Тысячелетия» приземлился! Этот суперскоростной корабль Хана Соло, собранный из 7500 элементов, отличается по-настоящему крутыми деталями и интересными функциями. ",
                img: "https://mir-kubikov.ru/upload/resize_cache/iblock/a86/670_520_140cd750bba9870f18aada2478b24840a/a86fbeff7c7e6ce0ce5f0000db4054cc.jpg",
                inputActive: false,

            },
            {
                name: "Очень странные дела",
                url: "https://mir-kubikov.ru/lego/75810/",
                description: "Потрясающая коллекционная модель LEGO® Stranger Things! Исследуй дом Байерсов в реальном мире и в другом измерении. ",
                img: "https://mir-kubikov.ru/upload/resize_cache/iblock/dfc/670_520_140cd750bba9870f18aada2478b24840a/dfcb6c3d8c97f0cf3e5f11904fb71056.jpg",
                inputActive: false,

            },
            {
                name: "Матч по квиддичу",
                url: "https://mir-kubikov.ru/lego/75956/",
                description: "Поймай Золотой снитч и выиграй матч по квиддичу! Скорее, прыгай на свою метлу, чтобы принять участие в Матче по квиддичу LEGO® Harry Potter",
                img: "https://mir-kubikov.ru/upload/resize_cache/iblock/6e3/670_520_140cd750bba9870f18aada2478b24840a/6e3b500713898f4d0bc55edbf0b8fa8a.jpg",
                inputActive: false,

            },
        ],
        search: "",
        isListActived: false,
    },
    computed:{
        getPages(){
            let result = this.pages.filter(i => {
                let name = i.name.toLowerCase();
                let search = this.search.toLowerCase();
                return name.indexOf(search) >= 0
            });
            return result;
        }
    },
    methods:{
        showInput(index){
            this.pages[index].inputActive = true;
        },
        changeName(index){
            let input = this.$refs.inputs[index].querySelector('input');
            this.pages[index].name = input.value;
            this.pages[index].inputActive = false;
        }
    }
})




































