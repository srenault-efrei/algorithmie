export default function leap(year) {

    let boolean = false;

    if (Number.isInteger(year / 4) && Number.isInteger(year / 100) && Number.isInteger(year / 400)) {
        boolean = true;
        return boolean;
    }
    else if (Number.isInteger(year/4) && !Number.isInteger(year/100)){
        boolean = true;
        return boolean
    }
   else{
       return boolean;
   }
}

