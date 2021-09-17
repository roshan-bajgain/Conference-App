const btnmenu = document.querySelector('.navbar-toggler');

let openClose = -1;

function Menu() {
  if (openClose === -1) {
    btnmenu.innerHTML = "<span aria-hidden='true'>&times;</span>";
    openClose = 1;
  } else if (openClose === 1) {
    btnmenu.innerHTML = "<span class='navbar-toggler-icon'></span>";
    openClose = -1;
  }
}

btnmenu.addEventListener('click', Menu);

const programInfo = [
  {
    icon: 'img/icons/podium-with-speaker.png',
    session: 'Lecture',
    activity: 'Listen to speaks form different fields of web development and learn the recent advances in web technology',
  },
  {
    icon: 'img/icons/exhibition.png',
    session: 'Exhibition',
    activity: 'Appreciate the history and achievement of web technology in all fields of industry',
  },
  {
    icon: 'img/icons/comment-discussion.png',
    session: 'Forum',
    activity: 'Take the time to share your thoughts and opinion with experts for interested topic',
  },
  {
    icon: 'img/icons/external-teamwork-business-vitaliy-gorbachev-lineal-vitaly-gorbachev.png',
    session: 'Workshop',
    activity: 'Try creating your own work with your teammates',
  },
  {
    icon: 'img/icons/social-network.png',
    session: 'Network',
    activity: 'Get opportunities to network with developers around the world',
  },
];

const programs = document.querySelector('#program-div');

let programHtml = '';
programInfo.forEach((element) => {
  programHtml += ` 
    <div class="container session-box col-10 col-md-2">
    <div class="row align-items-center session-content">
    <div class="imgdiv col-2 col-md-12">
    <img src="${element.icon}" alt="${element.session}">
    </div>
    <div class="session col-2 col-md-12">
    <p>${element.session}</p>
    </div>
    <div class="activity col-8 col-md-12">
    <p>${element.activity}</p>
    </div>
    </div>
    </div>
    `;
});

programs.innerHTML = programHtml;

const speakerInfo = [
  {
    name: 'Ben Frain',
    photo: 'img/speakers/composed/ben_frain.jpg',
    role: 'UI-UX Technical Lead at bet365',
    about: 'Ben Frain has been a web designer/developer since 1996, having graduated from Salford University with a degree in Media and Performance. ',
  },
  {
    name: 'Jennifer Kyrnin',
    photo: 'img/speakers/composed/jennifer_kyrnin.jpg',
    role: 'Web Technology Writer',
    about: 'Jennifer has been writing about web design and development since 1997, and working in the field since 1995.',
  },
  {
    name: 'Rob Larsen',
    photo: 'img/speakers/composed/rob_larson.jpg',
    role: 'Software Architect',
    about: 'Rob is an experienced front end engineer, author and open-source contributor.',
  },
  {
    name: 'David DuRocher',
    photo: 'img/speakers/composed/David_DuRocher.jpg',
    role: 'Leonard N. Stern School of Business at New York University.',
    about: 'web design instructor, author, and 10+ year veteran at a Fortune 500 tech company. With extensive web development education experience',
  },
  {
    name: 'Prateek Jadhwani',
    photo: 'img/speakers/composed/prateek_jadhwani.jpg',
    role: 'Front-end developer',
    about: ' Prateek is a developer who specializes in front-end technologies, living and working in US.',
  },
  {
    name: 'Mary Delamater',
    photo: 'img/speakers/composed/mary_delamater.jpg',
    role: 'Front-end developer',
    about: 'Mary Delamater has been building applications for clients since 2006. ',
  },
];

const lessSpeaker = document.querySelector('#speaker-less');

let lessHtml = '';
let allHtml = '';
const lessNum = 2;
const allNum = speakerInfo.length;

for (let i = 0; i < lessNum; i += 1) {
  lessHtml += ` 
    <div class="speaker row align-items-center">
    <div class="col-5 col-sm-4 col-xl-3 align-self-start">
    <img src="${speakerInfo[i].photo}"  alt="${speakerInfo[i].name}">
    </div>
    <div class="col-7 col-sm-8 col-xl-9 ">
    <ul>
    <li class="name">${speakerInfo[i].name}</li>
    <li class="role">${speakerInfo[i].role}</li>
    <li><hr class="hr-role" ></li>
    <li class="desc">${speakerInfo[i].about}</li>
    </ul>
    </div>
    </div>
    `;
}
lessSpeaker.innerHTML = lessHtml;

const showAllSpeaker = document.querySelector('#speaker-all');
const allSpeaker = document.querySelector('#speaker-all div');

for (let i = 0; i < allNum; i += 1) {
  allHtml += ` 
    <div class="col">
    <div class="speaker row align-items-center">
    <div class="col-5 col-sm-4 col-xl-3 align-self-start">
    <img src="${speakerInfo[i].photo}"  alt="${speakerInfo[i].name}">
    </div>
    <div class="col-7 col-sm-8 col-xl-9">
    <ul>
    <li class="name">${speakerInfo[i].name}</li>
    <li class="role">${speakerInfo[i].role}</li>
    <li><hr class="hr-role" ></li>
    <li class="desc">${speakerInfo[i].about}</li>
    </ul>
    </div>
    </div>
    </div>
    `;
}
allSpeaker.innerHTML = allHtml;

const showMore = document.querySelector('#show-more');
const showLess = document.querySelector('#show-less');

function showSpeakers() {
  lessSpeaker.style.display = 'none';
  showAllSpeaker.style.display = 'block';
  showMore.style.display = 'none';
  showLess.style.display = 'inline-block';
}

showMore.addEventListener('click', showSpeakers);

function closeSpeakers() {
  lessSpeaker.style.display = 'block';
  showAllSpeaker.style.display = 'none';
  showMore.style.display = 'inline-block';
  showLess.style.display = 'none';
}

showLess.addEventListener('click', closeSpeakers);