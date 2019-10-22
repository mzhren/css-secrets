var app = new Vue({
    el: '#app',
    data: {
        demos: [{
            dir: 'translucent-borders',
            thumb: 'translucent-borders.png',
            title: '半透明边框',
            tags: ['rgba', 'hsla', 'background-clip']
        }, {
            dir: "mutiple-borders",
            thumb: 'mutiple-borders.png',
            title: '多重边框',
            tags: ['box-shadow', 'outline']
        }, {
            dir: 'seam-edge',
            thumb: 'seam-edge.png',
            title: '缝边效果',
            tags: ['outline', 'outline-offset']
        }, {
            dir: 'envelope',
            thumb: 'envelope.png',
            title: '信封效果',
            tags: ['边框', '背景']
        }, {
            dir: 'bg-position',
            thumb: 'bg-pos.png',
            title: '灵活的背景定位',
            tags: ['background-position']
        }, {
            dir: 'background-origin',
            thumb: '../bg-position/bg-pos.png',
            title: '灵活的背景定位2',
            tags: ['background-origin']
        }, {
            dir: 'bg-pos-calc',
            thumb: '../bg-position/bg-pos.png',
            title: '灵活的背景定位3',
            tags: ['background-position', 'calc']
            }, {
                dir: 'inner-rounding',
                thumb: 'inner-rounding.png',
                title: '边框内圆角',
                tags: ['outline', 'box-shadow']
            }, {
                dir: 'horizontal-stripes',
                thumb: 'horizontal-stripes.png',
                title: '水平条纹背景',
                tags: ['background-size', 'linear-gradient']
            }, {
                dir: 'vetical-stripes',
                thumb: 'vetical-stripes.png',
                title: '垂直条纹背景',
                tags: ['background-size', 'linear-gradient']
            }]
    }
})