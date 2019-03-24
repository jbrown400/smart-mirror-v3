

function micSetup() {
    var recorder = document.getElementById('recorder');
    var player = document.getElementById('player');

    recorder.addEventListener('change', function(e) {
        var file = e.target.files[0];
        player.src = file;
        console.log('changing')
    });

    var handleSuccess = function(stream) {
        var context = new AudioContext();
        var source = context.createMediaStreamSource(stream);
        var processor = context.createScriptProcessor(1024, 1, 1);

        source.connect(processor);
        processor.connect(context.destination);

        // processor.onaudioprocess = function(e) {
        //     console.log(e.inputBuffer);
        // }

        if(window.URL) {
            player.srcObject = stream;
        } else {
            player.src = stream;
        }
    };

    navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false
    }).then(handleSuccess);
}