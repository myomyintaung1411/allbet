import { createApp, h, ref, reactive } from 'vue';
// 注意这里替换成存放路径
import MessageComponent from '@/components/MessageComponent.vue';

var messageList = reactive([]);
// 消息显示时长
var timer = ref(3000);
// 处理数据
function handleData(type, title) {
    // 数据添加
    messageList.push({ type: type, title: title });
    // 数据删除
    setTimeout(function () {
        if (messageList.length > 0) {
            messageList.shift();
        }
    }, timer.value);
    // 创建
    var app = createApp({
        render: function () {
            return h(MessageComponent, { messageList: messageList });
        }
    });
    // 容器挂载
    //备注,如果这里没有 #message dom元素,可以动态创建一个,然后挂载
    //const divEle = document.createElement('div')
    //divEle.setAttribute('id', 'customShowLoading')
    // 让我们节点挂载到一个dom元素上
    //document.body.appendChild(divEle)
    app.mount('#message');
    
}
var MessageClass = /** @class */ (function () {
    function MessageClass() {
    }
    // 普通提示
    MessageClass.prototype.info = function (title) {
        handleData('info', title);
    };
    // 警告提示
    MessageClass.prototype.wraning = function (title) {
        handleData('wraning', title);
    };
    // 成功提示
    MessageClass.prototype.success = function (title) {
        handleData('success', title);
    };
    // 错误提示
    MessageClass.prototype.error = function (title) {
        handleData('error', title);
    };
    return MessageClass;
}());
var Message = new MessageClass();
export default {
    Message
}


