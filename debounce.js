function debounce(fn, delay) {
    let timer;
    return function (arg) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(arg);

        }, delay);
    }
}

function searchData(search) {
    console.log(`Searching for ${search}`);

}

let debounceSerach = debounce(searchData, 5000);

debounceSerach("h");
debounceSerach("ha");
debounceSerach("har");
debounceSerach("hard");
debounceSerach("hard Js");


