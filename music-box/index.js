var container = window.document.getElementById("app")
// var titulo = document.createElement("h1");

// titulo.innerHTML = "Título inserido por JS :O";

// container.appendChild(titulo);

function Contador(props) {

    // let numero = 0;
    const [numero, setNumero] = React.useState(0);

    function somar(){
        setNumero(numero + 1)
        console.log("Somei e ficou = " + (numero + 1))
    }
    
    function subtrair(){
        setNumero(numero - 1)
        console.log("Subtrai e ficou = " + (numero + 1))
    }

    return (
        <React.Fragment>
            <h2> {props.titulo}</h2>
            <h2> {numero} </h2>
        
            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
        </React.Fragment>
    );
}


function App() {
    return (
        <React.Fragment>
            <h1>Vote no seu preferido</h1>
            <Contador titulo="Gandalf" />
            <Contador titulo="Saruman" />
        </React.Fragment>
    );
}

// function App(props) {
//     return (

//         <React.Fragment>
//             <h1> {props.titulo} </h1>
//             <h1> Eu sou um parágrafo</h1>
//         </React.Fragment>

//     );
// }

ReactDOM.render(React.createElement(App, null, null), container);