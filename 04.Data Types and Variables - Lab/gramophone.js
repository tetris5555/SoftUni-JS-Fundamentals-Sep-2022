function solve(band, album, songTitle) {
    const duration = (album.length * band.length) * songTitle.length / 2;
    /*
    The plate makes a full rotation every 2.5 seconds.
    How many times the plate will rotate the given song from the album?
    Rotations should be rounded up.
    */

    const rotations = Math.ceil(duration / 2.5);

    console.log(`The plate was rotated ${rotations} times.`);
}


solve('Rammstein', 'Sehnsucht', 'Engel');