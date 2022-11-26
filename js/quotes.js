const quotes = [
  {
    quote:"늦었다고 생각할 때가 진짜 너무 늦었다",
    author:"박명수",
  },
  {
    quote:"꿈은 없고요. 그냥 놀고 싶습니다",
    author:"명수옹",
  },
  {
    quote:"흘러가는 대로 살자",
    author:"최지원",
  },
  {
    quote:"너에게는 꿈을 이루기 위한 시간이 아직 충분히 있어!",
    author:"피터팬",
  },
  {
    quote:"오늘의 특별한 순간들은 내일의 추억이야",
    author:"알라딘",
  },
  {
    quote:"사랑은 다른 사람의 행복이 나의 행복을 결정짓는 아름다운 현상이야",
    author:"피노키오",
  },
  {
    quote:"매일, 매분, 매초 인생을 바꿀 수 있는 기회가 있어",
    author:"덤보",
  },
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;