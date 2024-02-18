const Section = (props) => {
    return (
        <>
            <div className="flex pb-10 text-gray-800 dark:text-gray-400">
                <div id={props.id} className="basis-1/4 text-gray-500">
                    {props.title}
                </div>
                <div className="basis-3/4">
                    {props.description}
                </div>
            </div>
        </>
    );
}
export default Section;