interface WrapperProp {
    children : React.ReactNode
}

function Wrapper({children} : WrapperProp) {
    return(
        <div className="w-full py-2 px-2">
            {children}
        </div>
    )
}
export default Wrapper;