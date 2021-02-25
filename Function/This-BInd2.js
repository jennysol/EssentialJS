function People() {
    this.old = 0

    const self = this
    setInterval(function() {
        self.old ++
        console.log(self.old)
    }/*.bind(this)*/, 1000)
}

new People