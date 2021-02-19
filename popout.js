const mediaDiv = document.querySelector(".media");
const mediaGif = document.querySelector(".catsGif");
const countNumber = document.querySelector(".counts");
const clickSound = new Audio("bgm/poock.wav");
const messageShow = document.querySelector(".message");

const messageDB = [
    '스트레스를 받으셨군요...',
    '귀여운 아이들이 대신 풀어드릴거에요...',
    '1초에 두 번씩 두드리면서...',
    '목탁소리에 집중해보세요...',
    '심호흡을 하면 더 좋을거에요...',
    '정말 뭣같았으셨죠?...',
    '이 녀석들을 보세요...',
    '웃음이 지어지지 않나요...?',
    '아닌것 같네요...',
    '스스로를 공주라고 생각해보세요 :)',
    '당신이 마동석같은 남자라도 말이죠 >_^',
    '나는 공주고',
    '지금 이 일은 취미로 하는거다.',
    '나는 요정 공주고',
    '지금 이 스트레스는 요정 나라 백성들을 위해 내가 대신 받는 고통이다.',
    '나는 마계의 어둠 공주고',
    '지금 이 스트레스는 나의 흑마력을 채우기 위한 악이다.',
    '조금 진정이 돼나요?....',
    '역시나 아닌것 같네요...',
    '정말 좆같으셨군요....',
    '이 어플이 아니었다면 오늘밤 당신은 치킨을 시켜먹었을 거에요...',
    '돈으로 살을 사는 마법이죠',
    '그런데 지금 당신을 보니 그냥 먹는것도 괜찮을것 같아 보이네요.',
    '아니 아직도 클릭한다고?',
    '진정하세요... ',
    '무슨일이 있었던거에요?',
    '잠시 쉬는 시간을 갖도록 해봐요...',
    '생각을 비우는 거에요...',
    '멍....하게요... ',
    '멍.....',
    '다시 한번 머엉.....',
    '어때요 좀 도움이 돼나요?',
    '아닌것 같네요...',
    '제가 스트레스를 푸는 방법을 가르쳐 드릴게요...',
    '자 지금부터 제가 하는말을 따라 해주세요.',
    '시',
    '발',
    '개',
    '자식아',
    '니',
    '미',
    '뽕이다.',
    '큰소리로 하면 더 좋아요...',
    '사무실이나 강의실에서 하면 더욱 좋죠...',
    '뒷일은 그때 가서 생각해요...',
    '아니 근데 언제 까지 클릭할 거에요....',
    '이쯤 되면 풀리지 않나?',
    '...',
    '클릭수를 보니 이 어플이 아니었다면 당신은 저녁을 먹다 갑자기 주먹으로 밥을 뿌셔버렸을거에요...',
    '집에서 쫒겨날뻔 했네요...',
    '정말 다행이에요..',
    '근데 한번쯤 해보세요...',
    '뒷일은 그 때 가서 생각하구요...',
    '정말 겁나게 힘드셨군요...',
    '하아...',
    '저도 점점...',
    '분노가 전달되는데요???!',
    '하아.... (부들부들)',
    '하아아아..... (부들부들부들)',
    '하아아아아ㅏㅏㅏㅏ........!! (부들바들빠들)',
    '하앙♡',
    '우리 마지막은 하앙♡으로 끝내봐요.',
    '이 정도면 클릭질 하지마시고 병원을 가야할것 같은데요?',
    '딱 보니 조금만 더 열받았으면 바로 누군가 뚝배기를 날렸을것 같네요...',
    '이 어플이 아니었다면 감옥에 갈 뻔 했어요...',
    '정말 다행이에요.',
    '아니 근데 진짜 언제까지 클릭할 거에요?',
    '그정도로 개빡치신건가요?',
    '이정도면 차라리 술 담배를 배우는게 건강하겠네요.',
    '스트레스는 만병의 근원이라잖아요.',
    '아오 totw5701@naver.com 연락해요. 개 빡치신거 같은데 쏘주나 한 잔 합시다!'
];

let count = 0;
let gifNumber = Math.floor(Math.random() * 25) + 1;
let messageNum = 1;

function paintText(){
    countNumber.innerText = count;
    if(count%8 === 0){
        messageShow.innerText = `${messageDB[messageNum]}`;
        if(messageNum > 69){
            messageNum === 70;
        } else{
            messageNum += 1;
        }
    } else if (count === 1){
        messageShow.innerText = `${messageDB[0]}`;
    }

}

function changeGif(){
    if(count%8 === 0){
        gifNumber = Math.floor(Math.random() * 25) + 1;
    }
}

function paintGif(){
    clickSound.play();
    mediaGif.src= `cats/${gifNumber}.gif`;
    count += 1;
    changeGif();
}

function init(){
    console.log("hello")
    mediaDiv.addEventListener("click", paintGif);
    mediaDiv.addEventListener("click", paintText);
    
}

init();


/*
mediaDiv.removeChild(mediaGif);
    const createGif = document.createElement("img");
    mediaDiv.appendChild(createGif);

    */