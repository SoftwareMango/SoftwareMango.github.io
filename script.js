const hamburger = document.querySelector('.hamburger');
const navul = document.querySelector('.navul');
const main = document.querySelector('.main');
const works = document.getElementById('portifolio');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navul.classList.toggle('active');
  main.classList.toggle('active');
});

document.querySelectorAll('.navitem').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navul.classList.remove('active');
  main.classList.remove('active');
}));

const projects = [
  {
    id: 'proj1',
    title: 'Websites with API',
    company: 'Mango',
    specialization: 'Back End Dev',
    year: 2023,
    description: 'An application programming interface is a way for two or more computer programs to communicate with each other.',
    technologies: {
      tech1: 'Python',
    },
    image: './images/api.png',
  },

  {
    id: 'proj2',
    title: 'CommandTech',
    company: 'Mango',
    specialization: 'FullStack Dev',
    year: 2023,
    description: "A desktop application for order control, inventory being connected with printing machines to facilitate all the attendant's work.",
    technologies: {
      tech1: 'Python'
    },
    image: './images/ct.jpg',
    live: 'https://rugwizangoga.github.io/Awesome-books-ES6/',
    source: 'https://github.com/rugwizangoga/Awesome-books-ES6.git',
  },
];
let count = 1;
projects.forEach((project) => {
  const newdiv = document.createElement('div');
  newdiv.innerHTML = `
  <div class="cards">
    <div class="image">
        <img src="${project.image}" alt="image">
    </div>
    <div class="desc">
        <h2 class="title">${project.title}</h2>
        <ul class="icons fav">
            <li class="cano">${project.company}</li>
            <li class="dev"><img src="./images/Counter.png" alt="dot">&nbsp; ${project.specialization}</li>
            <li class="dev"><img src="./images/Counter.png" alt="dot">&nbsp; ${project.year}</li>
        </ul>
        <p class="desctext">
        ${project.description}
        </p>
        <ul class="tech icons">
            <li class="techitems">${project.technologies.tech1}</li>
        </ul>
    </div>
  </div>`;
  works.append(newdiv);
});

const image = document.querySelectorAll('.image');
image.forEach((im) => {
  if (count % 2 === 0) {
    im.classList.add('two');
  }
  count += 1;
});

const seeproject = document.querySelectorAll('.see');
const overlay = document.getElementById('overlay');
const popup = document.querySelector('.popup');
const over = document.querySelector('.over');

seeproject.forEach((p) => p.addEventListener('click', (p) => {
  const { id } = p.target;
  const pop = projects.find((p) => p.id === id);
  popup.innerHTML = `
  <div class="titles">
    <div class="tile">
      <h2 class="title">${pop.title}</h2>
      <button class="close">&times;</button>
    </div>
    <ul class="icons fav">
      <li class="cano">${pop.company}</li>
      <li class="dev"><img src="./images/Counter.png" alt="dot">&nbsp; ${pop.specialization}</li>
      <li class="dev"><img src="./images/Counter.png" alt="dot">&nbsp; ${pop.year}</li>
    </ul>
    </div>
    <img src="${pop.image}" alt="live">
    <div class="explain">
      <p class="desctext">
        ${pop.description}
      </p>
      <div class="smart">
          <ul class="tech icons">
            <li class="techitems">${pop.technologies.tech1}</li>
          </ul>
      </div>
  </div>  `;

  const live = document.getElementById('live');
  const source = document.getElementById('source');

  live.addEventListener('click', () => {
    document.location.href = pop.live;
  });

  source.addEventListener('click', () => {
    document.location.href = pop.source;
  });

  overlay.classList.toggle('active');
  popup.classList.toggle('active');
  over.classList.toggle('active');

  const close = document.querySelector('.close');

  close.addEventListener('click', () => {
    popup.classList.remove('active');
    over.classList.remove('active');
    overlay.classList.remove('active');
  });
}));

const formdata = {
  yourname: '',
  youremail: '',
  yourmessage: '',
};

const fields = [...document.querySelectorAll('.names')];
fields.forEach((n) => n.addEventListener('change', () => {
  const index = fields.indexOf(n);
  if (index === 0) formdata.yourname = document.forms[0].elements[index].value;
  else if (index === 1) formdata.youremail = document.forms[0].elements[index].value;
  else formdata.yourmessage = document.forms[0].elements[index].value;

  window.localStorage.setItem('formdata', JSON.stringify(formdata));
}));

if (window.localStorage.getItem('formdata') !== null) {
  const formdata = JSON.parse(window.localStorage.getItem('formdata'));
  document.forms[0].elements[0].value = formdata.yourname;
  document.forms[0].elements[1].value = formdata.youremail;
  document.forms[0].elements[2].value = formdata.yourmessage;
}

const intouch = document.getElementById('intouch');

intouch.addEventListener('click', () => {
  const email = document.forms[0].elements[1].value;
  const small = document.getElementById('small');
  if (email.toLowerCase() !== email) {
    small.innerText = 'Enter your email in lower case letters';
    document.forms[0].addEventListener('submit', (event) => {
      event.preventDefault();
    });
  } else {
    document.forms[0].submit();
  }
});
