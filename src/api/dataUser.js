const tg = window.Telegram.WebApp;
const user = tg.initDataUnsafe?.user;
export let user_id = 1
export let username = user?.username

// if (!user?.id) {
//     user_id = 1
// } else {
//     user_id = user?.id
// }