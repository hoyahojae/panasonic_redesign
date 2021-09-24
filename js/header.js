// #consumer
document.querySelector('#consumer').addEventListener('mouseover', function () {
  document.querySelector('.sub_menu.card1').classList.add('on');
});
document.querySelector('.consumer_menu').addEventListener('mouseover', function () {
  document.querySelector('.sub_menu.card1').classList.add('on');
  document.querySelector('#consumer').classList.add('on');
});

document.querySelector('#consumer').addEventListener('mouseout', function () {
  document.querySelector('.sub_menu.card1').classList.remove('on');
});
document.querySelector('.consumer_menu').addEventListener('mouseout', function () {
  document.querySelector('.sub_menu.card1').classList.remove('on');
  document.querySelector('#consumer').classList.remove('on');
});

// #business
document.querySelector('#business').addEventListener('mouseover', function () {
  document.querySelector('.sub_menu.card2').classList.add('on');
});
document.querySelector('.business_menu').addEventListener('mouseover', function () {
  document.querySelector('.sub_menu.card2').classList.add('on');
  document.querySelector('#business').classList.add('on');
});

document.querySelector('#business').addEventListener('mouseout', function () {
  document.querySelector('.sub_menu.card2').classList.remove('on');
});
document.querySelector('.business_menu').addEventListener('mouseout', function () {
  document.querySelector('.sub_menu.card2').classList.remove('on');
  document.querySelector('#business').classList.remove('on');
});

// #support
document.querySelector('#support').addEventListener('mouseover', function () {
  document.querySelector('.sub_menu.card3').classList.add('on');
});
document.querySelector('.support_menu').addEventListener('mouseover', function () {
  document.querySelector('.sub_menu.card3').classList.add('on');
  document.querySelector('#support').classList.add('on');
});

document.querySelector('#support').addEventListener('mouseout', function () {
  document.querySelector('.sub_menu.card3').classList.remove('on');
});
document.querySelector('.support_menu').addEventListener('mouseout', function () {
  document.querySelector('.sub_menu.card3').classList.remove('on');
  document.querySelector('#support').classList.remove('on');
});

// #about
document.querySelector('#about').addEventListener('mouseover', function () {
  document.querySelector('.sub_menu.card4').classList.add('on');
});
document.querySelector('.about_menu').addEventListener('mouseover', function () {
  document.querySelector('.sub_menu.card4').classList.add('on');
  document.querySelector('#about').classList.add('on');
});

document.querySelector('#about').addEventListener('mouseout', function () {
  document.querySelector('.sub_menu.card4').classList.remove('on');
});
document.querySelector('.about_menu').addEventListener('mouseout', function () {
  document.querySelector('.sub_menu.card4').classList.remove('on');
  document.querySelector('#about').classList.remove('on');
});

// #events
document.querySelector('#events').addEventListener('mouseover', function () {
  document.querySelector('.sub_menu.card5').classList.add('on');
});
document.querySelector('.events_menu').addEventListener('mouseover', function () {
  document.querySelector('.sub_menu.card5').classList.add('on');
  document.querySelector('#events').classList.add('on');
});

document.querySelector('#events').addEventListener('mouseout', function () {
  document.querySelector('.sub_menu.card5').classList.remove('on');
});
document.querySelector('.events_menu').addEventListener('mouseout', function () {
  document.querySelector('.sub_menu.card5').classList.remove('on');
  document.querySelector('#events').classList.remove('on');
});