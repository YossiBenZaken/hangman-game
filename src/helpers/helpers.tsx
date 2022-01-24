export function showNotification(setter: any) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}
export function checkWin(correct: string[], wrong: string[], word: string) {
  let status = "win";
  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });
  if (wrong.length === 6) status = "lose";
  return status;
}
