function getAllSheets() {
  if( !window.ScriptEngine && navigator.__ice_version ) { return document.styleSheets; }
  if( document.getElementsByTagName ) { var Lt = document.getElementsByTagName('link'), St = document.getElementsByTagName('style');
  } else if( document.styleSheets && document.all ) { var Lt = document.all.tags('LINK'), St = document.all.tags('STYLE');
  } else { return []; } for( var x = 0, os = []; Lt[x]; x++ ) {
    var rel = Lt[x].rel ? Lt[x].rel : Lt[x].getAttribute ? Lt[x].getAttribute('rel') : '';
    if( typeof( rel ) == 'string' && rel.toLowerCase().indexOf('style') + 1 ) { os[os.length] = Lt[x]; }
  } for( var x = 0; St[x]; x++ ) { os[os.length] = St[x]; } return os;
}
function changeStyle() {
  for( var x = 0, ss = getAllSheets(); ss[x]; x++ ) {
    if( ss[x].title ) { ss[x].disabled = true; }
    for( var y = 0; y < arguments.length; y++ ) {
     if( ss[x].title == arguments[y] ) { ss[x].disabled = false; }
} } }
