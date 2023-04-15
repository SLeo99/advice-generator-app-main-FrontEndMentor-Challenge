const url = 'https://api.adviceslip.com/advice';
const displayId = document.querySelector('.advice-generator__id');
const displayAdvice = document.querySelector('.advice-generator__advice');
const diceBtn = document.querySelector('.advice-generator__dice');

diceBtn.addEventListener('click', async()=> {
    let fetchAdvice = await fetch(url, {cache: 'no-cache'});
    let advicer = await fetchAdvice.json();
    displayId.innerText = ` #${advicer.slip.id}`;
    displayAdvice.innerText = `‘‘${advicer.slip.advice}’’`;
});