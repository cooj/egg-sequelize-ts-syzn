import moment from 'moment';

export function relativeTime(time) {

    return moment(new Date(time * 1000)).fromNow();
}

export function showToDate(time:moment.MomentInput) {

    return moment(time).format('YYYY-MM-DD');
}


export function domain(url) {
    return url && url.split('/')[2];
}
