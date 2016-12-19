import moment from 'moment';

export function fromNow (time){
    return moment(time, 'X').fromNow();
}

export function largeNumber(number) {
    if(number > 999999){
        number = (number / 1000000).toFixed(1) + 'M';
    }
    else if(number > 999){
        number = (number / 1000).toFixed(1) + 'K';
    }
    
    return number;
}