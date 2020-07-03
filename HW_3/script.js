let vueApp = document.querySelector('#vue-app');

let app = new Vue({
    el: vueApp,
    data: {
        pages: [
            {
                name: "Замок Хогвартс",
                url: "https://mir-kubikov.ru/lego/71043/",
                img: "https://mir-kubikov.ru/upload/resize_cache/iblock/ba2/670_520_140cd750bba9870f18aada2478b24840a/ba20067bca9fc657d254e863d86c54dc.jpg",
                inputActive: false,
            },
            {
                name: "Звезда смерти",
                url: "https://mir-kubikov.ru/lego/zvezda-smerti-75159/",
                img: "https://mir-kubikov.ru/upload/resize_cache/iblock/320/670_520_140cd750bba9870f18aada2478b24840a/320fc5d6c86b81d1285efc1c20dcf894.jpg",
                inputActive: false,

            },
            {
                name: "Фиат 500",
                url: "https://mir-kubikov.ru/lego/10271/",
                img: "https://mir-kubikov.ru/upload/resize_cache/iblock/403/670_520_140cd750bba9870f18aada2478b24840a/403432e64bb888b92d0328ba1dbb3fc6.jpg",
                inputActive: false,

            },
            {
                name: "Лондонский автобус",
                url: "https://mir-kubikov.ru/lego/10258/",
                img: "https://mir-kubikov.ru/upload/resize_cache/iblock/a8e/670_520_140cd750bba9870f18aada2478b24840a/a8e46fcc1d085d3c9ec64ab399af13cd.jpg",
                inputActive: false,

            },
            {
                name: "Автобус Фольксваген",
                url: "https://mir-kubikov.ru/lego/turisticheskiy-treyler-folksvagen-t1/",
                img: "https://mir-kubikov.ru/upload/resize_cache/iblock/574/670_520_140cd750bba9870f18aada2478b24840a/574c5872187070f662240328d079152b.jpg",
                inputActive: false,

            },
            {
                name: "Сокол тысячелетия",
                url: "https://mir-kubikov.ru/lego/75192/",
                img: "https://mir-kubikov.ru/upload/resize_cache/iblock/a86/670_520_140cd750bba9870f18aada2478b24840a/a86fbeff7c7e6ce0ce5f0000db4054cc.jpg",
                inputActive: false,

            },
            {
                name: "Очень странные дела",
                url: "https://mir-kubikov.ru/lego/75810/",
                img: "https://mir-kubikov.ru/upload/resize_cache/iblock/dfc/670_520_140cd750bba9870f18aada2478b24840a/dfcb6c3d8c97f0cf3e5f11904fb71056.jpg",
                inputActive: false,

            },
            {
                name: "Матч по квиддичу",
                url: "https://mir-kubikov.ru/lego/75956/",
                img: "https://mir-kubikov.ru/upload/resize_cache/iblock/6e3/670_520_140cd750bba9870f18aada2478b24840a/6e3b500713898f4d0bc55edbf0b8fa8a.jpg",
                inputActive: false,

            },
        ],
        search: "",
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




































