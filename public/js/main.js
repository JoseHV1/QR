window.onload = () => {
    // alert('holas');
    const container_reader = document.getElementById('container_reader');

    var scanner = new Instascan.Scanner({
        video: container_reader,
        scanPeriod: 5,
        mirror: false 
    });

    Instascan.Camera.getCameras().then(function(cameras) {
        console.log(cameras);
        if (cameras.length > 0) {
            scanner.start(cameras[0])
        } else {
            console.log('No se han encontrado camaras');
            alert('Camaras no encontradas');
        }
    }).catch(function(e) {
        console.log(e);
        alert(e);
    });

    scanner.addListener('scan', function(response) {
        console.log("Contenido: "+response);
    });

    // var scanner = new Instascan.Scanner({ video: container_reader });
    // scanner.addListener('scan', function (content, image) {
    //     console.log(content);
    // });

    // Instascan.Camera.getCameras().then(function (cameras) {
    //     if (cameras.length > 0) {
    //         scanner.start(cameras[0]);
    //     }
    // });
}