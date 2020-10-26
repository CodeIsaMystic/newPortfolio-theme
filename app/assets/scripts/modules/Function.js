import $ from 'jquery';



$(function Functions() {
  smoothScroll(450);
  workBelt();
  workLoad();
});


function smoothScroll(duration) {
  $('a[href^="#"]').on('click', function (event) {

    var target = $($(this).attr('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration);
    }
  });
}


function workBelt() {

  $('.thumb__unit').click(function () {
    $('.site-work__belt').css('left', '-100%');
    $('.projects-page').show();
  });
  
  $('.page-return').click(function () {
    $('.site-work__belt').css('left', '0%');
    $('.projects-page').hide(50);
  });
}

function workLoad() {
  $.ajaxSetup({
    cache: true
  });
  
  $('.thumb__unit').click(function () {
    
    var $this = $(this),
    //newTitle = $this.find('strong').text(),
    newFolder = $this.data('folder'),
    newHTML = './work/' + newFolder + '.html';
    $('.project-load').load(newHTML);
  });
}


/*


const workBelt = () => {
  const thumbUnit = document.querySelectorAll('.thumb__unit');
  const workBelt = document.querySelectorAll('.site-work__belt');
  const projectsPage = document.querySelectorAll('.projects-page');
  const pageReturn = document.querySelectorAll('.page-return');

  thumbUnit.addEventListener('click', () => {

  });

  pageReturn.addEventListener('click', () => {

  });
}

*/

/*
const workLoad = () => {
  const thumbUnit = document.querySelectorAll('.thumb__unit');
  thumbUnit.addEventListener('click', () => {
    let newFolder = thumbUnit.data('folder'),
    newHtml = './work/' + newFolder + '.html';
  
    let projectLoad = document.querySelector('.project-load');
    projectLoad.fetch(newHtml).then(e.target.value).catch(err, (err)=> 'there was an error when fetching');
    //projectLoad.fetch(newHtml).then(response);
  
    console.log('projectLoad');
    //console.log(response);
  
  });
}

*/




export default Functions;

