window.onload = () => {
    alert('holas');
    const container_reader = document.getElementById('container_reader');
    const container_result = document.getElementById('container_result');
    const result = document.getElementById('result');

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
        video: container_reader, 
        scanPeriod: 5, 
        mirror: false 
    });
    
    scanner.addListener('scan', function (content, image) {
        alert('escaneando');
        alert('content '+ content);
        alert('image '+ image);
        window.open(''+ content)
        container_result.classList().remove('d_none');
        result.textContent = content;
    });

    Instascan.Camera.getCameras().then(function (cameras) {
        alert(cameras);
        if (cameras.length > 0) {
            scanner.start(cameras[1]);
        } else {
            alertify.error('Your device does not have web cameras installed');
        }
    }).catch(function (e) {
        alert(e);
    });
}