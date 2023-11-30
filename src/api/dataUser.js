export let user_id
const tg = window.Telegram.WebApp;
const user = tg.initDataUnsafe?.user;

if (!user?.id) {
    user_id = 1
} else {
    user_id = user?.id
}