new Vue({
    el: '#one',
    data: {
        student: [
            {name: '名井南', age: 20},
            {name: '凑崎纱夏', age: 20},
            {name: '平井桃', age: 20}
        ]
    }
});
new Vue({
    el: '#hou',
    data: {
        message: "漂亮哦"
    },
    methods: {
        mo: function () {
            this.message = '胡某人是摸不到的'
        }
    }
});
var girl = new Vue({
    el: '#girl',
    data: {
        wife: [
            {name: mina},
            {name: sana},
            {name: momo}
        ]
    }
});
Vue.component('twice', {
    template: '<li>都是我老婆</li>'
});