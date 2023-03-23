    const container_reader = document.getElementById('container_reader');
    const container_result = document.getElementById('container_result');
    var url = document.getElementById('url');

    // var scanner = new Instascan.Scanner({
    //     video: container_reader,
    //     scanPeriod: 5,
    //     mirror: false 
    // });

    // Instascan.Camera.getCameras().then(function(cameras) {
    //     console.log(cameras);
    //     if (cameras.length > 0) {
    //         scanner.start(cameras[0])
    //     } else {
    //         console.log('No se han encontrado camaras');
    //         alert('Camaras no encontradas');
    //     }
    // }).catch(function(e) {
    //     console.log(e);
    //     alert(e);
    // });

    // scanner.addListener('scan', function(response) {
    //     console.log("Contenido: "+response);
    // });

    var scanner = new Instascan.Scanner({ 
        continuous: true,
        video: container_reader, 
        scanPeriod: 5, 
        mirror: false 
    });

    scanner.addListener('scan', function (content) {
        alert('escaneando');
        window.open(content, "_blank");

        container_result.classList().remove('d_none');
        url.href = 'https://www.google.com/';
        url.textContent = 'https://www.google.com/';
        console.log(url);
    });

    Instascan.Camera.getCameras().then(function (cameras) {
        alert(JSON.stringify(cameras));
        if (cameras.length > 0) {
            scanner.start(cameras[1]);
        } else {
            alertify.error('Your device does not have web cameras installed');
        }
    }).catch(function (e) {
        alertify.error(e);
    });