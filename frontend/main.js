
var images = [
            "C:\Users\a-janiecewu\OneDrive - Microsoft\Documents\photo_draw\images\Isaac.jpg",
            "C:\Users\a-janiecewu\OneDrive - Microsoft\Documents\photo_draw\images\sonia.jpg",
            "C:\Users\a-janiecewu\OneDrive - Microsoft\Documents\photo_draw\images\teddy.jpg",
            "C:\Users\a-janiecewu\OneDrive - Microsoft\Documents\photo_draw\images\Eileen.jpeg",
            "C:\Users\a-janiecewu\OneDrive - Microsoft\Documents\photo_draw\images\Julie.jpg",
            "C:\Users\a-janiecewu\OneDrive - Microsoft\Documents\photo_draw\images\peggy.jpg",
            "C:\Users\a-janiecewu\OneDrive - Microsoft\Documents\photo_draw\images\Sasha.jpg",
            "C:\Users\a-janiecewu\OneDrive - Microsoft\Documents\photo_draw\images\Harris.png",
            "C:\Users\a-janiecewu\OneDrive - Microsoft\Documents\photo_draw\images\Jelie.jpeg",
            "C:\Users\a-janiecewu\OneDrive - Microsoft\Documents\photo_draw\images\Tracy.jpeg"
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

