import Link from 'next/link';

export default function Home() {
    return (
        <div
            className="
                flex justify-center items-center h-[100vh]
            "
        >
            <div className="bg-white py-14 px-8 w-[450px] mt-5 rounded-2xl">
                <h1 className="text-highligth text-left font-bold text-4xl">Login</h1>
                <form action="" className="mt-6">
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="username" className="text-black">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="border-2 rounded-md text-black py-1.5 px-1"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5 mt-2">
                        <label htmlFor="password" className="text-black">
                            Password
                        </label>
                        <input
                            type="text"
                            id="password"
                            name="password"
                            className="border-2 rounded-md text-black py-1.5 px-1"
                        />
                    </div>

                    <button className="bg-highligth   p-2 rounded-[8px] w-full mt-4">Login</button>
                </form>

                <p className="mt-2 text-black ">
                    Need a account?{' '}
                    <Link href={'/signup'} className="underline hover:text-black text-highligth">
                        Sing up
                    </Link>
                </p>
            </div>
        </div>
    );
}
