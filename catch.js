const okk = document.getElementById('main');
const met = ['meteor.png','2nd-met.gif','3rdmet.png','4thmet.png']
function crt(){
    document.getElementById('bgm').play()
    if(parseInt(document.getElementById('count').innerHTML) > 0){
    
    let e = parseInt(document.getElementById('change').innerHTML)
    let i = 0;
    while (i<e){
        let a = document.createElement('a');
        let size = Math.random()*20;
        let x = Math.floor(Math.random()*window.innerWidth)
        let v = met[Math.floor(Math.random() *4)]
        let delay = Math.random()*-25;
        a.style.width = size + 'px';
        a.style.left = x + 'px';
        a.style.animationDelay = delay + 's';
        okk.appendChild(a) 
        a.setAttribute('onclick','clk(this)')
        a.innerHTML = '<img  style="padding:40px;width:'+ (20 + size) + 'px' + ';height:auto;"src="'+ v +'">';
        i++
    }
        setTimeout(del,200)
    }else{
        let a = parseInt(document.getElementById('score1').innerHTML);
        document.getElementById('count').style.display='none'
        document.getElementById('time').style.display='none'
        document.getElementById('score').style.display='none'
        document.getElementById('score1').style.display='none';
        document.getElementById('done').innerHTML= 'Great !! <br> You Have Destroyed<br>' + a + ' Asteroids. <br> <button class="replay" onclick="replay()">Lets try again</button> '
        document.getElementById('done').style.display = 'flex';
    }}
function del()
{   okk.children[0].remove();
    document.getElementById('change').innerHTML = '1' ;
    crt();  
}
crt();
function clk(event){
    $(event).children(0).attr('src','out.gif')
    
    $(event).css({
        height: '0px',
        top: '200px'
    })
    $(event).animate({
        background: 'linear-gradient(transparent)',
        

    })
   
   
    $(event).children(0).animate({
        width: '300px',
        
    });
    document.getElementById('bm').innerHTML = '<audio id="boom" src="Boom.mp3"></audio>';
   document.getElementById('boom').play()
    var a = parseInt(document.getElementById('score1').innerText)
    
    document.getElementById('score1').innerText = a + 1
}
setInterval(function go(){
    if(parseInt(document.getElementById('count').innerHTML) > 0){
    let tm=parseInt(document.getElementById('count').innerHTML);
    document.getElementById('count').innerHTML = tm -1;}else{return false}
},1000)
function replay(){
    location.reload()
}