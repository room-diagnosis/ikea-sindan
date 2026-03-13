
// Q0 部屋タイプ
let roomType = "";

// 回答カウント
let scores = {
A:0,
B:0,
C:0
};

// 質問
const questions = [

{
text:"衣替えをするとしたら？",
choices:[
{label:"リビング（ファミリールーム）", value:"family"},
{label:"自分の部屋（ワンルーム）", value:"one"}
]
},

{
text:"この部屋はどんな場所？",
choices:[
{label:"集中・作業する「ON」の場所", value:"A"},
{label:"趣味を詰め込む「ワクワク」の場所", value:"B"},
{label:"心底ゆっくりする「OFF」の場所", value:"C"}
]
},

{
text:"理想の収納スタイルは？",
choices:[
{label:"隠してスッキリ", value:"A"},
{label:"飾って楽しむ", value:"B"},
{label:"整えて落ち着く", value:"C"}
]
},

{
text:"惹かれる色は？",
choices:[
{label:"白・モノトーン", value:"A"},
{label:"カラフル", value:"B"},
{label:"木・アースカラー", value:"C"}
]
},

{
text:"家具の形の好みは？",
choices:[
{label:"直線", value:"A"},
{label:"デザイン家具", value:"B"},
{label:"丸み", value:"C"}
]
},

{
text:"部屋の明るさは？",
choices:[
{label:"昼白色", value:"A"},
{label:"春色", value:"B"},
{label:"オレンジランプ", value:"C"}
]
}

];


// 結果データ
const results = {

family:{
A:{
title:"Organic Essence Lover",
desc:"自然のぬくもりと、シンプルで心地よい暮らしを大切にする人\n• 素材そのものの良さや、肌に触れる質感に敏感な「本質」を知っているタイプ。\n• 木の温もりや柔らかな曲線に囲まれることで、心のリズムを自然と整えられる人です。\n• 流行に左右されず、自分が本当に「心地よい」と感じるものを長く大切にする、誠実な感性の持ち主です。",
img:"画像1.jpg",
url:""
},
B:{
title:"Colorful Story Lover",
desc:"色や遊び心で、毎日を自分らしく彩る人\n• お部屋を自分という物語を表現する「キャンバス」のように捉え、自由に楽しむタイプ。\n• 鮮やかな色やユニークな小物をミックスして、日常の中に小さな感動やワクワクを自分自身で創り出せる人です。\n• 既存のルールに縛られない自由な発想を持ち、周りの人まで明るくするようなエネルギッシュな魅力に溢れています。",
img:"画像2.jpg",
url:""
},
C:{
title:"Deep Comfort Lover",
desc:"落ち着いた空間で、深いくつろぎの時間を楽しむ人\n• 喧騒から離れ、静寂や「凪」の時間を何よりも贅沢だと感じられるタイプ。\n• シックな色使いや落ち着いた照明の中で、一日の終わりに自分自身を深く癒やす術を知っている人です。\n• 落ち着きと品格を兼ね備え、細部にまでこだわりを宿らせることで、上質な「大人の休日」を演出できる達人です。",
img:"画像3.jpg",
url:""
}
},

one:{
A:{
title:"Pure Modern Lover",
desc:"真っ白なキャンバスに思考を広げ、クリアな毎日を整える人\n• 無駄を削ぎ落とした空間で、自分のやりたいことに真っ直ぐ集中できるタイプ。\n• 思考をリセットできる白の魔法を使いこなし、常に「今の自分」をアップデートし続けるスマートな感性の持ち主です。",
img:"画像4.jpg",
url:""
},
B:{
title:"Joyful Mood Lover",
desc:"お気に入りの色や物に囲まれ、日常にワクワクを灯す人\n• 部屋をただの場所ではなく、自分のエネルギーを充電する「パワースポット」に変えられるタイプ。\n• 直感を大切に、好きなものに囲まれて笑いながら過ごす、自由でポジティブな心の持ち主です。",
img:"画像5.jpg",
url:""
},
C:{
title:"Soft Navy Lover",
desc:"静かな時間の深みと、心に寄り添う柔らかさを知っている人\n• 落ち着いた色味の中に、自分だけのこだわりや優しさをそっと忍ばせるタイプ。\n• 派手さよりも「質の良さ」や「こなれ感」を大切にし、穏やかな時間の流れを贅沢に味わえる、大人の余裕の持ち主です。",
img:"画像6.jpg",
url:""
}
}

};


let current = 0;

function showQuestion(){

const q = questions[current];

document.getElementById("question").innerText = q.text;

const choicesDiv = document.getElementById("choices");
choicesDiv.innerHTML = "";

q.choices.forEach(c => {

const btn = document.createElement("button");

btn.innerText = c.label;

btn.onclick = () => answer(c.value);

choicesDiv.appendChild(btn);

});

}


function answer(value){

// 最初の質問
if(current === 0){

roomType = value;

}else{

scores[value]++;

}

current++;

if(current < questions.length){

showQuestion();

}else{

showResult();

}

}


// 集計ロジック（あとで変更しやすい）
function calculateResult(){

let max = "A";

if(scores.B > scores[max]) max = "B";
if(scores.C > scores[max]) max = "C";

return max;

}


function showResult(){

let type = calculateResult();

let result = results[roomType][type];

document.getElementById("quiz").style.display="none";

document.getElementById("result").style.display="block";

document.getElementById("resultTitle").innerText=result.title;

document.getElementById("resultDescription").innerText=result.desc;

document.getElementById("resultImage").src=result.img;

document.getElementById("productLink").href=result.url;

}


showQuestion();
