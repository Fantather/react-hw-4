// UserCard - функциональный компонент, который отображает одного пользователя
// Props: name (строка) age (число) avatar (картинка)
// Используйте inline-стили для оформления карточки

export default function UserCard({name, age, avatar})
{
    return(
        <div 
            style={{
                    display: "flex",

                    width: "300px",

                    border: "1px solid black",
                    borderRadius: "30px",
                    padding: "10px"
                }}
        >
            <img 
                src={avatar} 
                alt="User avatar" 
                style={{
                    width: "100px",
                    height: "auto",

                    border: "1px solid black",
                    borderRadius: "50px"
                }}
            />

            <div 
            style={{
                display:"flex",
                flexDirection:"column"
            }}>
                <span>Имя: {name}</span>
                <span>Возраст: {age}</span>
            </div>
        </div>
    )
}