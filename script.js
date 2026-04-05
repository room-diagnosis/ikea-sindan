let roomType = "";
let scores = { A: 0, B: 0, C: 0 };
let current = 0;

const questions = [
  {
    text: "衣替えをするとしたら？",
    choices: [
      { label: "リビング（ファミリールーム）", value: "family" },
      { label: "自分の部屋（ワンルーム）", value: "one" }
    ]
  },
  {
    text: "この部屋はどんな場所？",
    choices: [
      { label: "集中・作業する「ON」の場所", value: "A" },
      { label: "趣味を詰め込む「ワクワク」の場所", value: "B" },
      { label: "心底ゆっくりする「OFF」の場所", value: "C" }
    ]
  },
  {
    text: "理想の収納スタイルは？",
    choices: [
      { label: "隠してスッキリ", value: "A" },
      { label: "飾って楽しむ", value: "B" },
      { label: "整えて落ち着く", value: "C" }
    ]
  },
  {
    text: "惹かれる色のイメージは？",
    choices: [
      { label: "白・モノトーン", value: "A" },
      { label: "カラフル", value: "B" },
      { label: "木・アースカラー", value: "C" }
    ]
  },
  {
    text: "家具の形の好みは？",
    choices: [
      { label: "直線", value: "A" },
      { label: "デザイン家具", value: "B" },
      { label: "丸み", value: "C" }
    ]
  },
  {
    text: "部屋の明るさは？",
    choices: [
      { label: "昼白色", value: "A" },
      { label: "春色", value: "B" },
      { label: "オレンジランプ", value: "C" }
    ]
  }
];

