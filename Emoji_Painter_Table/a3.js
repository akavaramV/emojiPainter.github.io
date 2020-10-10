
    var tbl = document.getElementById("tbl");
    var snd = document.getElementById("snd");
    var notes_display = document.getElementById("note");
    document.getElementById('rset').disabled = true;

    function aa(){
        a();
        document.getElementById('rset').disabled = false;
        document.getElementById('strt').disabled = true;
    }
    
    function a(){
    var i,j;

    for(i=0; i<tbl.rows.length; i++)
        for(j=0; j<tbl.rows[i].cells.length; j++){
            tbl.rows[i].cells[j].onmouseover = function (){
                changeColor(this), 
                clickSound();
            }
        }
    }

    function changeColor(cell){
        cell.style.backgroundColor = goColor();
        cell.style.backgroundImage = goMoji();
    }

    function goMoji(){
        var rand = Math.floor(Math.random()*10);
        var pic = ['url(angel.png)','url(cry.png)','url(devil.png)', 'url(fear.png)', 'url(happy.png)', 
        'url(sad.png)', 'url(shock.png)', 'url(sleep.png)', 'url(star.png)', 'url(suprise.png)'];
        return pic[rand];
    }

    function goColor(cell){
        var rand = Math.floor(Math.random()*20);
        var clr = ["red", "lime", "orange", "yellow", "blue", "aqua", "black", "crimson", "hotpink", "gold",
        "fuchsia", "gray", "green", "maroon", "navy", "olive", "purple", "silver", "teal", "white"];
        return clr[rand];
    }

    function resetAct(){
        location.reload();
    }

    function clickSound(){ 
        
        for(var i = 1; i < 4; i++){
            document.getElementById('snd'+i).play();
            document.getElementById('snd'+i).volume = 0.01;
        }
    
        for(var i = 0; i < 4; i++)
        //    document.getElementById('snd#')[i].play(); 
            document.querySelector('#snd' + i)[0].play();

        snd.play();
    } 

    function notes_reset(){
        notes_display.innerHTML = 'Reset Table?';
    }

    function notes_start(){
        notes_display.innerHTML = 'Unlock Table?';
    }

    function reg_mssg(){
        notes_display.innerHTML = 'Move cusor over each cell or Click reset&#128071to reset the table';
    }

    function act_mssg(){
        document.getElementById('note').innerHTML = "Click Start&#128071To Unlock Table";
    }
    
    


















