function truncate(str, maxlength) {
  if (str.length<=maxlength) return str;
  else return str.substr (0, maxlength-1) + "…";
}
document.write (truncate ('Вот, что мне хотелось бы сказать на эту тему:', 20));
document.write ('<br');
document.write (truncate ('сегодня пятница', 9));
