function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    // Api challenge
    const zipCode = 10001;
    const apiKey = '781d27be53ccaae278c356ef46876e8a';
    const uri = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`;

    fetch(uri)
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        /* console.log(data) */
        document.getElementById('results').innerHTML = `City name is ${data.name}`
    })

    /* console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    }) */
}

export { handleSubmit }
