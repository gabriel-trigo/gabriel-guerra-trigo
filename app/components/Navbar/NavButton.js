function NavButton(props) {

    function handleClick() {
        props.setCurrSection(props.name)
    }
    return (
        <div onClick={ handleClick } className={`py-2 px-8 border-3 border-transparent text-gray-800 transition-all duration-100 ease-in-out hover:border-b-[#000] hover:text-[#000] hover:pb-0.2 active:pb-0.2 ${ props.currSection === props.name ? "border-b-[#000]" : "" } ${ props.currSection === props.name ? "text-[#000]" : "" }`}>
            { props.name }
        </div>
    )
}

export default NavButton