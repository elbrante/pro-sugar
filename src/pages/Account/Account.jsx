import React from 'react';
import cl from './Account.module.css'


import { useTelegram } from '../../hooks/useTelegram';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Account = () => {

    const {user, onClose} = useTelegram();
    const [phoneNum, setPhoneNum] = useState('');
    const [bonuses, setBonuses] = useState(500);

    const backend_url = "https://thx-api-server.ru"

    useEffect(() => {

        const userid = user?.id;

        const userId = {
            tg_id: userid?.toString()
          };

        axios.post(`${backend_url}/phone_number`, userId)
        .then(response => {
            console.log(response.data);
            
            setPhoneNum(
                response.data['phone_number']
            )

        })
        .catch(error => {
            console.error(error);
        });
        
    }, [])


    useEffect(() => {

        const userid = user?.id;

        const userId = {
            tg_id: userid?.toString()
          };

        axios.post(`${backend_url}/bonuses`, userId)
        .then(response => {
            console.log(response.data);
            
            setBonuses(
                response.data['bonuses']
            )

        })
        .catch(error => {
            console.error(error);
        });
        
    }, [])



    const BOT_TOKEN = '6285433302:AAHf3eK1mGHql7quzdrJhP9GtEQzyU6Ug7g';

    function UserProfilePhoto(userId) {
        const [photoUrl, setPhotoUrl] = useState('');
      
        useEffect(() => {
          async function fetchUserProfilePhoto() {
            const apiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/getUserProfilePhotos?user_id=${userId}`;
            const response = await fetch(apiUrl);
            const data = await response.json();
            if (data.result && data.result.photos.length > 0) {
              const fileId = data.result.photos[0][0].file_id;
              const photoApiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/getFile?file_id=${fileId}`;
              const photoResponse = await fetch(photoApiUrl);
              const photoData = await photoResponse.json();
              if (photoData.result) {
                const photoPath = photoData.result.file_path;
                const photoUrl = `https://api.telegram.org/file/bot${BOT_TOKEN}/${photoPath}`;
                setPhotoUrl(photoUrl);
              }
            }
          }
          fetchUserProfilePhoto();
        }, [userId]);

        return (
            <img src={photoUrl} alt="User Profile" className={cl.profilePicture}/>
          );
        }

    const profPic = UserProfilePhoto(user?.id);

    return (
        <div className={cl.wrapperAccount}>
            <div className={cl.firstBlock}>
                {/* <img src={photo}/> */}
                {profPic}
                <div className={cl.nameInfo}>
                    <span className={cl.nameUser}>{user?.first_name}</span>
                    <div className={cl.phoneId}>
                        <span>ID: {user?.id}</span>
                    </div>
                </div>
            </div>
            <div className={cl.detailInfo}>
                <div className={cl.infoBlock}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="13" cy="13" r="12.6865" stroke="black" stroke-width="0.627087"/>
                        <path d="M18.4704 14.8953L15.8794 13.7342L15.8722 13.7309C15.7377 13.6734 15.591 13.6503 15.4453 13.6637C15.2996 13.6772 15.1596 13.7267 15.0379 13.8079C15.0235 13.8174 15.0098 13.8276 14.9966 13.8387L13.6579 14.98C12.8098 14.568 11.9342 13.699 11.5222 12.8619L12.6651 11.5028C12.6761 11.4891 12.6866 11.4753 12.6965 11.4605C12.7759 11.3391 12.8241 11.2 12.8368 11.0554C12.8495 10.9109 12.8262 10.7655 12.7691 10.6322V10.6256L11.6047 8.03009C11.5292 7.85589 11.3994 7.71077 11.2347 7.6164C11.0699 7.52203 10.8791 7.48348 10.6906 7.50649C9.94535 7.60456 9.26126 7.97057 8.76612 8.53615C8.27098 9.10174 7.99866 9.82822 8 10.5799C8 14.947 11.553 18.5 15.9201 18.5C16.6718 18.5013 17.3982 18.229 17.9638 17.7339C18.5294 17.2387 18.8954 16.5546 18.9935 15.8094C19.0165 15.621 18.9781 15.4302 18.8838 15.2654C18.7895 15.1007 18.6445 14.9708 18.4704 14.8953ZM15.9201 17.62C14.0535 17.6179 12.2641 16.8756 10.9442 15.5557C9.62442 14.2359 8.88205 12.4464 8.88001 10.5799C8.87794 10.0428 9.07144 9.52336 9.42437 9.1185C9.7773 8.71365 10.2655 8.4511 10.7979 8.3799C10.7977 8.38209 10.7977 8.3843 10.7979 8.3865L11.9529 10.9715L10.816 12.3322C10.8045 12.3455 10.794 12.3597 10.7847 12.3746C10.7019 12.5016 10.6534 12.6478 10.6437 12.7991C10.6341 12.9504 10.6637 13.1016 10.7297 13.2381C11.228 14.2573 12.2548 15.2764 13.285 15.7742C13.4225 15.8395 13.5746 15.8681 13.7264 15.8571C13.8782 15.8461 14.0246 15.796 14.1512 15.7115C14.1654 15.702 14.179 15.6917 14.1919 15.6807L15.529 14.54L18.114 15.6977H18.1201C18.0497 16.2308 17.7876 16.72 17.3827 17.0738C16.9777 17.4276 16.4578 17.6218 15.9201 17.62Z" fill="black"/>
                    </svg>

                    <div className={cl.infoRow}>
                        <span className={cl.nameInfoRow}>Номер телефона</span>
                        <span className={cl.detailInfoRow}>{phoneNum}</span>
                    </div>
                </div>

                <div className={cl.infoBlock}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="13" cy="13" r="12.6865" stroke="black" stroke-width="0.627087"/>
                        <path d="M13.5531 9.40277C13.6903 9.23811 13.9583 9.33514 13.9583 9.54948V12.3541C13.9583 12.4806 14.0609 12.5832 14.1875 12.5832H17.1667C17.3555 12.5832 17.4633 12.7988 17.35 12.9499L13.9125 17.5332C13.7804 17.7094 13.5 17.6159 13.5 17.3957V14.6457C13.5 14.5192 13.3974 14.4166 13.2708 14.4166H9.86428C9.66998 14.4166 9.56384 14.1899 9.68823 14.0407L13.5531 9.40277Z" stroke="black" stroke-width="0.916667" stroke-miterlimit="10"/>
                    </svg>

                    <div className={cl.infoRow}>
                        <span className={cl.nameInfoRow}>Бонусов</span>
                        <span className={cl.detailInfoRow}>{bonuses}</span>
                    </div>
                </div>


                <div className={cl.infoBlock}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="13" cy="13" r="12.6865" stroke="black" stroke-width="0.627087"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 12.6213C9.5 11.7259 10.2259 11 11.1213 11C11.5513 11 11.9637 11.1708 12.2678 11.4749L12.6229 11.83C12.8312 12.0383 13.1688 12.0383 13.3771 11.83L13.7322 11.4749C14.0363 11.1708 14.4487 11 14.8787 11C15.7741 11 16.5 11.7259 16.5 12.6213C16.5 13.0513 16.3292 13.4637 16.0251 13.7678L13 16.7929L9.97487 13.7678C9.67082 13.4637 9.5 13.0513 9.5 12.6213ZM11.1213 10C9.67361 10 8.5 11.1736 8.5 12.6213C8.5 13.3165 8.77617 13.9833 9.26777 14.4749L12.2942 17.5013C12.684 17.8911 13.316 17.8911 13.7058 17.5013L16.7322 14.4749C17.2238 13.9833 17.5 13.3165 17.5 12.6213C17.5 11.1736 16.3264 10 14.8787 10C14.1835 10 13.5167 10.2762 13.0251 10.7678L13 10.7929L12.9749 10.7678C12.4833 10.2762 11.8165 10 11.1213 10Z" fill="black"/>
                    </svg>
                    <div className={cl.infoRow}>
                        <span className={cl.nameInfoRow}>Уровень лояльности</span>
                        <span className={cl.detailInfoRow}>Любитель</span>
                    </div>
                </div>

                <div className={cl.infoBlock}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="13" cy="13" r="12.6865" stroke="black" stroke-width="0.627087"/>
                        <path d="M9 9.65158L9.63158 10.3032L10.8947 9M9 12.6923L9.63158 13.3439L10.8947 12.0407M9 15.733L9.63158 16.3846L10.8947 15.0814M12.3684 12.6923H17M12.3684 15.733H17M12.3684 9.65158H17" stroke="black" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <div className={cl.infoRow}>
                        <span className={cl.nameInfoRow}>Заказов</span>
                        <span className={cl.detailInfoRow}>0</span>
                    </div>
                </div>


            </div>
        </div>
    );
};
