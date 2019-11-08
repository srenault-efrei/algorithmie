

export default function bob(sentence) {

    let length = 0;
    let lastLetter = ''
  
    let message = ""

    if (sentence != undefined){
        
        length = sentence.length;
        lastLetter = sentence[length - 1]
    }
   

    if (lastLetter == '?') {
        message = "Sure"
    }
    else if (lastLetter == "!") {
        message = "Whoa, chill out!"
    }
    else if (sentence == 'Bob') {
        message = "Fine. Be that way!"
    }
    else {
        message = 'Whatever'
    }

    return message
}