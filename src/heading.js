

export default function Heading({ name, phone, email, github, linkedIn }) {
    return (
        <div className="m-2 bg-blue-100 border rounded-lg heading dark:bg-slate-800 text-slate-900 dark:text-slate-100 border-slate-500">
            <h1 className="text-2xl font-bold ">{name}</h1>
            <p className="text-lg">Phone: {phone}</p>
            <p className="text-lg">Email: {email}</p>
            <p className="text-lg">Immediately available · London-based · Open to office-based, hybrid, or remote opportunities</p>
            <div className="flex flex-col justify-center w-full gap-2 text-white bg-blue-200 border rounded-lg border-slate-500 md:flex-row dark:bg-slate-700">
                <div className="w-full p-1 md:w-1/2 ">

                    <a href={github}>
                        <p className="text-lg text-center bg-orange-800 rounded-lg hover:bg-orange-400">GitHub/AndrewGHTurner</p></a>

                </div>
                <div className="w-full p-1 md:w-1/2 ">

                    <a href={linkedIn}>
                        <p className="text-lg text-center bg-orange-600 rounded-lg hover:bg-orange-200 md:bg-blue-700 md:hover:bg-blue-400">LinkedIn/andrew-turner</p></a>

                </div>
            </div>



            <div className="flex flex-col justify-center w-full gap-2 text-white bg-blue-200 border rounded-lg border-slate-500 md:flex-row dark:bg-slate-700">
                <div className="w-full p-1 md:w-1/2 ">

                    <a
                        href={`${process.env.PUBLIC_URL}/AndrewTurner-CV-G.pdf`} download
                    >
                        <p className="text-lg text-center bg-blue-500 rounded-lg hover:bg-blue-200 md:bg-orange-600 md:hover:bg-orange-200">Download Full CV (PDF)</p>
                    </a>
                </div>
                <div className="w-full p-1 md:w-1/2 ">

                    <a
                        href={`mailto:${email}`}
                    >
                        <p className="text-lg text-center bg-blue-700 rounded-lg md:bg-blue-500 md:hover:bg-blue-200 hover:bg-blue-400">Email Me</p>
                    </a>
                </div>
            </div>

        </div>
    );
}