const results = {
  family: {
    A: {
      title: "Organic Essence Lover",
      desc:
        "「自然のぬくもりと、シンプルで心地よい暮らしを大切にする人」\n\n" +
        "・素材そのものの良さや、肌に触れる質感に敏感な「本質」を知っているタイプ。\n" +
        "・木の温もりや柔らかな曲線に囲まれることで、心のリズムを自然と整えられる人です。\n" +
        "・流行に左右されず、自分が本当に「心地よい」と感じるものを長く大切にする、誠実な感性の持ち主です。",
      img: "photo/1.jpg",
      surveyUrl: "https://forms.gle/CMxeCYZWbndvMiWq8",
      products: [
        { name: "おすすめ商品1", image: "photo/1p1.jpg", mapImage: "photo/1m1.jpg", spotLabel: "📍タップして場所を見る" },
        { name: "おすすめ商品2", image: "photo/1p2.jpg", mapImage: "photo/1m2.jpg", spotLabel: "📍タップして場所を見る" },
        { name: "おすすめ商品3", image: "photo/1p3.jpg", mapImage: "photo/1m3.jpg", spotLabel: "📍タップして場所を見る" },
        { name: "おすすめ商品4", image: "photo/1p4.jpg", mapImage: "photo/1m4.jpg", spotLabel: "📍タップして場所を見る" }
      ]
    },
    B: {
      title: "Colorful Story Lover",
      desc:
        "「色や遊び心で、毎日を自分らしく彩る人」\n\n" +
        "・お部屋を自分という物語を表現する「キャンバス」のように捉え、自由に楽しむタイプ。\n" +
        "・鮮やかな色やユニークな小物をミックスして、日常の中に小さな感動やワクワクを自分自身で創り出せる人です。\n" +
        "・既存のルールに縛られない自由な発想を持ち、周りの人まで明るくするようなエネルギッシュな魅力に溢れています。",
      img: "photo/2.jpg",
      surveyUrl: "https://forms.gle/CMxeCYZWbndvMiWq8",
      products: [
        { name: "おすすめ商品1", image: "photo/2p1.jpg", mapImage: "photo/2m1.jpg", spotLabel: "📍タップして場所を見る" },
        { name: "おすすめ商品2", image: "photo/2p2.jpg", mapImage: "photo/2m2.jpg", spotLabel: "📍タップして場所を見る" },
        { name: "おすすめ商品3", image: "photo/2p3.jpg", mapImage: "photo/2m3.jpg", spotLabel: "📍タップして場所を見る" },
        { name: "おすすめ商品4", image: "photo/2p4.jpg", mapImage: "photo/2m4.jpg", spotLabel: "📍タップして場所を見る" }
      ]
    },
    C: {
      title: "Deep Comfort Lover",
      desc:
        "「落ち着いた空間で、深いくつろぎの時間を楽しむ人」\n\n" +
        "・喧騒から離れ、静寂や「凪」の時間を何よりも贅沢だと感じられるタイプ。\n" +
        "・シックな色使いや落ち着いた照明の中で、一日の終わりに自分自身を深く癒やす術を知っている人です。\n" +
        "・落ち着きと品格を兼ね備え、細部にまでこだわりを宿らせることで、上質な「大人の休日」を演出できる達人です。",
      img: "photo/3.jpg",
      surveyUrl: "https://forms.gle/CMxeCYZWbndvMiWq8",
      products: [
        { name: "おすすめ商品1", image: "photo/3p1.jpg", mapImage: "photo/3m1.jpg", spotLabel: "📍タップして場所を見る" },
        { name: "おすすめ商品2", image: "photo/3p2.jpg", mapImage: "photo/3m2.jpg", spotLabel: "📍タップして場所を見る" },
        { name: "おすすめ商品3", image: "photo/3p3.jpg", mapImage: "photo/3m3.jpg", spotLabel: "📍タップして場所を見る" },
        { name: "おすすめ商品4", image: "photo/3p4.jpg", mapImage: "photo/3m4.jpg", spotLabel: "📍タップして場所を見る" }
      ]
    }
  },

  one: {
    A: {
      title: "Pure Modern Lover",
      desc:
        "「真っ白なキャンバスに思考を広げ、クリアな毎日を整える人」\n\n" +
        "・無駄を削ぎ落とした空間で、自分のやりたいことに真っ直ぐ集中できるタイプ。\n" +
        "・思考をリセットできる白の魔法を使いこなし、常に「今の自分」をアップデートし続けるスマートな感性の持ち主です。",
      img: "photo/4.jpg",
      surveyUrl: "https://forms.gle/CMxeCYZWbndvMiWq8",
      products: [
        { name: "おすすめ商品1", image: "photo/4p1.jpg", mapImage: "photo/4m1.jpg", spotLabel: "📍タップして場所を見る" },
        { name: "おすすめ商品2", image: "photo/4p2.jpg", mapImage: "photo/4m2.jpg", spotLabel: "📍タップして場所を見る" },
        { name: "おすすめ商品3", image: "photo/4p3.jpg", mapImage: "photo/4m3.jpg", spotLabel: "📍タップして場所を見る" },
        { name: "おすすめ商品4", image: "photo/4p4.jpg", mapImage: "photo/4m4.jpg", spotLabel: "📍タップして場所を見る" }
      ]
    },
    B: {
      title: "Joyful Mood Lover",
      desc:
        "「お気に入りの色や物に囲まれ、日常にワクワクを灯す人」\n\n" +
        "・部屋をただの場所ではなく、自分のエネルギーを充電する「パワースポット」に変えられるタイプ。\n" +
        "・直感を大切に、好きなものに囲まれて笑いながら過ごす、自由でポジティブな心の持ち主です。",
      img: "photo/5.jpg",
      surveyUrl: "https://forms.gle/CMxeCYZWbndvMiWq8",
      products: [
        { name: "おすすめ商品1", image: "photo/5p1.jpg", mapImage: "photo/5m1.jpg", spotLabel: "📍タップして場所を見る" },
        { name: "おすすめ商品2", image: "photo/5p2.jpg", mapImage: "photo/5m2.jpg", spotLabel: "📍タップして場所を見る" },
        { name: "おすすめ商品3", image: "photo/5p3.jpg", mapImage: "photo/5m3.jpg", spotLabel: "📍タップして場所を見る" },
        { name: "おすすめ商品4", image: "photo/5p4.jpg", mapImage: "photo/5m4.jpg", spotLabel: "📍タップして場所を見る" },
        { name: "おすすめ商品5", image: "photo/5p5.jpg", mapImage: "photo/5m5.jpg", spotLabel: "📍タップして場所を見る" }
      ]
    },
    C: {
      title: "Soft Navy Lover",
      desc:
        "「静かな時間の深みと、心に寄り添う柔らかさを知っている人」\n\n" +
        "・落ち着いた色味の中に、自分だけのこだわりや優しさをそっと忍ばせるタイプ。\n" +
        "・派手さよりも「質の良さ」や「こなれ感」を大切にし、穏やかな時間の流れを贅沢に味わえる、大人の余裕の持ち主です。",
      img: "photo/6.jpg",
      surveyUrl: "https://forms.gle/CMxeCYZWbndvMiWq8",
      products: [
        { name: "おすすめ商品1", image: "photo/6p1.jpg", mapImage: "photo/6m1.jpg", spotLabel: "📍タップして場所を見る" },
        { name: "おすすめ商品2", image: "photo/6p2.jpg", mapImage: "photo/6m2.jpg", spotLabel: "📍タップして場所を見る" },
        { name: "おすすめ商品3", image: "photo/6p3.jpg", mapImage: "photo/6m3.jpg", spotLabel: "📍タップして場所を見る" },
        { name: "おすすめ商品4", image: "photo/6p4.jpg", mapImage: "photo/6m4.jpg", spotLabel: "📍タップして場所を見る" }
      ]
    }
  }
};

