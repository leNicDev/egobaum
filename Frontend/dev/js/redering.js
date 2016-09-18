function draw(json) {

    new Vue({
        el: '#app',
        data: {
            message: JSON.stringify(json)
        }
    })
}