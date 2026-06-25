// connecting the html elements to id
const button = document.getElementById('button');
const container = document.getElementById('dataContainer');

//api endpoint that i will constantly call
const url='https://dog.ceo/api/breeds/image/random';

if(button){
    console.log("Button is loaded into dom.")
    button.addEventListener('click', ()=> apiCall());
}
//checking to make sure the button is not null before addinv event listener 


async function apiCall(){
    try{
        container.textContent='Loading dogs...';
        console.log("Loading dogs")
        const response = await fetch(url);
        //if response not within 200-299 range throws error
        if(!response.ok){
            console.log("Response was not okay")
            throw new Error(`HTTP Error! Status: ${response}`)
        }

        const data= await response.json();
        console.log(data);
        container.innerHTML = `<img src="${data.message}">`;
    }
    catch (error) {
    container.innerHTML = '<p>Failed to load dog image. Please try again.</p>';
    }
}