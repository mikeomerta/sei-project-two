import React from 'react'
import axios from 'axios'
import { v4 as uuid } from 'uuid'
import { useParams } from 'react-router'
import { useHistory } from 'react-router'
import DefinitionCard from './DefinitionCard'


function DefinitionShow() {
  const { userWord } = useParams()
  const history = useHistory()
  const [words, setWords] = React.useState(null)
  const id = uuid()
  

  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${userWord}`)
      console.log(res.data)
      setWords(res.data)
    }
    getData()
  }, [userWord])

  const handleReset = () => {
    history.push('/')
  }  

  const [userNewWord, setUserNewWord] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault() 
    userNewWord.toLowerCase()
    history.push('/')
    history.push(`/${userNewWord.toLowerCase()}`)
  }

  const handleChange = (e) => {
    setUserNewWord(e.target.value )
  }

  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body has-text-centered">
        <div className="container-centered">
          <div>
            <form onSubmit={handleSubmit}>
              <input
                onBlur={handleChange}
                placeholder="Search Again"
              />
              <button className="has-text-centered">Define</button>
            </form>
          </div>
          <h1 className="title is-1 has-text-centered">
            Definition Page <span>📔</span>
          </h1>
          {words &&
            words.map(word => (
              <DefinitionCard
                key={id}
                name={word.word}
                phonetic={word.phonetic}
                origin={word.origin}
                element={word.meanings[0].partOfSpeech}
                def={word.meanings[0].definitions.map(definition => definition.definition)}
                audio={word.phonetics[0].audio}
              />
            ))}
          <div onClick={handleReset} className="box-has-text-centered">
            <button className="button is-hovered" onClick={handleReset}>Home</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DefinitionShow