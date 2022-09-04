import { Format } from "./cache";
import Number from "./settings/number";
import Select from "./settings/select";
import type { Setter } from "solid-js";
import Text from "./settings/text";
import Toggle from "./settings/toggle";
import { clearChart } from "./chart";

const Setting = (props: { restart: Setter<boolean> }) => {
	return (
		<div class="absolute top-1 right-1 flex flex-col items-end">
			<Select setting="language" width={ 40 } items={
				<>
					<optgroup label="Popular" class="text-cyan-grey not-italic text-sm">
						<option>C</option>
						<option>C#</option>
						<option>C++</option>
						<option>CoffeeScript</option>
						<option>CSS</option>
						<option>Dart</option>
						<option>DM</option>
						<option>Elixir</option>
						<option>Go</option>
						<option>Groovy</option>
						<option>HTML</option>
						<option>Java</option>
						<option selected>JavaScript</option>
						<option>Kotlin</option>
						<option>Objective-C</option>
						<option>Perl</option>
						<option>PHP</option>
						<option>PowerShell</option>
						<option>Python</option>
						<option>Ruby</option>
						<option>Rust</option>
						<option>Scala</option>
						<option>Shell</option>
						<option>Swift</option>
						<option>TypeScript</option>
					</optgroup>
					<optgroup label="Other" class="text-cyan-grey not-italic text-sm">
						<option>1C Enterprise</option>
						<option>2-Dimensional Array</option>
						<option>4D</option>
						<option>ABAP</option>
						<option>ABAP CDS</option>
						<option>ABNF</option>
						<option>ActionScript</option>
						<option>Ada</option>
						<option>Adobe Font Metrics</option>
						<option>Agda</option>
						<option>AGS Script</option>
						<option>AIDL</option>
						<option>AL</option>
						<option>Alloy</option>
						<option>Alpine Abuild</option>
						<option>Altium Designer</option>
						<option>AMPL</option>
						<option>AngelScript</option>
						<option>Ant Build System</option>
						<option>Antlers</option>
						<option>ANTLR</option>
						<option>ApacheConf</option>
						<option>Apex</option>
						<option>API Blueprint</option>
						<option>APL</option>
						<option>Apollo Guidance Computer</option>
						<option>AppleScript</option>
						<option>Arc</option>
						<option>AsciiDoc</option>
						<option>ASL</option>
						<option>ASN.1</option>
						<option>ASP.NET</option>
						<option>AspectJ</option>
						<option>Assembly</option>
						<option>Astro</option>
						<option>Asymptote</option>
						<option>ATS</option>
						<option>Augeas</option>
						<option>AutoHotkey</option>
						<option>AutoIt</option>
						<option>Avro IDL</option>
						<option>Awk</option>
						<option>Ballerina</option>
						<option>BASIC</option>
						<option>Batchfile</option>
						<option>Beef</option>
						<option>Befunge</option>
						<option>Berry</option>
						<option>BibTeX</option>
						<option>Bicep</option>
						<option>Bikeshed</option>
						<option>Bison</option>
						<option>BitBake</option>
						<option>Blade</option>
						<option>BlitzBasic</option>
						<option>BlitzMax</option>
						<option>Bluespec</option>
						<option>Boo</option>
						<option>Boogie</option>
						<option>Brainfuck</option>
						<option>BrighterScript</option>
						<option>Brightscript</option>
						<option>Browserslist</option>
						<option>C-ObjDump</option>
						<option>C2hs Haskell</option>
						<option>Cabal Config</option>
						<option>Cadence</option>
						<option>Cairo</option>
						<option>CameLIGO</option>
						<option>CAP CDS</option>
						<option>Cap'n Proto</option>
						<option>CartoCSS</option>
						<option>Ceylon</option>
						<option>Chapel</option>
						<option>Charity</option>
						<option>Checksums</option>
						<option>ChucK</option>
						<option>CIL</option>
						<option>Cirru</option>
						<option>Clarion</option>
						<option>Clarity</option>
						<option>Classic ASP</option>
						<option>Clean</option>
						<option>Click</option>
						<option>CLIPS</option>
						<option>Clojure</option>
						<option>Closure Templates</option>
						<option>Cloud Firestore Security Rules</option>
						<option>CMake</option>
						<option>COBOL</option>
						<option>CODEOWNERS</option>
						<option>CodeQL</option>
						<option>ColdFusion</option>
						<option>ColdFusion CFC</option>
						<option>COLLADA</option>
						<option>Common Lisp</option>
						<option>Common Workflow Language</option>
						<option>Component Pascal</option>
						<option>CoNLL-U</option>
						<option>Cool</option>
						<option>Coq</option>
						<option>Cpp-ObjDump</option>
						<option>Creole</option>
						<option>Crystal</option>
						<option>CSON</option>
						<option>Csound</option>
						<option>Csound Document</option>
						<option>Csound Score</option>
						<option>CSV</option>
						<option>Cuda</option>
						<option>CUE</option>
						<option>Cue Sheet</option>
						<option>cURL Config</option>
						<option>Curry</option>
						<option>CWeb</option>
						<option>Cycript</option>
						<option>Cython</option>
						<option>D</option>
						<option>D-ObjDump</option>
						<option>Dafny</option>
						<option>Darcs Patch</option>
						<option>DataWeave</option>
						<option>Debian Package Control File</option>
						<option>DenizenScript</option>
						<option>desktop</option>
						<option>Dhall</option>
						<option>Diff</option>
						<option>DIGITAL Command Language</option>
						<option>dircolors</option>
						<option>DirectX 3D File</option>
						<option>DNS Zone</option>
						<option>Dockerfile</option>
						<option>Dogescript</option>
						<option>DTrace</option>
						<option>Dylan</option>
						<option>E</option>
						<option>E-mail</option>
						<option>Eagle</option>
						<option>Earthly</option>
						<option>Easybuild</option>
						<option>EBNF</option>
						<option>eC</option>
						<option>Ecere Projects</option>
						<option>ECL</option>
						<option>ECLiPSe</option>
						<option>EditorConfig</option>
						<option>Edje Data Collection</option>
						<option>edn</option>
						<option>Eiffel</option>
						<option>EJS</option>
						<option>Elm</option>
						<option>Emacs Lisp</option>
						<option>EmberScript</option>
						<option>EQ</option>
						<option>Erlang</option>
						<option>Euphoria</option>
						<option>F#</option>
						<option>F*</option>
						<option>Factor</option>
						<option>Fancy</option>
						<option>Fantom</option>
						<option>Faust</option>
						<option>Fennel</option>
						<option>FIGlet Font</option>
						<option>Filebench WML</option>
						<option>Filterscript</option>
						<option>fish</option>
						<option>Fluent</option>
						<option>FLUX</option>
						<option>Formatted</option>
						<option>Forth</option>
						<option>Fortran</option>
						<option>Fortran Free Form</option>
						<option>FreeBasic</option>
						<option>FreeMarker</option>
						<option>Frege</option>
						<option>Futhark</option>
						<option>G-code</option>
						<option>Game Maker Language</option>
						<option>GAML</option>
						<option>GAMS</option>
						<option>GAP</option>
						<option>GCC Machine Description</option>
						<option>GDB</option>
						<option>GDScript</option>
						<option>GEDCOM</option>
						<option>Gemfile.lock</option>
						<option>Genero</option>
						<option>Genero Forms</option>
						<option>Genie</option>
						<option>Genshi</option>
						<option>Gentoo Ebuild</option>
						<option>Gentoo Eclass</option>
						<option>Gerber Image</option>
						<option>Gettext Catalog</option>
						<option>Gherkin</option>
						<option>Git Attributes</option>
						<option>Git Config</option>
						<option>Git Revision List</option>
						<option>Gleam</option>
						<option>GLSL</option>
						<option>Glyph</option>
						<option>Glyph Bitmap Distribution Format</option>
						<option>GN</option>
						<option>Gnuplot</option>
						<option>Go Checksums</option>
						<option>Go Module</option>
						<option>Golo</option>
						<option>Gosu</option>
						<option>Grace</option>
						<option>Gradle</option>
						<option>Grammatical Framework</option>
						<option>Graph Modeling Language</option>
						<option>GraphQL</option>
						<option>Graphviz (DOT)</option>
						<option>Groovy Server Pages</option>
						<option>GSC</option>
						<option>Hack</option>
						<option>Haml</option>
						<option>Handlebars</option>
						<option>HAProxy</option>
						<option>Harbour</option>
						<option>Haskell</option>
						<option>Haxe</option>
						<option>HCL</option>
						<option>HiveQL</option>
						<option>HLSL</option>
						<option>HolyC</option>
						<option>hoon</option>
						<option>HTML+ECR</option>
						<option>HTML+EEX</option>
						<option>HTML+ERB</option>
						<option>HTML+PHP</option>
						<option>HTML+Razor</option>
						<option>HTTP</option>
						<option>HXML</option>
						<option>Hy</option>
						<option>HyPhy</option>
						<option>IDL</option>
						<option>Idris</option>
						<option>Ignore List</option>
						<option>IGOR Pro</option>
						<option>ImageJ Macro</option>
						<option>Inform 7</option>
						<option>INI</option>
						<option>Inno Setup</option>
						<option>Io</option>
						<option>Ioke</option>
						<option>IRC log</option>
						<option>Isabelle</option>
						<option>Isabelle ROOT</option>
						<option>J</option>
						<option>Janet</option>
						<option>JAR Manifest</option>
						<option>Jasmin</option>
						<option>Java Properties</option>
						<option>Java Server Pages</option>
						<option>JavaScript+ERB</option>
						<option>Jest Snapshot</option>
						<option>JetBrains MPS</option>
						<option>JFlex</option>
						<option>Jinja</option>
						<option>Jison</option>
						<option>Jison Lex</option>
						<option>Jolie</option>
						<option>jq</option>
						<option>JSON</option>
						<option>JSON with Comments</option>
						<option>JSON5</option>
						<option>JSONiq</option>
						<option>JSONLD</option>
						<option>Jsonnet</option>
						<option>Julia</option>
						<option>Jupyter Notebook</option>
						<option>Kaitai Struct</option>
						<option>KakouneScript</option>
						<option>KiCad Layout</option>
						<option>KiCad Legacy Layout</option>
						<option>KiCad Schematic</option>
						<option>Kit</option>
						<option>KRL</option>
						<option>Kusto</option>
						<option>kvlang</option>
						<option>LabVIEW</option>
						<option>Lark</option>
						<option>Lasso</option>
						<option>Latte</option>
						<option>Lean</option>
						<option>Less</option>
						<option>Lex</option>
						<option>LFE</option>
						<option>LigoLANG</option>
						<option>LilyPond</option>
						<option>Limbo</option>
						<option>Linker Script</option>
						<option>Linux Kernel Module</option>
						<option>Liquid</option>
						<option>Literate Agda</option>
						<option>Literate CoffeeScript</option>
						<option>Literate Haskell</option>
						<option>LiveScript</option>
						<option>LLVM</option>
						<option>Logos</option>
						<option>Logtalk</option>
						<option>LOLCODE</option>
						<option>LookML</option>
						<option>LoomScript</option>
						<option>LSL</option>
						<option>LTspice Symbol</option>
						<option>Lua</option>
						<option>M</option>
						<option>M4</option>
						<option>M4Sugar</option>
						<option>Macaulay2</option>
						<option>Makefile</option>
						<option>Mako</option>
						<option>Markdown</option>
						<option>Marko</option>
						<option>Mask</option>
						<option>Mathematica</option>
						<option>MATLAB</option>
						<option>Maven POM</option>
						<option>Max</option>
						<option>MAXScript</option>
						<option>mcfunction</option>
						<option>Mercury</option>
						<option>Meson</option>
						<option>Metal</option>
						<option>Microsoft Developer Studio Project</option>
						<option>Microsoft Visual Studio Solution</option>
						<option>MiniD</option>
						<option>MiniYAML</option>
						<option>Mint</option>
						<option>Mirah</option>
						<option>mIRC Script</option>
						<option>MLIR</option>
						<option>Modelica</option>
						<option>Modula-2</option>
						<option>Modula-3</option>
						<option>Module Management System</option>
						<option>Monkey</option>
						<option>Monkey C</option>
						<option>Moocode</option>
						<option>MoonScript</option>
						<option>Motoko</option>
						<option>Motorola 68K Assembly</option>
						<option>MQL4</option>
						<option>MQL5</option>
						<option>MTML</option>
						<option>MUF</option>
						<option>mupad</option>
						<option>Muse</option>
						<option>Mustache</option>
						<option>Myghty</option>
						<option>nanorc</option>
						<option>NASL</option>
						<option>NCL</option>
						<option>Nearley</option>
						<option>Nemerle</option>
						<option>NEON</option>
						<option>nesC</option>
						<option>NetLinx</option>
						<option>NetLinx+ERB</option>
						<option>NetLogo</option>
						<option>NewLisp</option>
						<option>Nextflow</option>
						<option>Nginx</option>
						<option>Nim</option>
						<option>Ninja</option>
						<option>Nit</option>
						<option>Nix</option>
						<option>NL</option>
						<option>NPM Config</option>
						<option>NSIS</option>
						<option>Nu</option>
						<option>NumPy</option>
						<option>Nunjucks</option>
						<option>NWScript</option>
						<option>ObjDump</option>
						<option>Object Data Instance Notation</option>
						<option>Objective-C++</option>
						<option>Objective-J</option>
						<option>ObjectScript</option>
						<option>OCaml</option>
						<option>Odin</option>
						<option>Omgrofl</option>
						<option>ooc</option>
						<option>Opa</option>
						<option>Opal</option>
						<option>Open Policy Agent</option>
						<option>OpenCL</option>
						<option>OpenEdge ABL</option>
						<option>OpenQASM</option>
						<option>OpenRC runscript</option>
						<option>OpenSCAD</option>
						<option>OpenStep Property List</option>
						<option>OpenType Feature File</option>
						<option>Org</option>
						<option>Ox</option>
						<option>Oxygene</option>
						<option>Oz</option>
						<option>P4</option>
						<option>Pan</option>
						<option>Papyrus</option>
						<option>Parrot</option>
						<option>Parrot Assembly</option>
						<option>Parrot Internal Representation</option>
						<option>Pascal</option>
						<option>Pawn</option>
						<option>PEG.js</option>
						<option>Pep8</option>
						<option>Pic</option>
						<option>Pickle</option>
						<option>PicoLisp</option>
						<option>PigLatin</option>
						<option>Pike</option>
						<option>PlantUML</option>
						<option>PLpgSQL</option>
						<option>PLSQL</option>
						<option>Pod</option>
						<option>Pod 6</option>
						<option>PogoScript</option>
						<option>Pony</option>
						<option>Portugol</option>
						<option>PostCSS</option>
						<option>PostScript</option>
						<option>POV-Ray SDL</option>
						<option>PowerBuilder</option>
						<option>Prisma</option>
						<option>Processing</option>
						<option>Procfile</option>
						<option>Proguard</option>
						<option>Prolog</option>
						<option>Promela</option>
						<option>Propeller Spin</option>
						<option>Protocol Buffer</option>
						<option>Protocol Buffer Text Format</option>
						<option>Public Key</option>
						<option>Pug</option>
						<option>Puppet</option>
						<option>Pure Data</option>
						<option>PureBasic</option>
						<option>PureScript</option>
						<option>Python console</option>
						<option>Python traceback</option>
						<option>q</option>
						<option>Q#</option>
						<option>QMake</option>
						<option>QML</option>
						<option>Qt Script</option>
						<option>Quake</option>
						<option>R</option>
						<option>Racket</option>
						<option>Ragel</option>
						<option>Raku</option>
						<option>RAML</option>
						<option>Rascal</option>
						<option>Raw token data</option>
						<option>RDoc</option>
						<option>Readline Config</option>
						<option>REALbasic</option>
						<option>Reason</option>
						<option>ReasonLIGO</option>
						<option>Rebol</option>
						<option>Record Jar</option>
						<option>Red</option>
						<option>Redcode</option>
						<option>Redirect Rules</option>
						<option>Regular Expression</option>
						<option>Ren'Py</option>
						<option>RenderScript</option>
						<option>ReScript</option>
						<option>reStructuredText</option>
						<option>REXX</option>
						<option>Rich Text Format</option>
						<option>Ring</option>
						<option>Riot</option>
						<option>RMarkdown</option>
						<option>RobotFramework</option>
						<option>robots.txt</option>
						<option>Roff</option>
						<option>Roff Manpage</option>
						<option>Rouge</option>
						<option>RPC</option>
						<option>RPGLE</option>
						<option>RPM Spec</option>
						<option>RUNOFF</option>
						<option>Sage</option>
						<option>SaltStack</option>
						<option>SAS</option>
						<option>Sass</option>
						<option>Scaml</option>
						<option>Scheme</option>
						<option>Scilab</option>
						<option>SCSS</option>
						<option>sed</option>
						<option>Self</option>
						<option>SELinux Policy</option>
						<option>ShaderLab</option>
						<option>ShellCheck Config</option>
						<option>ShellSession</option>
						<option>Shen</option>
						<option>Sieve</option>
						<option>Singularity</option>
						<option>Slash</option>
						<option>Slice</option>
						<option>Slim</option>
						<option>Smali</option>
						<option>Smalltalk</option>
						<option>Smarty</option>
						<option>SmPL</option>
						<option>SMT</option>
						<option>Solidity</option>
						<option>Soong</option>
						<option>SourcePawn</option>
						<option>SPARQL</option>
						<option>Spline Font Database</option>
						<option>SQF</option>
						<option>SQL</option>
						<option>SQLPL</option>
						<option>Squirrel</option>
						<option>SRecode Template</option>
						<option>SSH Config</option>
						<option>Stan</option>
						<option>Standard ML</option>
						<option>STAR</option>
						<option>Starlark</option>
						<option>Stata</option>
						<option>STL</option>
						<option>STON</option>
						<option>StringTemplate</option>
						<option>Stylus</option>
						<option>SubRip Text</option>
						<option>SugarSS</option>
						<option>SuperCollider</option>
						<option>Svelte</option>
						<option>SVG</option>
						<option>SWIG</option>
						<option>SystemVerilog</option>
						<option>Talon</option>
						<option>Tcl</option>
						<option>Tcsh</option>
						<option>Tea</option>
						<option>Terra</option>
						<option>TeX</option>
						<option>Texinfo</option>
						<option>Text</option>
						<option>Textile</option>
						<option>TextMate Properties</option>
						<option>Thrift</option>
						<option>TI Program</option>
						<option>TLA</option>
						<option>TOML</option>
						<option>TSQL</option>
						<option>TSV</option>
						<option>TSX</option>
						<option>Turing</option>
						<option>Turtle</option>
						<option>Twig</option>
						<option>TXL</option>
						<option>Type Language</option>
						<option>Unified Parallel C</option>
						<option>Unity3D Asset</option>
						<option>Unix Assembly</option>
						<option>Uno</option>
						<option>UnrealScript</option>
						<option>UrWeb</option>
						<option>V</option>
						<option>Vala</option>
						<option>Valve Data Format</option>
						<option>VBA</option>
						<option>VBScript</option>
						<option>VCL</option>
						<option>Verilog</option>
						<option>VHDL</option>
						<option>Vim Help File</option>
						<option>Vim Script</option>
						<option>Vim Snippet</option>
						<option>Visual Basic .NET</option>
						<option>Volt</option>
						<option>Vue</option>
						<option>Vyper</option>
						<option>Wavefront Material</option>
						<option>Wavefront Object</option>
						<option>wdl</option>
						<option>Web Ontology Language</option>
						<option>WebAssembly</option>
						<option>WebIDL</option>
						<option>WebVTT</option>
						<option>Wget Config</option>
						<option>Whiley</option>
						<option>Wikitext</option>
						<option>Win32 Message File</option>
						<option>Windows Registry Entries</option>
						<option>wisp</option>
						<option>Witcher Script</option>
						<option>Wollok</option>
						<option>World of Warcraft Addon Data</option>
						<option>X BitMap</option>
						<option>X Font Directory Index</option>
						<option>X PixMap</option>
						<option>X10</option>
						<option>xBase</option>
						<option>XC</option>
						<option>XCompose</option>
						<option>XML</option>
						<option>XML Property List</option>
						<option>Xojo</option>
						<option>Xonsh</option>
						<option>XPages</option>
						<option>XProc</option>
						<option>XQuery</option>
						<option>XS</option>
						<option>XSLT</option>
						<option>Xtend</option>
						<option>Yacc</option>
						<option>YAML</option>
						<option>YANG</option>
						<option>YARA</option>
						<option>YASnippet</option>
						<option>Yul</option>
						<option>ZAP</option>
						<option>Zeek</option>
						<option>ZenScript</option>
						<option>Zephir</option>
						<option>Zig</option>
						<option>ZIL</option>
						<option>Zimpl</option>
					</optgroup>
				</> as HTMLElement
			} setRestart={ props.restart } />
			<div class="flex gap-5">
				<Number setting="time" max={ Infinity } min={ 1 } step={ 1 } setRestart={ props.restart } />
				<Number setting="tabWidth" max={ 8 } min={ 2 } step={ 2 } onChange={ () => Format() } setRestart={ props.restart } />
			</div>
			<div class="flex">
				<Select setting="type" width={ 8 } items={
					<>
						<option selected class="text-cyan-grey not-italic text-sm">org</option>
						<option value="repo" class="text-cyan-grey not-italic text-sm">user/repo</option>
						<option class="text-cyan-grey not-italic text-sm">user</option>
					</> as HTMLElement
				} setRestart={ props.restart } />
				<Text setting="name" setRestart={ props.restart } />
			</div>
			<div class="flex gap-5">
				<Toggle name="Single Quote" setting="singleQuote" onChange={ () => props.restart(true) } />
				<Toggle name="Semi" setting="semi" onChange={ () => props.restart(true) } />
			</div>
			<div class="flex gap-5">
				<Toggle name="Tabs" setting="tabs" onChange={ () => props.restart(true) } />
				<Toggle name="Graph" setting="graph" onChange={ () => clearChart() }/>
			</div>
		</div>
		
	);
};

export default Setting;