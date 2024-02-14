/* POST01 */
window.addEventListener('DOMContentLoaded', function () {
    const id = document.getElementById('po1_name');
    const pw = document.getElementById('po1_pw');
    const confirmBtn = document.getElementById('po1_confirmBtn');

    confirmBtn.addEventListener('click', function() {
        const webAplUrl = 'https://script.google.com/macros/s/AKfycbzlD3R49PX4u4ypzqSWEaQTOikCfDaJb0AjR3isafY8l554OlTepn_PNIqqB8-F2XmRMg/exec';
        
        const sendData = {
            "id": id.value,
            "password": pw.value
        };

        const postRaram = {
            "method"     : "POST",
            "mode"       : "no-cors",
            "Content-Type" : "application/x-www-form-urlencoded",
            "body" : JSON.stringify(sendData)
        };

        UrlFetchApp.fetch(webAplUrl).then(response => {
            if (response.ok) {
                console.log('response: ok');
            } else {
                console.log('response: nooooo!!');
            }
            return response.json();
        }).then(data => {
            console.log('data.status: ' + data.status);
            console.log('data.id: ' + data.id);
        }).catch(error => {
            console.log(error);
        });
    });
});