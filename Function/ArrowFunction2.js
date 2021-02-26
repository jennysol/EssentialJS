function People() {
    this.old = 0

    setInterval(() => {
        this.old++
        console.log(this.old)
    }, 100)
}

new People