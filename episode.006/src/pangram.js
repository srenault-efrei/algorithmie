

export default function pangram(sentence) {
 let regex = /[A-Za-z]|[\s+]|\./g;


 let compt = 0;
for (const letter of sentence ){
    if(!letter.match(regex)){
        compt = compt +1
    } 
}
if(compt>0){
    return false
}else{
    return true
}

}

