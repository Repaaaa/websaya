const button = document.getElementById('myButton');

button.addEventListener('mouseover', () => {
  window.location.href = 'test.html'; /* link to another HTML page */
});

  const audioContext = new AudioContext();
  const audioSource = audioContext.createBufferSource();
  const audioBuffer = audioContext.createBuffer(1, 44100, 44100);

  fetch('source/audio_file.mp3')
   .then(response => response.arrayBuffer())
   .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
   .then(audioBuffer => {
      audioSource.buffer = audioBuffer;
      audioSource.connect(audioContext.destination);
      audioSource.start();
      audioSource.autoplay = true;
    });
