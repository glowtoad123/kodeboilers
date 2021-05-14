import React, {useState} from 'react'
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
import {useFire} from './services/fire'
import { useHistory } from 'react-router-dom'
import Languages from './components/languages'

export default function Create() {

    const [codeText, setCodeText] = useState("testing")
    const [title, setTitle] = useState("")
    const [selectedLanguage, setSelectedLanguage] = useState("javascript")

    const {currentUser, submitBroiler} = useFire()
    
    console.log(currentUser)

    const history = useHistory()

    function addBroiler(){
        submitBroiler(title, codeText, currentUser.uid, selectedLanguage)
        history.push("/")
    }

    function selectLanguage(event){
      setSelectedLanguage(event.target.value)
  }

    return (
      <>
        {currentUser && <div style={{width: '85%', margin: 'auto', borderRadius: "13px", backgroundColor: "#263238"}}>
            <input type="text" className="title" value={title} onChange={event => setTitle(event.target.value)} placeholder="Please name this broiler"/>
            <CodeMirror
                onBeforeChange={(editor, data, value) => {
                  setCodeText(value);
                }}
                className="editor"
                value={codeText}
                options={{
                  theme: 'material',
                  lineNumbers: true,
                  mode: selectedLanguage
                }}
                onChange={(editor, data, value) => {
                  setCodeText(value);
                }}
            />
            <Languages set={selectLanguage} />
            <button type="submit" className="addCode" onClick={addBroiler}>Add Broiler</button>
        </div>}

        {!currentUser && 
            <div>
                <br />
                <br />
                <br />
                <h1 id="getStarted" style={{width: '80%'}}>
                    If You are seeing this screen, then you must not be loggedIn. Press the   
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-door-closed-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4 1a1 1 0 0 0-1 1v13H1.5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2a1 1 0 0 0-1-1H4zm2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg> Icon to Sign in or to Register if you do not have an account. Only then can you create a broiler by pressing the 
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                    </svg> Icon.
                </h1>
            </div>
        }
      </>
    )
}
