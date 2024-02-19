const Title = (props) => {
    return (
        <h1 className=
            "text-[#fff] dark:text-gray-100 font-bold font-sans text-3xl pb-10 tracking-tight">
            { props.title }
        </h1>
    );
}

export default Title;