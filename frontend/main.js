
var images = [
            "C:/Users/a-janiecewu/OneDrive - Microsoft/Documents/photo_draw/images/Isaac.jpg",
            "C:/Users/a-janiecewu/OneDrive - Microsoft/Documents/photo_draw/images/sonia.jpg",
            "C:/Users/a-janiecewu/OneDrive - Microsoft/Documents/photo_draw/images/teddy.jpg",
            "C:/Users/a-janiecewu/OneDrive - Microsoft/Documents/photo_draw/images/Eileen.jpeg",
            "C:/Users/a-janiecewu/OneDrive - Microsoft/Documents/photo_draw/images/Julie.jpg",
            "C:/Users/a-janiecewu/OneDrive - Microsoft/Documents/photo_draw/images/Tracy.jpeg",
            "C:/Users/a-janiecewu/OneDrive - Microsoft/Documents/photo_draw/images/peggy.jpg",
            "C:/Users/a-janiecewu/OneDrive - Microsoft/Documents/photo_draw/images/Sasha.jpg",
            "C:/Users/a-janiecewu/OneDrive - Microsoft/Documents/photo_draw/images/Harris.png",
            "C:/Users/a-janiecewu/OneDrive - Microsoft/Documents/photo_draw/images/Jelie.jpeg"
            ];

var names = [
            "Isaac",
            "Sonia",
            "Teddy",
            "Eileen",
            "Julie",
            "Tracy",
            "Peggy",
            "Sasha",
            "Harris",
            "Jelie"
            ];

var things = [
            "我幼稚園畢業典禮的時候全班有一起演歌劇魅影 (The Phantom of the Opera) 我演的是男主角 我的青梅竹馬演 Christine",
            "小學五年級的時候 最好的朋友因為要出國所以提早考期中考 我就在他考試的教室門口外看著他一直哭...lol",
            "小時候太皮，跟同學玩到結果兩敗俱傷，自己頭破去醫院縫了 10 針",
            "坐在幼稚園馬桶上上廁所的時候, 喜歡的男生經過看光光",
            "自己剪頭髮剪超級短",
            "小時候因為名字很常被誤會是男生，在剛上小學時被校長問是不是代替同學領獎😂",
            "小時候聖誕節晚會的時候，被聖誕老公公嚇哭...",
            "小時候會分不清楚青蛙和烏龜",
            "小時候單純的我被我堂哥騙吃螞蟻:\ 他假裝拍螞蟻然後吃掉 我就很直接地拍死 + 吃掉 :<",
            "每天從幼稚園下課後都要吃魚麵線，但沒有比較聰明"
            ];


var index = 1;

function doSetTimeout(i) {
    index = 1;
    setTimeout(function () {
        console.log(index)
        if (index < images.length){
            document.getElementById('display-image').src = images[index]; 
            index++;
        }
        else {
            index = 1;}
    }, 200*i);
  }

function startDraw() {
    random_num = Math.floor(Math.random() * 15) + 25;
    console.log(random_num)
    for (var i = 1; i <= random_num; i++) {
        doSetTimeout(i)
    }
}

function showInfo() {
    console.log(index)
    // 圖片換位置
    // document.getElementById('display-image').style.right=10000 + "px";  
    // show/hide info
    document.getElementById('name').textContent = names[index-1];  
    document.getElementById('thing').textContent = things[index-1]; 

    var info = document.getElementById('info');
    if (info.style.display === "none") {
        info.style.display = "block";
    }
    else {
        info.style.display = "none";
    }
}

