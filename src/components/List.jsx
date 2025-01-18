const List = () =>{
    const items = ["React", "Vue", "Angular", "Svelte", "Dimitri"];

    return (
        <>
        <p>Popular Courses names</p>

        <ul>
            {items.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
        </>
    );
}

export default List