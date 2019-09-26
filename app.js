var app = new Vue({
    el:'#app',
    data:{
        demos:[{
            dir:"",
            thumb:'images/default-demo-cover.jpg',
            title:'demo'
        },{     
                dir:'envelope',
                thumb:'envelope.png',
                title:'信封效果',
                tags:['边框','背景']
        }]
    }
})