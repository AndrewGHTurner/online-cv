

export default function Heading({ name, phone, email, github, linkedIn }) {
    return (
        <div className="m-2 bg-blue-100 border border-purple-700 rounded-lg heading dark:bg-slate-800 text-slate-900 dark:text-slate-100 dark:border-lime-300">
            <h1 className="text-2xl font-bold ">{name}</h1>
            <p className="text-lg">Phone: {phone}</p>
            <p className="text-lg">Email: {email}</p>
            <div className="flex flex-col justify-center w-full gap-2 text-white bg-blue-200 border rounded-lg md:flex-row dark:bg-slate-700">
                <div className="w-full p-1 md:w-1/2 ">
                    <p className="text-lg text-center bg-orange-800 rounded-lg hover:bg-orange-400">
                        <a href={github}>GitHub/AndrewGHTurner</a>
                    </p>
                </div>
                <div className="w-full p-1 md:w-1/2 ">
                    <p className="text-lg text-center bg-blue-700 rounded-lg hover:bg-blue-400">
                        <a href={linkedIn}>LinkedIn/andrew-turner</a>
                    </p>
                </div>
            </div>
        </div>
    );
}