function getRequest (){
    const request = new XMLHttpRequest();
    request.addEventListener('load', () => {
        const response = request.response;
        console.log(response);
    });
    request.open('GET', 'https://supersimplebackend.dev/greeting');
    request.send();
};
getRequest();
getRequestFetch();
getRequestFetchTwo();
sendRequestFetch();
getRequestFetchAmazon();
sendRequestError();
function getRequestFetch (){
    fetch('https://supersimplebackend.dev/greeting').then((response) => {
        return response.text()
    }).then ((responseText) => {
        console.log(responseText)
    })
}

async function getRequestFetchTwo (){
    const response = await fetch('https://supersimplebackend.dev/greeting');
    const responseText = await response.text();
    console.log(responseText);
}


async function sendRequestFetch (){
    const response = await fetch ('https://supersimplebackend.dev/greeting', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Adelakun Stephen'
        })
    });
    const responseText = await response.text();
    console.log(responseText);
}

async function getRequestFetchAmazon (){
    try {
        const response = await fetch('https://amazon.com');
        const responseText = await response.json();
        console.log(responseText);
    } catch (error){
        console.log('CORS Error. Cannot fetch Amazon data:');
    }
}

async function sendRequestError (){
    try {
        const response = await fetch ('https://supersimplebackend.dev/greeting', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            } 
        });
    if(!response.ok){
        const errorMessage = await response.text();
        throw {
            status: response.status,
            message: errorMessage
        }
    }

    const responseText = await response.text();
    console.log(responseText);
} catch (error){
    if(error.status === 400){
    console.log('Error sending request:', error.message);
    }
    console.error('Error sending request:', error);
    }
}
