// Footer - функциональный компонент, который принимает props text и отображает футер
// Подключает CSS или inline-стиль
import '../styles.css'

export default Header({text})
{
    return(
        <footer>{text}</footer>
    )
}