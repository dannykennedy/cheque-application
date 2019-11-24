// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-3.php
export const formatDate = date => {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();

    if (dd < 10) {
        dd = `0${dd}`;
    }
    if (mm < 10) {
        mm = `0${mm}`;
    }
    return `${dd}/${mm}/${yyyy}`;
};
