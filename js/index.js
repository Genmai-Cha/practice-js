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

// タブメニュー
// 参考: https://zenn.dev/kiriyama/articles/b42b6b0761b08d
const tabMenu = document.querySelectorAll('.tab-menu > li');
const tabBody = document.getElementsByClassName("tab-content")

tabMenu.forEach((menu) => {
    menu.addEventListener('click', (e) => {
        // 1. is-active classをもっているnodeを取得して、 一旦classを外す 
        // アクティブになっているのは常に1つだけの想定なので、0を指定する
        document.getElementsByClassName("is-active")[0].classList.remove("is-active");
        document.getElementsByClassName("is-tab-active")[0].classList.remove("is-tab-active");

        // 2. クリックしたところのtabとコンテンツをアクティブにする
        // 常時1つはアクティブにしたいため、toggle()は使わない
        e.target.classList.add("is-active");

        for (let index = 0; index < tabBody.length; index++) {
            // クリックしたtabのdata-tabとコンテンツのidが一緒の場合は、is-tab-activeを追加する
            if (e.target.dataset.tab === tabBody[index].id ) {
                tabBody[index].classList.add("is-tab-active");
            }
        }
    });
});
