import $ from "jquery";
import ErrorIMG from './Assets/ErrorIMG.png';
const ClassElement = 'replace';

const Loading = () => {
  const Loader = $(`
    <div class="${ClassElement}" id="loader">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  `);
  $(`.${ClassElement}`).replaceWith(Loader);
}

const DataFrase = (Frase,Autor,Font) => {
  const blockquote = $(`<blockquote class="${ClassElement}"></blockquote>`),
  text = $('<p id="text"></p>').text(Frase).css('font-family',Font),
  author = $('<cite id="author"></cite>').text(Autor).css('font-family',Font),
  svgComillas = $('<div class="svgComillas"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="50" height="50" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g> <g xmlns="http://www.w3.org/2000/svg"> <g id="right_x5F_quote"> <g> <path style="" d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z" fill="#343837" data-original="#030104" class=""></path> <path style="" d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z" fill="#343837" data-original="#030104" class=""></path> </g> </g> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> </g></svg></div>'),
  buttonTwitter = $('#tweet-quote'),
  svgTwitter = buttonTwitter.children(),
  newTweet = $(`<a href="https://twitter.com/intent/tweet?text=${Frase} ${Autor}" target="_blank" id="tweet-quote"></a>`).append(svgTwitter);
  blockquote.append(svgComillas,text,author);
  $(`.${ClassElement}`).replaceWith(blockquote);
  buttonTwitter.replaceWith(newTweet);
  $('#new-quote').removeAttr('disabled');
  $('#download-font').removeAttr('disabled');
}

const ErrorView = (error) => {
  const message = error.message || error.error.message,
  ViewError = $(`
    <div class="${ClassElement}" id="error">
      <img src="${ErrorIMG}" alt="Advertencia">
      <p>${message}</p>
    </div>
  `);
  $(`.${ClassElement}`).replaceWith(ViewError);
  $('#new-quote').removeAttr('disabled');
}

const ChangeFondo = (url) => {
  $('body').css('background-image',`url('${url}')`);
}

const ChangeDisabled = () => {
  const aTwitter = $('#tweet-quote'),
  svgTwitter = aTwitter.children(),
  buttonTwitter = $('<button id="tweet-quote" disabled></button>').append(svgTwitter);
  aTwitter.replaceWith(buttonTwitter);
  $('#new-quote').prop("disabled", true);
  $('#download-font').prop("disabled", true);
}

const ViewDetailsFont = ({urlFont,family,urlIMG}) => {
  const tittleFont = $(`<h2></h2>`).text(family).css('font-family',family)[0].outerHTML,
  textFamily = family.replaceAll(' ','+'),
  detailsLink = `
    &lt;link rel="preconnect" href="https://fonts.googleapis.com"&gt;<br>
    &lt;link rel="preconnect" href="https://fonts.gstatic.com" crossorigin&gt;<br>
    &lt;link href="https://fonts.googleapis.com/css2?family=<b>${textFamily}</b>&display=swap" rel="stylesheet"&gt;<br>
  `,
  detailsImport = `
    &lt;style&gt;<br>
    @import url('https://fonts.googleapis.com/css2?family=<b>${textFamily}</b>&display=swap');<br>
    &lt;/style&gt;<br>
  `,
  modal = $(`
    <div class="modal-font">
      <div class="content-modal">
        <button class="close-modal"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="35" height="35" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg" id="Icons"><g><g><path d="m32 58c-14.359 0-26-11.641-26-26 0-14.359 11.641-26 26-26 14.359 0 26 11.641 26 26 0 14.359-11.641 26-26 26z" fill="#fa6450" data-original="#fa6450" class=""></path></g><g><path d="m10 32c0-13.686 10.576-24.894 24-25.916-.661-.05-1.326-.084-2-.084-14.359 0-26 11.641-26 26 0 14.359 11.641 26 26 26 .674 0 1.339-.034 2-.084-13.424-1.022-24-12.23-24-25.916z" fill="#dc4632" data-original="#dc4632"></path></g><g><g><path d="m16.444 27.757h31.113v8.485h-31.113z" fill="#f0f0f0" transform="matrix(.707 -.707 .707 .707 -13.255 32)" data-original="#f0f0f0" class=""></path></g><g><path d="m27.757 16.444h8.485v31.113h-8.485z" fill="#f0f0f0" transform="matrix(.707 -.707 .707 .707 -13.255 32)" data-original="#f0f0f0" class=""></path></g></g></g></g></g></svg></button>
        ${tittleFont}
        <div class="container-options">
          <label for="link"><input type="radio" id="link" name="option" checked> &lt;Link&gt;</label>
          <label for="import"><input type="radio" id="import" name="option"> @Import</label>
        </div>
        <div class="container-gray container-details-font">
          ${detailsLink}
        </div>
        <p>Reglas CSS</p>
        <div class="container-gray container-details-css">
          font-family: '${family}', sans-serif;
        </div>
        <p class="o">o</p>
        <a href="${urlFont}" target="_blank">${urlFont}</a>
        <p>Link de la imagen</p>
        <a href="${urlIMG}" target="_blank">${urlIMG}</a>
      </div>
    </div>
  `);
  modal.insertAfter('#quote-box');
  $('.modal-font').on('click',(e)=>{
    if(!(e.target.matches('.close-modal *')||e.target.matches('.modal-font'))) return;
    $('.modal-font').remove().off('click');
  });
  $(`.container-options input[name='option']`).on('change',(e)=>{
    const element = $('.container-details-font');
    if(e.target.id==='link') return element.html(detailsLink);
    element.html(detailsImport);
  });
}

export {Loading,DataFrase,ErrorView,ChangeFondo,ChangeDisabled,ViewDetailsFont};