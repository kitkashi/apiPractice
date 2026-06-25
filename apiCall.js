// connecting the html elements to js with variable name/id
const button = document.getElementById('apiButton');
const container = document.getElementById('dataContainer');

//api endpoint that i will constantly call
const url='https://dog.ceo/api/breeds/image/random';


button.addEventListener('click', ()=> apiCall(),false);


async function apiCall(){

    try{
        const response = await fetch(url);
        //if response not within 200-299 range throws error
        if(!response.ok){
            throw new Error(`HTTP Error! Status: ${response}`)
        }

    const data = response.json();

    }
    catch
}