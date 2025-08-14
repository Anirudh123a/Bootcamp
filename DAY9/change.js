    const con=document.getElementById('container');
    const arr=[
        "asset/one-piece-luffy-gear-5-3840x2160-10747.jpg",
        "asset/Pin de Antonio Pizzo em Spiderman em 2025 _ Imagem de fundo de computador Papel de parede do notebook Ideias de papel de parede.jpg",
    "asset/tanjiro-kamado-red-5120x2880-22577.png",
    "asset/Berserk\ Wallpaper\ QHD\ _\ Sfondo\ bianco\ e\ nero\ iphone\ Arte\ dei\ fumetti\ Sfondi\ per\ cellulare.jpg",
    "asset/Van Gogh Starry Night Wallpaper.jpg",


    ];
    let i=0;
    let changeimg=()=>{
           i++;
        if(i==5){
            i=0
        }
        con.style.backgroundImage=`url('${arr[i]}')`;
     
    }

    let previmg=()=>{
        i--;
        if(i==-1)
        {
            i=4;
        }
          con.style.backgroundImage=`url('${arr[i]}')`;
    }
    setInterval(changeimg, 3000);