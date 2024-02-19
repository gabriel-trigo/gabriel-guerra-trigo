function NavButton(props) {
    return (
        <div className="py-2 px-8 border-3 border-transparent text-[#fff] transition-all duration-200 ease-in-out hover:border-b-[#1ffdb2] hover:text-[#1FFDB2] hover:pb-0.2 active:pb-0.2 active:border-b-[#1FFDB2] active:text-[#1FFDB2]">
            { props.name }
        </div>
    )
}

export default NavButton;