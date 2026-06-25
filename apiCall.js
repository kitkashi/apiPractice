async function apiCall(){

    //api endpoint that i will constantly call
    const url='https://dog.ceo/api/breeds/image/random'

    try{
        const response = await fetch(url);
        //if response not within 200-299 range throws error
        if(!response.ok){
            throw new Error(`HTTP Error! Status: ${response}`)
        }

    const data = response.json();

    }
}