function showQuestion() {
  const q = questions[current];

  document.getElementById("question").innerText = q.text;
  document.getElementById("progress").innerText = "Q" + (current + 1) + " / " + questions.length;

  const progressFill = document.getElementById("progressFill");
  if (progressFill) {
    progressFill.style.width = ((current + 1) / questions.length) * 100 + "%";
  }

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  q.choices.forEach((c) => {
    const btn = document.createElement("button");
    btn.innerText = c.label;
    btn.onclick = () => answer(c.value);
    choicesDiv.appendChild(btn);
  });
}

function answer(value) {
  if (current === 0) {
    roomType = value;
  } else {
    scores[value]++;
  }

  current++;

  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function calculateResult() {
  let max = "A";
  if (scores.B > scores[max]) max = "B";
  if (scores.C > scores[max]) max = "C";
  return max;
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("loadingScreen").style.display = "block";
  document.getElementById("result").style.display = "none";

  setTimeout(realShowResult, 800);
}

function realShowResult() {
  const type = calculateResult();
  const result = results[roomType] && results[roomType][type];

  if (!result) {
    alert("結果データが見つかりませんでした");
    document.getElementById("loadingScreen").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    return;
  }

  document.getElementById("loadingScreen").style.display = "none";
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";

  document.getElementById("resultTitle").innerText = result.title;
  document.getElementById("resultTitle").style.color = getResultColor(roomType, type);
  document.getElementById("resultDescription").innerHTML = result.desc.replace(/\n/g, "<br>");
  document.getElementById("resultImage").src = result.img;

  const surveyButton = document.getElementById("surveyButton");
  surveyButton.href = result.surveyUrl || "#";

  renderProducts(result.products || []);
  setupShareButtons(result);
}

function renderProducts(products) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  products.forEach((product) => {
    const item = document.createElement("div");
    item.className = "product-item";

    const image = document.createElement("img");
    image.className = "product-image";
    image.src = product.image;
    image.alt = product.name;
    image.onclick = () => openMapModal(product.mapImage, product.name);

    const button = document.createElement("button");
    button.className = "map-button";
    button.type = "button";
    button.innerText = product.spotLabel || "📍タップして場所を見る";
    button.onclick = () => openMapModal(product.mapImage, product.name);

    item.appendChild(image);
    item.appendChild(button);
    productList.appendChild(item);
  });
}

function setupShareButtons(result) {
  const hashtag = "IKEA版部屋タイプ診断";
  const cleanDesc = result.desc.replace(/\n/g, " ");
  const shareText =
    "私の結果は " +
    result.title +
    "！\n" +
    cleanDesc +
    "\n#" + hashtag;

  const shareUrl = window.location.href;

  const xShareButton = document.getElementById("xShareButton");
  xShareButton.onclick = function () {
    const xUrl =
      "https://twitter.com/intent/tweet?text=" +
      encodeURIComponent(shareText) +
      "&url=" +
      encodeURIComponent(shareUrl);
    window.open(xUrl, "_blank");
  };

  const instaShareButton = document.getElementById("instaShareButton");
  instaShareButton.onclick = function () {
    alert("この画面をスクリーンショットしてInstagramに投稿しよう！");
    window.open("https://www.instagram.com/", "_blank");
  };
}

function openMapModal(mapImage, productName) {
  const modal = document.getElementById("mapModal");
  const modalImage = document.getElementById("mapModalImage");

  modalImage.src = mapImage;
  modalImage.alt = productName + " の売り場マップ";
  modal.style.display = "flex";
}

function closeMapModal() {
  const modal = document.getElementById("mapModal");
  const modalImage = document.getElementById("mapModalImage");

  modal.style.display = "none";
  modalImage.src = "";
}

function restartQuiz() {
  current = 0;
  roomType = "";
  scores = { A: 0, B: 0, C: 0 };

  document.getElementById("loadingScreen").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById("quiz").style.display = "block";

  closeMapModal();
  showQuestion();
}

document.getElementById("closeModal").addEventListener("click", closeMapModal);

document.getElementById("mapModal").addEventListener("click", function (e) {
  if (e.target.id === "mapModal") {
    closeMapModal();
  }
});

showQuestion();
function getResultColor(roomType, type){

  // ファミリールーム
  if(roomType === "family" && type === "A") return "#6b8e23"; // ナチュラル（緑）
  if(roomType === "family" && type === "B") return "#e75480"; // ピンク
  if(roomType === "family" && type === "C") return "#5a4a42"; // ダークブラウン

  // ワンルーム
  if(roomType === "one" && type === "A") return "#0058A3";   // IKEAブルー
  if(roomType === "one" && type === "B") return "#f4c430";   // イエロー
  if(roomType === "one" && type === "C") return "#2c3e50";   // ネイビー

  return "#333"; // 予備
}