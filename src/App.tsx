import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLanguages, toFavorite, useLanguages } from "./redux/sliceLanguages";

function App() {
  const [newLanguage, setNewLanguage] = useState('');

  const dispatch = useDispatch();

  function resetState(){
    setNewLanguage('')
  }

  function handleAddNewLanguage(language: string){
    dispatch(addLanguages(language));
    resetState()
  }

  const languages = useSelector(useLanguages);
  return (
   <div>
    <ul>
      {
        languages.map((language) => {
          return (
            <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
              <span style={{color: language.favorite ? "green" : "black"}}>{language.name}</span>
              <button type="button" onClick={() => dispatch(toFavorite(language.name))}>
                {language.favorite ? "Desfavoritar" : "Favoritar"}
              </button>
            </div>
          )
        })
      }
    </ul>
    <div>
      <input type="text" value={newLanguage} onChange={(e: ChangeEvent<HTMLInputElement>) => setNewLanguage(e.target.value)}/>
      <button type="button" onClick={() => {handleAddNewLanguage(newLanguage)}}>Adicionar nova linguagem</button>
    </div>
   </div>
  );
}

export default App;
