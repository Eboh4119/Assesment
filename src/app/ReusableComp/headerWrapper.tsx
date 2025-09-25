interface WrapperProp {
    children : React.ReactNode
}

function HeaderWrapper({children} : WrapperProp) {
    return(
        <div className="py-2 px-2 w-full">
            {children}
        </div>
    )
}

export default HeaderWrapper;