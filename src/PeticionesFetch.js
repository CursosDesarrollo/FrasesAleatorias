import { helperFetch } from "./Helpers/helperFetch";

const FontGenerator = async (state,DataFetch=null) => {
  try {
    if(!DataFetch) {
      const KeyGoogleFonts = 'AIzaSyBUrTcD5ltYoBigf9y6UyKvKQkencLW04E';
      DataFetch = await helperFetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${KeyGoogleFonts}`);
      if(DataFetch.error) throw DataFetch;
      DataFetch = DataFetch.data;
    }
    let FontArray = DataFetch.items,DataFont = [];
    do {
      DataFont = FontArray[Math.floor(Math.random()*FontArray.length)];
    } while (!(/latin/gi.test(DataFont.subsets.join(''))));
    let {family,files} = DataFont;
    DataFont = "https://"+files.regular.split('http://')[1];
    const NewFont = new FontFace(family, `url(${DataFont})`);
    await NewFont.load();
    document.fonts.add(NewFont);
    return state ? {family,urlFont:DataFont,DataFetch} : {family,urlFont:DataFont};
  } catch (error) {
    return {error};
  }
}

const ImageGenerator = async () => {
  try {
    let DataFetch = await helperFetch(`https://picsum.photos/v2/list?page=${Math.floor(Math.random()*990)}&limit=1`);
    if(DataFetch.error) throw DataFetch;
    return {url: DataFetch.data[0].download_url};
  } catch (error) {
    return {error};
  }
}

export {FontGenerator,ImageGenerator};