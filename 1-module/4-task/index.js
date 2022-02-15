  checkSpam('1XbeT now') === true
  checkSpam('free xxxxx') === true
  checkSpam('innocent rabbit') === false


function checkSpam(str) {
  if (str.includes('1XbeT') || str.toUpperCase().includes ("XXX")) return true
        else return false

    document.write (checkSpam('1XbeT now'));
    document.write ('<br>');
    document.write (checkSpam('free xxxxx'));
    document.write ('<br>');
    document.write (checkSpam('innocent rabbit'));
    document.write ('<br>');
    document.write (checkSpam ('myExample'));
  }
