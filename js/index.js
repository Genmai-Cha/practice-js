// 質問部分が配列で取得できる
const questions = Array.from(document.getElementsByClassName("accordion-question"));

questions.map((question) => {
    question.addEventListener('click', () => {
        // 問題の同じ階層にある次のnode(回答)を取得する
        question.nextElementSibling.classList.toggle('accordion-answer-display');

        if (question.querySelector('span').classList.contains('triangle-close')) {
            question.querySelector('span').classList.remove('triangle-close');
            question.querySelector('span').classList.add('triangle-open');
        } else {
            question.querySelector('span').classList.remove('triangle-open'); 
            question.querySelector('span').classList.add('triangle-close');
        }
    })    
})
