class iOS15_kancolle {
  open(){
    if(gadgetInfo === undefined) return alart("艦これのゲームページで実行してください");
    window.open("http:"+gadgetInfo.URL,'_blank');
  }
  opensupport(document){
    var s=document.createElement('link');
    s.rel='stylesheet';
    s.href='https://iOS15-kancolle.github.io/iframe.css';
    document.body.appendChild(s);
    s=document.createElement('div');
    s.id='kancolle_support_site';
    document.body.appendChild(s);
    s=document.createElement('iframe');
    s.src='http://kancollecalc.jp/air_supremacy.html';
    document.getElementById('kancolle_support_site').appendChild(s);
    s=document.createElement('iframe');
    s.src='http://kc2ndexpcalc.web.fc2.com';
    document.getElementById('kancolle_support_site').appendChild(s);
  }
};
window.iOS15_kancolle = iOS15_kancolle;
