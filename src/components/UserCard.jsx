// UserCard - функциональный компонент, который отображает одного пользователя
// Props: name (строка) age (число) avatar (картинка)
// Используйте inline-стили для оформления карточки

export default UserCard({name, age, avatar})
{
    return(
        <div style={{
                border: "1px solid black",
                borderRadius: "30px"
            }}
        >
            <img src={avatar} alt="User avatar" />
            <div>
                <span>{name}</span>
                <span>{age}</span>
            </div>
        </div>
    )
}