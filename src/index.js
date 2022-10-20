import "./index.scss";
import Data from "./Data/DataFrases.json";
import $ from "jquery";
import {FontGenerator, ImageGenerator} from './PeticionesFetch.js';
import { ChangeDisabled, ChangeFondo, DataFrase, ErrorView, Loading, ViewDetailsFont } from "./ActionsJquery";
import GeneralFondo from './Assets/GeneralFondo.jpg'

let DataFontAPI = {};

const ActionFrase = async (OptionsFontGenerator,who) => {
  let {Frase,Autor} = Data[Math.floor(Math.random()*30)],
  DataPeticionImg = await ImageGenerator();
  DataPeticionImg.error ? ChangeFondo(GeneralFondo) : ChangeFondo(DataPeticionImg.url);
  let DataPeticionFont = await FontGenerator(...OptionsFontGenerator);
  if(DataPeticionFont.error) return ErrorView(DataPeticionFont.error);
  console.log(DataPeticionFont.family);
  if(who===1) DataFontAPI = DataPeticionFont.DataFetch;
  DataFrase(Frase,Autor,DataPeticionFont.family);
  return {...DataPeticionFont,['urlIMG']:DataPeticionImg.url};
}

const ClickDownloadFont = (element,DataPeticionFont) => {
  element.on('click',()=>ViewDetailsFont(DataPeticionFont));
}

const ClickNewFrase = () => {
  if(!($('#new-quote')[0].hasAttribute('disabled'))) (async ()=>{
    ChangeDisabled();
    Loading();
    let DataPeticionFont = await ActionFrase([false,DataFontAPI],2),
    element = $('#download-font');
    element.off('click');
    if(DataPeticionFont) ClickDownloadFont(element,DataPeticionFont);
  })();
}

$(()=>{
  (async ()=>{
    let DataPeticionFont = await ActionFrase([true],1);
    $('#new-quote').on('click',ClickNewFrase);
    if(DataPeticionFont) ClickDownloadFont($('#download-font'),DataPeticionFont);
  })();
});