import Header from './components/Header';
import Form from './components/Form';
import About from './components/About';
export default function App() {
  return (
    <>
     <div className="min-w-[535px] max-w-screen-sm mx-auto">
      <header>
        <Header />
      </header>
      <main>
        <Form />
        <About />
      </main>
      </div>       
    </>
  )
}

