
var images = [
            "https://www.loveyourdog.com/wp-content/uploads/2019/04/Toy-Poodle-900x500.jpg",
            "https://thehappypuppysite.com/wp-content/uploads/2018/01/Toy-Poodle-HP-long.jpg",
            "https://emborapets.com/wp-content/uploads/2019/05/120860870_m-1.jpg",
            "https://i2-prod.mirror.co.uk/incoming/article6331055.ece/ALTERNATES/s615/PAY-dog.jpg",
            "https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/11/20/14/samson-instagramdogs-11-20-18.jpg?width=640"
            ]; 
var names = [
            "dog1",
            "dog2",
            "number3",
            "number4",
            "number5"
            ];

var things = [
            "thinng1我小時候去哪泥掰掰掰掰掰 掰掰掰。你好。嗨小時候去哪泥掰掰掰掰掰 掰掰掰。你好小時",
            "thinng2",
            "thinng3",
            "thinng4",
            "thinng5"
            ];


var index = 0;

function doSetTimeout(i) {
    setTimeout(function () {
        if (index < images.length){
            document.getElementById('display-image').src = images[index]; 
            index++;
        }
        else {
            index = 0;}
    }, 100*i);
  }

function startDraw(){
    random_num = Math.floor(Math.random() * 40) + 20;
    console.log(random_num)
    for(var i = 1; i <= random_num; i++) {
        doSetTimeout(i)
    }      
}

function showInfo(){
    // 圖片換位置
    document.getElementById('display-image').style.right=10000 + "px";  
    // show/hide info
    document.getElementById('name').textContent = names[index];  
    document.getElementById('thing').textContent = things[index]; 

    var info = document.getElementById('info');
    if (info.style.display === "none") {
        info.style.display = "block";
    }
    else {
        info.style.display = "none";
    }
}

