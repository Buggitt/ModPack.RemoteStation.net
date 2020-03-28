//Modified code from here: https://codepen.io/nodws/pen/ZLLXXq
//based on a pen by @robinselmer
var url = "https://api.minetools.eu/ping/modpack.remotestation.net";
//https://mcapi.us/server/status?ip=666.fluctis.com&port=25757
$.getJSON(url, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest').html('Server Offline');
   return false;
 } 
var pl = '';
 if(r.players.sample.length > 0 ){
     pl = '<br>Players: '+r.players.sample[0].name;  
 } 
  $('#rest').html("MOTD: "+r.description.replace(/§(.+?)/gi, '')+'<br><b>Players Online:</b> '+r.players.online+pl);
 $('#favicon').attr('src', r.favicon);
    
});
