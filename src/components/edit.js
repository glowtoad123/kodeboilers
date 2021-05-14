import React, {useState} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import 'codemirror/mode/apl/apl'
import 'codemirror/mode/asciiarmor/asciiarmor'
import 'codemirror/mode/asn.1/asn.1'
import 'codemirror/mode/asterisk/asterisk'
import 'codemirror/mode/brainfuck/brainfuck'
import 'codemirror/mode/clike/clike'
import 'codemirror/mode/clojure/clojure'
import 'codemirror/mode/cmake/cmake'
import 'codemirror/mode/cobol/cobol'
import 'codemirror/mode/coffeescript/coffeescript'
import 'codemirror/mode/commonlisp/commonlisp'
import 'codemirror/mode/crystal/crystal'
import 'codemirror/mode/cypher/cypher'
import 'codemirror/mode/d/d'
import 'codemirror/mode/dart/dart'
import 'codemirror/mode/diff/diff'
import 'codemirror/mode/django/django'
import 'codemirror/mode/dockerfile/dockerfile'
import 'codemirror/mode/dtd/dtd'
import 'codemirror/mode/dylan/dylan'
import 'codemirror/mode/ebnf/ebnf'
import 'codemirror/mode/ecl/ecl'
import 'codemirror/mode/eiffel/eiffel'
import 'codemirror/mode/elm/elm'
import 'codemirror/mode/erlang/erlang'
import 'codemirror/mode/factor/factor'
import 'codemirror/mode/fcl/fcl'
import 'codemirror/mode/forth/forth'
import 'codemirror/mode/fortran/fortran'
import 'codemirror/mode/gas/gas'
import 'codemirror/mode/gfm/gfm'
import 'codemirror/mode/gherkin/gherkin'
import 'codemirror/mode/go/go'
import 'codemirror/mode/groovy/groovy'
import 'codemirror/mode/haml/haml'
import 'codemirror/mode/handlebars/handlebars'
import 'codemirror/mode/haskell/haskell'
import 'codemirror/mode/haskell-literate/haskell-literate'
import 'codemirror/mode/haxe/haxe'
import 'codemirror/mode/htmlembedded/htmlembedded'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/perl/perl'
import 'codemirror/mode/php/php'
import 'codemirror/mode/python/python'
import 'codemirror/mode/ruby/ruby'
import 'codemirror/mode/swift/swift'
import 'codemirror/mode/vue/vue'
import {Controlled as CodeMirror} from 'react-codemirror2'
import {useFire} from '../services/fire'
import { LinearProgress } from '@material-ui/core'
import Languages from './languages'

export default function Edit() {
    const [title, setTitle] = useState("")
    const [code, setCode] = useState('')
    const [user, setUser] = useState("")
    const [selectedLanguage, setSelectedLanguage] = useState("javascript")
    const [defaultLanguage, setDefaultLanguage] = useState("")

    const {id} = useParams()
    const {findSnippet, updateSnippet, currentUser} = useFire()

    const history = useHistory()

    title.length === 0 && findSnippet(id).then(doc => {
            setTitle(doc.data().title)
            setCode(doc.data().code)
            setUser(doc.data().user)
            if(doc && doc.data() && doc.data().language){
                setSelectedLanguage(doc.data().language)
                setDefaultLanguage(doc.data().language)
            }
    })

    console.log(title)

    function editSnippet(){
        updateSnippet(id, title, code, selectedLanguage)
        history.push("/")
    }

    function selectLanguage(event){
        setSelectedLanguage(event.target.value)
    }
    
    console.log("selectedLanguage", selectedLanguage)
    
    return (
        <>
        {currentUser && user && currentUser.uid !== user && <LinearProgress />}
        {currentUser && user && currentUser.uid === user && <div style={{width: '85%', margin: 'auto', boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)", borderRadius: "13px"}}>
            <input type="text" className="title" value={title} placeholder="loading Snippet"/>
            <CodeMirror
                onBeforeChange={(editor, data, value) => {
                    setCode(value);
                }}
                className="editor"
                value={code}
                options={{
                  theme: 'material',
                  lineNumbers: true,
                  mode: selectedLanguage
                }}
                onChange={(editor, data, value) => {
                    setCode(value);
                  }}
            />
            <Languages set={selectLanguage} default={defaultLanguage} />
            <br />
            <button type="submit" className="addCode" onClick={editSnippet}>Update Snippet</button>
        </div>}
        </>
    )
}
