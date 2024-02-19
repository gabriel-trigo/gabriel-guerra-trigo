const Section = (props) => {
    return (
        <>
            <div className="flex pb-10 text-[#fff]">
                <div id={props.id} className="basis-1/4">
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