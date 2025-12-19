// Создайте мини-приложение с функциональными и классовыми компонентами, props, состоянием, композицией, импортом файлов и изображений.
// Структура приложения:

// /components
//   Header.js
//   UserCard.js
//   UserList.js
//   Footer.js
// /App.js
// /index.js
// /styles.css
// /images/avatar1.png
// /images/avatar2.png

// 1) Компоненты должны быть разделены по файлам
// 2) Используйте экспорт и импорт компонентов

// Используйте изображения из папки /images/... Inline-стили и CSS-файл


// App - главный компонент, который композитно рендерит: Header → UserList → Footer. Передаёт props в Header и Footer

import Header from "./components/Header"
import UserList from "./components/UserList"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Header title='Приветствие' />
      <hr />
      <UserList />
      <hr />
      <Footer text='Прощание' />
    </>
  )
}

export default App
