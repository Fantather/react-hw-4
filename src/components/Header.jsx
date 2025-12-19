// Header - функциональный компонент
// Принимает props: title (текст заголовка)
// Подключает стиль из CSS
import '../styles.css'

export default Header({title})
{
    return(
        <header>{title}</header>
    )
}