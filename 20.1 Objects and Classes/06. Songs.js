function songs(input) {
    let songs = [];
    let countSongs = input.shift();
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time
        }
    }
    for (let i = 0; i < countSongs; i++) {
        let [typeList, name, time] = input[i].split('_');
        songs.push(new Song(typeList, name, time));
    }
    let command = input[countSongs]
    if (command === 'all') {
        songs.forEach(song => console.log(song.name));
    } else {
        let filtred = songs.filter(song => song.typeList === command)
        filtred.forEach(song => console.log(song.name));
    }
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);