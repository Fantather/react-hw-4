// Footer - функциональный компонент, который принимает props text и отображает футер
// Подключает CSS или inline-стиль
import '../styles.css'

export default function Header({text})
{
    return(
        <footer>
            <h2>{text}</h2>
        </footer>
    )
}