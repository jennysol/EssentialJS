function speakAfter(seconds, phrase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(phrase)
            // reject(phrase) catch 
        }, seconds * 1000)
    })
}

speakAfter(3, 'Good!')
    .then(phrase => phrase.concat('?!?'))
    .then(anotherSentence => console.log(anotherSentence))
    .catch(e => console.log(e))