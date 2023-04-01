import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video 
        likes={111} 
        messages={222} 
        shares={333} 
        name="Paulo"
        description="Brecker o Goleiro"
        music="Música Épica"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
        <Video 
        likes={111} 
        messages={222} 
        shares={333} 
        name="Pedro"
        description="Gato Pulando"
        music="Música Qualquer"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
       />
      </div>
    </div>
  );
}

export default App;
