const firstString = document.querySelector('#first');
const secondString = document.querySelector('#second');
const message = document.querySelector('#message');
const submit = document.querySelector('#submit');

const indices = (char, string) => {
    const indicesArray = [];
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        if (element == char) {
            indicesArray.push(i);
        }
    }
    return indicesArray;
}

const checkForIsophorms = (string1, string2) => {
    let isIsophorm = true;
    for (let i = 0; i < string1.length; i++) {
        let indices1 = JSON.stringify(indices(string1[i], string1));
        let indices2 = JSON.stringify(indices(string2[i], string2));
        if (indices1 !== indices2)
            isIsophorm = false;
    }
    return isIsophorm;
} 

submit.addEventListener('click', () => {
    let str1 = firstString.value;
    message.classList.remove('hide');
    let str2 = secondString.value;
    if (str1.length !== str2.length || str1 == "") {
        message.innerHTML = "Please your imputs should have same lenght"
    } else {
        checkForIsophorms(str1, str2)? 
        
        message.innerHTML = "they are isomorphic" : 
        message.innerHTML = "Not isomorphic";
    }
    firstString.value = "";
    secondString.value = "";
})