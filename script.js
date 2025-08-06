let mode = document.getElementById('mode');
let sun = document.getElementById('sun');
let moon = document.getElementById('moon');
let skills = document.getElementsByClassName('skills');
let ulbox = document.getElementById('ulstyle');
let navlinks = document.getElementById('navlinks');

for (const element of skills) {
  element.classList.add('skillslight');
}
sun.classList.add('hide');
ulbox.classList.add('ullight');
navlinks.classList.add('navlinkslight');

mode.addEventListener('click', function () {
  if (sun.classList.contains('hide')) {
    sun.classList.remove('hide');
    moon.classList.add('hide');
  } else {
    sun.classList.add('hide');
    moon.classList.remove('hide');
  }

  document.getElementById('body').classList.toggle('dark');
  ulbox.classList.toggle('uldark');
  ulbox.classList.toggle('ullight');
  navlinks.classList.toggle('navlinksdark');
  navlinks.classList.toggle('navlinkslight');

  for (const element of skills) {
    element.classList.toggle('skillsdark');
    element.classList.toggle('skillslight');
  }

  let col = document.getElementsByClassName('dynamic');
  for (const element of col) {
    element.classList.toggle('textmode');
  }
});
