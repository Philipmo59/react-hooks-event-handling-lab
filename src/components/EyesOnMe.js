// Code EyesOnMe Component Here
export default function EyesOnMe(){
    function focus(){console.log("Good!")}
    function blur(){console.log("Hey! Eyes on me!")}
    // let button = document.getElementsByTagName("button")[0].addEventListener("focus",string => console.log("hello"))
    return(
            <button onFocus={focus} onBlur={blur}>Eyes on me</button>
        
    )
}

