function rotation(band, album, songName) {
    let songDuration = (band.length * album.length * songName.length) / 2;

    let result = Math.ceil(songDuration / 2.5);
    console.log(`The plate was rotated ${result} times.`);
}
rotation('Rammstein', 'Sehnsucht', 'Engel')