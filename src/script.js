Vue.createApp({
  data() {
    return {
      userName: "John Doe",
      attrHeadline: "This is a ''Attribute Binding'' practice",
      conRenHeadline: "This is a ''Conditional Rendering'' practice",
      LRHeadline: "This is a ''List Rendering'' practice",
      comPropsHeadline: "This is a ''Computed Properties & Methods'' practice",
      ranQsHeadline: "Random Trivial Questions and Answers",
      imgAttr: {
        src: "https://picsum.photos/500/200",
        alt: "A random 500 x 200 sized picture",
      },
      activeTab: 1,
      tabImg1: {
        src: "https://picsum.photos/500/100",
        alt: "A random 500 x 100 sized picture",
      },
      tabImg2: {
        src: "https://picsum.photos/500/200",
        alt: "A random 500 x 200 sized picture",
      },
      tabImg3: {
        src: "https://picsum.photos/500/300",
        alt: "A random 500 x 300 sized picture",
      },
      books: [
        {
          title: "Practical Rust Web Projects",
          isbn: "9781484265888",
          author: "Shing Lyu",
          publisher: "Apress",
          price: "$28.75",
          numPages: 256,
        },
        {
          title: "Using WebPagetest",
          isbn: "9781491902592",
          author: "Rick Viscomi, Andy Davies, Marcel Duran",
          publisher: "O'Reilly Media",
          price: "$25.80",
          numPages: 214,
        },
        {
          title: "Web Scraping with Python",
          isbn: "9781491910290",
          author: "Ryan Mitchell",
          publisher: "O'Reilly Media",
          price: "$14.00",
          numPages: 256,
        },
        {
          title: "High Performance Mobile Web",
          isbn: "9781491912553",
          author: "Maximiliano Firtman",
          publisher: "O'Reilly Media",
          price: "$7.00",
          numPages: 326,
        },
      ],
      ranQs: [
        {
          question:
            "In a website browser address bar, what does ''www'' stand for?",
          answer: "World Wide Web",
          show: false,
        },
        {
          question: "In what year were the first Air Jordan sneakers released?",
          answer: "1984",
          show: false,
        },
        {
          question:
            "In a bingo game, which number is represented by the phrase “two little ducks”?",
          answer: "22",
          show: false,
        },
        {
          question:
            "According to Greek mythology, who was the first woman on earth?",
          answer: "Pandora",
          show: false,
        },
        {
          question:
            "Samuel Tilden, Grover Cleveland, Al Gore, and Hillary Clinton share what distinction among U.S. presidential candidates?",
          answer:
            "They won the popular vote but lost the electoral college vote",
        },
        {
          question: "Which African country was formerly known as Abyssinia?",
          answer: "Ethiopia",
          show: false,
        },
        {
          question:
            "Tennis star Serena Williams won which major tournament while pregnant with her first child?",
          answer: "The Australian Opens",
          show: false,
        },
        {
          question: "In which European city would you find Orly airport?",
          answer: "Paris",
          show: false,
        },
        {
          question:
            "Which singer’s real name is Stefani Joanne Angelina Germanotta?",
          answer: "Lady Gaga",
          show: false,
        },
        {
          question:
            "The only known monotremes in the animal kingdom are the echidna and which other creature?",
          answer: "The platypus",
          show: false,
        },
      ],
      showFaq: false,
    };
  },
  computed: {},
  methods: {
    toggleShowAnswer() {
      item.show = !item.show;
    },
  },
}).mount("#app");

let timestamp = currentDate();

function currentDate() {
  return new Date().toLocaleString("en-us");
}
