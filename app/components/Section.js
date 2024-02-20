const Section = (props) => {
    return (
        <>
            <div className="flex font-sans pb-10 text-gray-500">
                <div id={ props.id } className="basis-1/4">
                    { props.title }
                </div>
                <div className="basis-3/4 text-gray-900">
                    { props.description }
                </div>
            </div>
        </>
    );
}
export default Section;