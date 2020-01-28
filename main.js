const pies = [
  {
    type: "Apple",
    price: 1000,
    isWarm: true,
    isOrganic: false,
    imageUrl: "https://www.spendwithpennies.com/wp-content/uploads/2018/09/SpendWithPennies-Apple-Pie-Recipe-31-500x500.jpg",
    person: "Luke"
  },
  {
    type: "Apful",
    price: 10,
    isWarm: false,
    isOrganic: true,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fatkschool-production%2Fimage_assets%2Fimages%2F2078%2Fsmall.jpeg%3F1304964590&f=1&nofb=1",
    person: "Zoe"
  },
  {
    type: "Choc",
    price: 5,
    isWarm: true,
    isOrganic: false,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-ERZhQzNlrZY%2FUMni1RtDtUI%2FAAAAAAAADxQ%2FpO_op7MKlMw%2Fs1600%2Fpie_canon.jpg",
    person: "Mary"
  },
  {
    type: "Orange",
    price: 6,
    isWarm: true,
    isOrganic: false,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.tmbi.com%2Fsecure%2FRMS%2Fattachments%2F37%2F1200x1200%2Fexps21373_HCK153422D08_26_1b.jpg&f=1&nofb=1",
    person: "Mary"
  },
  {
    type: "Grape",
    price: 6,
    isWarm: false,
    isOrganic: false,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F_iWvbGTRmyWk%2FSxHa5yqn3iI%2FAAAAAAAAAJo%2FSeYirSalhoE%2Fs400%2Fgrape%2Bpie%2B2.jpg&f=1&nofb=1",
    person: "Luke"
  },
  {
    type: "Peach",
    price: 90000,
    isWarm: true,
    isOrganic: false,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frecipesrecipesrecipes.files.wordpress.com%2F2015%2F07%2Fraspberry-peach-pie.jpg&f=1&nofb=1",
    person: "Zoe"
  },
  {
    type: "Rose Petal",
    price: 1000,
    isWarm: false,
    isOrganic: false,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.frikkinawesome.com%2F2013%2F09%2Fapple-roses-pie-ready-to-bake.jpg&f=1&nofb=1",
    person: "Zoe"
  },
];

const printToDom = (divId, text) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = text;
}

const pieBuilder = (pieArray) => {
  let domString = '';
  for (let i = 0; i < pieArray.length; i++) {
    const org = (pieArray[i].isOrganic) ? '<p>It\'s organic!</p>' : '<p>It\'s not organic :/</p>';
    const warm = (pieArray[i].isWarm) ? '<p>Served Warm!</p>' : '<p>Served Not Warm :/</p>';
    domString += `
      <div class="pieCard" style="background-image: url(${pieArray[i].imageUrl})">
        <div class="innerPie">
          <h1>${pieArray[i].type}</h1>
          ${org}
          ${warm}
          <p>$${pieArray[i].price}</>
        </div>
      </div>
    `;
  }
  printToDom('pies', domString);
}

const findPies = (e) => pieBuilder(pies.filter((pie) => {pie.person === e.target.id}));

const allPies = (e) => pieBuilder(pies);

const events = () => {
  document.getElementById('Luke').addEventListener('click', findPies);
  document.getElementById('Mary').addEventListener('click', findPies);
  document.getElementById('Zoe').addEventListener('click', findPies);
  document.getElementById('All').addEventListener('click', allPies);  
}

const init = () => {
  pieBuilder(pies);
  events();
}

init();
