function NavButton(props) {

    return (
        <a className="no-underline text-gray-500 hover:text-black" 
            href={ props.link }>
                { props.name }
        </a>
    )
}

export default NavButton