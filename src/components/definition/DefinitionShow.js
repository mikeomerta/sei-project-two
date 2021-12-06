import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import DefinitionCard from './DefinitionCard'



function DefinitionShow() {
  const { userWord } = useParams()
  const [wordsDefinition] = React.useState('')

  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${userWord}`)
      console.log(res.data)
    }
    getData()
  }, [userWord])


  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body has-text-centered">
        <div className="container">
          <h1 className="title is-1 has-text-centered">
            {wordsDefinition &&
            wordsDefinition.map(word => (
              <DefinitionCard
                key={word.name}
                name={word.name}
                phonetic={word.phonetic}
                origin={word.origin}
              />
            ))}
          </h1>
        </div>
      </div>
    </section>
  )
}

export default DefinitionShow