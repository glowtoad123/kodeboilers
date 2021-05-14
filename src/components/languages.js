import React from 'react'


export default function Languages(props) {





    return (
        <select onClick={props.set}  className="select">
            <option className="option" value={props.default && props.default !== "" ? props.default  : "javascript"}>{props.default && props.default !== "" ? props.default  : "javascript"}</option>
            <option className="option" value="apl">apl</option>
            <option className="option" value="asciiarmor">asciiarmor</option>
            <option className="option" value="asn.1">asn.1</option>
            <option className="option" value="asterisk">asterisk</option>
            <option className="option" value="brainfuck">brainf</option>
            <option className="option" value="clike">clike</option>
            <option className="option" value="clojure">clojure</option>
            <option className="option" value="cmake">cmake</option>
            <option className="option" value="cobol">cobol</option>
            <option className="option" value="coffeescript">coffeescript</option>
            <option className="option" value="commonlisp">commonlisp</option>
            <option className="option" value="crystal">crystal</option>
            <option className="option" value="css">css</option>
            <option className="option" value="cypher">cypher</option>
            <option className="option" value="d">d</option>
            <option className="option" value="dart">dart</option>
            <option className="option" value="diff">diff</option>
            <option className="option" value="django">django</option>
            <option className="option" value="dockerfile">dockerfile</option>
            <option className="option" value="dtd">dtd</option>
            <option className="option" value="dylan">dylan</option>
            <option className="option" value="ebnf">ebnf</option>
            <option className="option" value="ecl">ecl</option>
            <option className="option" value="eiffel">eiffel</option>
            <option className="option" value="elm">elm</option>
            <option className="option" value="erlang">erlang</option>
            <option className="option" value="factor">factor</option>
            <option className="option" value="fcl">fcl</option>
            <option className="option" value="forth">forth</option>
            <option className="option" value="fortran">fortran</option>
            <option className="option" value="gas">gas</option>
            <option className="option" value="gfm">gfm</option>
            <option className="option" value="gherkin">gherkin</option>
            <option className="option" value="go">go</option>
            <option className="option" value="groovy">groovy</option>
            <option className="option" value="haml">haml</option>
            <option className="option" value="handlebars">handlebars</option>
            <option className="option" value="haskell">haskell</option>
            <option className="option" value="haskell-literate">haskell-literate</option>
            <option className="option" value="haxe">haxe</option>
            <option className="option" value="htmlembedded">htmlembedded</option>
            <option className="option" value="htmlmixed">htmlmixed</option>
            <option className="option" value="http">http</option>
            <option className="option" value="idl">idl</option>
            <option className="option" value="javascript">javascript</option>
            <option className="option" value="jinja2">jinja2</option>
            <option className="option" value="jsx">jsx</option>
            <option className="option" value="julia">julia</option>
            <option className="option" value="livescript">livescript</option>
            <option className="option" value="lua">lua</option>
            <option className="option" value="markdown">markdown</option>
            <option className="option" value="mathematica">mathematica</option>
            <option className="option" value="mbox">mbox</option>
            <option className="option" value="mirc">mirc</option>
            <option className="option" value="mllike">mllike</option>
            <option className="option" value="modelica">modelica</option>
            <option className="option" value="mscgen">mscgen</option>
            <option className="option" value="mumps">mumps</option>
            <option className="option" value="nginx">nginx</option>
            <option className="option" value="nsis">nsis</option>
            <option className="option" value="ntriples">ntriples</option>
            <option className="option" value="octave">octave</option>
            <option className="option" value="oz">oz</option>
            <option className="option" value="pascal">pascal</option>
            <option className="option" value="pegjs">pegjs</option>
            <option className="option" value="perl">perl</option>
            <option className="option" value="php">php</option>
            <option className="option" value="pig">pig</option>
            <option className="option" value="powershell">powershell</option>
            <option className="option" value="properties">properties</option>
            <option className="option" value="protobuf">protobuf</option>
            <option className="option" value="pug">pug</option>
            <option className="option" value="puppet">puppet</option>
            <option className="option" value="python">python</option>
            <option className="option" value="q">q</option>
            <option className="option" value="r">r</option>
            <option className="option" value="rpm">rpm</option>
            <option className="option" value="rst">rst</option>
            <option className="option" value="ruby">ruby</option>
            <option className="option" value="sas">sas</option>
            <option className="option" value="sass">sass</option>
            <option className="option" value="scheme">scheme</option>
            <option className="option" value="shell">shell</option>
            <option className="option" value="sieve">sieve</option>
            <option className="option" value="slim">slim</option>
            <option className="option" value="smalltalk">smalltalk</option>
            <option className="option" value="smarty">smarty</option>
            <option className="option" value="solr">solr</option>
            <option className="option" value="soy">soy</option>
            <option className="option" value="sparql">sparql</option>
            <option className="option" value="spreadsheet">spreadsheet</option>
            <option className="option" value="sql">sql</option>
            <option className="option" value="stex">stex</option>
            <option className="option" value="stylus">stylus</option>
            <option className="option" value="swift">swift</option>
            <option className="option" value="tcl">tcl</option>
            <option className="option" value="textile">textile</option>
            <option className="option" value="tiddlywiki">tiddlywiki</option>
            <option className="option" value="tiki">tiki</option>
            <option className="option" value="toml">toml</option>
            <option className="option" value="tornado">tornado</option>
            <option className="option" value="troff">troff</option>
            <option className="option" value="ttcn">ttcn</option>
            <option className="option" value="ttcn-cfg">ttcn-cfg</option>
            <option className="option" value="turtle">turtle</option>
            <option className="option" value="twig">twig</option>
            <option className="option" value="vb">vb</option>
            <option className="option" value="vbscript">vbscript</option>
            <option className="option" value="velocity">velocity</option>
            <option className="option" value="verilog">verilog</option>
            <option className="option" value="vhdl">vhdl</option>
            <option className="option" value="vue">vue</option>
            <option className="option" value="wast">wast</option>
            <option className="option" value="webidl">webidl</option>
            <option className="option" value="xml">xml</option>
            <option className="option" value="xquery">xquery</option>
            <option className="option" value="yacas">yacas</option>
            <option className="option" value="yaml">yaml</option>
            <option className="option" value="yaml-frontmatter">yaml-frontmatter</option>
            <option className="option" value="z80">z80</option>
        </select>
    )
}
