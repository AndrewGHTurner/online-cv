
export default function Section({ title, content }) {

    return (
        <div className="section" >
            <h2 className="title">{title}</h2>
            {Array.isArray(content) ? (
                <ul className="pl-5 space-y-1 list-disc">
                    {content.map((item, index) => (

                        Array.isArray(item) ? (
                            <ul className="pl-5 space-y-1 list-disc">
                                {item.map((subItem, subIndex) => (
                                    <li key={subIndex} className="text-md">
                                        {subItem}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <li>{item}</li>
                        )

                    ))}
                </ul>
            ) : (
                <p className="leading-relaxed text-md">
                    {content}
                </p>
            )}
        </div>
    );
}