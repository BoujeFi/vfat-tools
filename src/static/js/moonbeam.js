$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"Moonbeam Network",
    "heading":["Pool Provider","MCN","LP", "Reward Tokens", "INFO"],
    "rows": [
      ["BeamSwap           ","", `<a href='beamswap'       >Various</a>`,"GLINT          ","https://beamswap.io"],
      ["Solarflare         ","", `<a href='solarflare'     >Various</a>`,"FLARE          ","https://app.solarflare.io"],
      ["Galaxy             ","", `<a href='galaxy'         >Various</a>`,"GSHARE / GLX   ","https://www.galaxyfinance.finance"],
      ["Zenlink            ","", `<a href='zenlink'        >Various</a>`,"Various        ","https://dex.zenlink.pro"]
    ]
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
