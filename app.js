var app = new Vue({
    el: '#app',
    data: {
        page:1,
        perPage:12,
        pages:[],
        demos: [{
            dir: 'footnote',
            thumb: 'footnote.png',
            title: '脚注效果',
            tags: ['border-image', 'linear-gradient','background']
        },{
            dir: 'marching-ants',
            thumb: 'marching-ants.gif',
            title: '蚂蚁行军效果',
            tags: ['linear-gradient','background-origin', 'padding-box','background-position']
        },{
            dir: 'cianimation',
            thumb: 'cianimation.gif',
            title: 'cianimation',
            tags: ['animation','keyframe','transform', 'rotate']
        },{
            dir: 'bubbles',
            thumb: 'bubbles.gif',
            title: '小米垃圾清理效果',
            tags: ['transform', 'translate', 'rotate']
        },{
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
            }, {
                dir: 'diagonal-stripes',
                thumb: 'diagonal-stripes.png',
                title: '斜向条纹背景',
                tags: ['background-size', 'linear-gradient']
            }, {
                dir: 'diagonal-stripes-60deg',
                thumb: '../diagonal-stripes/diagonal-stripes.png',
                title: '斜向条纹背景2 60度',
                tags: ['background-size', 'repeating-linear-gradient']
            }, {
                dir: 'subtle-stripes',
                thumb: 'subtle-stripes.png',
                title: '灵活的同色系条纹',
                tags: ['background-size', 'repeating-linear-gradient','hlsa','rgba']
            }, {
                dir: 'blueprint',
                thumb: 'blueprint.png',
                title: '复杂的背景图案-网格',
                tags: ['background-size', 'linear-gradient', 'hlsa', 'rgba']
            }, {
                dir: 'polka',
                thumb: 'polka.png',
                title: '复杂的背景图案-波点',
                tags: ['background-size', 'radial-gradient', 'hlsa', 'rgba']
            }, {
                dir: 'checkerboard',
                thumb: 'checkerboard.png',
                title: '复杂的背景图案-棋盘',
                tags: ['background-size', 'linear-gradient', 'hlsa', 'rgba']
            }, {
                dir: 'checkerboard_svg',
                thumb: '../checkerboard/checkerboard.png',
                title: '复杂的背景图案-棋盘svg实现',
                tags: ['background-size', 'svg']
            }, {
                dir: 'limegreen',
                thumb: 'limegreen.png',
                title: '复杂的背景图案-绿色草地',
                tags: ['background', 'repeating-linear-gradient']
            },{
                dir: 'conicbg',
                thumb: 'conic.png',
                title: '复杂的背景图案-圆锥',
                tags: ['background', 'repeating-linear-gradient']
            },{
                dir: 'pseudorandom-stripes',
                thumb: 'pseudorandom-stripes.png',
                title: '复杂的背景图案-伪随机',
                tags: ['background', 'linear-gradient','hsl']
            }, {
                dir: 'continuous-image-borders',
                thumb: 'continuous-image-borders.png',
                title: '连续的图片边框',
                tags: ['background', 'linear-gradient']
            }, {
                dir: 'border-image',
                thumb: 'border-image.png',
                title: '边框图片',
                tags: ['border-image', 'svg']
            }]
    },
    methods: {
        setPages() {
            let numberOfPages = Math.ceil(this.demos.length / this.perPage);
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(demos) {
            let page = this.page;
            let perPage = this.perPage;
            let from = (page * perPage) - perPage;
            let to = (page * perPage);
            return demos.slice(from, to);
        }
    },
    computed: {
        displayedDemos() {
            return this.paginate(this.demos);
        }
    },
    created(){
        this.setPages()
    }
})