// version1.0 map
var countCharacters = function (words, chars) {
    // charsMap and wordMap
    // compare each char of word with chars
    // if word has a char not in charsMap or more than the char in charsMap , out 
    let charsMap = new Map()
    for (let char of chars) {
        charsMap.set(char, (charsMap.has(char) ? charsMap.get(char) + 1 : 1))
    }

    let size = 0
    for (let word of words) {
        let wordMap = new Map()
        for (let char of word) {
            wordMap.set(char, (wordMap.has(char) ? wordMap.get(char) + 1 : 1))
        }
        let out = false
        //compare
        for (let char of word) {
            if (wordMap.get(char) > charsMap.get(char) || charsMap.get(char) === undefined) {
                out = true
                break
            }
        }

        if (out === false) {
            size += word.length
        }
    }
    return size
};

// version1.1 map
var countCharacters = function (words, chars) {
    // charsMap and wordMap
    // compare each char of word with chars
    // if word has a char not in charsMap or more than the char in charsMap , out 
    let charsMap = new Map()
    for (let char of chars) {
        charsMap.set(char, (charsMap.has(char) ? charsMap.get(char) + 1 : 1))
    }

    let size = 0
    for (let word of words) {
        let wordMap = new Map()
        for (let char of word) {
            wordMap.set(char, (wordMap.has(char) ? wordMap.get(char) + 1 : 1))
        }
        let out = false
        // faster than compare each char
        for (let [key,value] of wordMap) {
            if (value > charsMap.get(key) || !charsMap.get(key)) {
                out = true
                break
            }
        }
        size = out ? size: size + word.length
    }
    return size
};

// V2.0
var countCharacters = function (words, chars) {
    let size = 0
    for (let word of words) {
        let i = 0, out = false, temp = chars
        while (i < word.length) {
            if (temp.indexOf(word[i]) === -1) {
                out = true
                break
            }
            temp = temp.replace(word[i], '')
            i++
        }
        size = out ? size: size + word.length
    }
    return size
};
