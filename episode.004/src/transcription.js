import { throws } from "assert";

export default function transcription(words) {

    let letter = "";
    let options =
    {
        A: 'U',
        C: 'G',
        G: 'C',
        T: 'A',
    }
    for (const word of words) {
        if (word in options) {
            letter += options[word]
        } else {
            throw "Nucleotide " + word + " does not exist"
        }
    }
    return letter
}

