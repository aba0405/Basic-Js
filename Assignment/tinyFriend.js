function tinyFriend(names){
    var tiny = names[0];
    for( var i = 0; i<names.length; i++ ){
        var element = names[i];
        if(element.length<tiny.length){
            tiny = element;
        }
    }
    return tiny;
}

var result = tinyFriend(['John', 'Doe', 'Tiny', 'Diaaz']);
console.log(result);