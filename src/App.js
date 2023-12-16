import '@picocss/pico';
import './App.css';
import { CurvedLine } from './svg';

function App () {
  return (
    <body className='container'>
      <header>
        <nav>
          <ul>
            <li><strong>Brand</strong></li>
          </ul>
          <ul>
            <li><a href="#">Mobil Ilova</a></li>
            <li><a href="#">Biz Haqimizda</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className='grid'>
          <h1>
            Onlayn Konsultatsiyadan
            <span className='highlighted'>Hoziroq </span>  foydalaning
          </h1>
          <div></div>
        </section>
      </main>
      <button type="submit">Upload your Image</button>
    </body>
  );
}

export default App;
