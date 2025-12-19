// Header - функциональный компонент
// Принимает props: title (текст заголовка)
// Подключает стиль из CSS
import '../styles.css'

export default function Header({title})
{
    return(
        <header>
            <h2>{title}</h2>
        </header>
    )
}